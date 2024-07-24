import { Request, Response } from "express";
import { DataSource } from "typeorm";
import { Customer } from "../entity/Customer";
import config from '../../ormconfig';

const AppDataSource = new DataSource(config);

AppDataSource.initialize().then(() => {
    console.log("Data Source has been initialized!");
}).catch((err) => {
    console.error("Error during Data Source initialization:", err);
});

const customerRepository = AppDataSource.getRepository(Customer);

export const getCustomers = async (req: Request, res: Response): Promise<Response> => {
    const customers = await customerRepository.find();
    return res.status(200).json(customers);
};

export const createCustomer = async (req: Request, res: Response): Promise<Response> => {
    const newUser = customerRepository.create(req.body);
    const results = await customerRepository.save(newUser);
    return res.status(200).json(results);
};


export const getCustomerById = async (req: Request, res: Response)=>  {
    const customer = await customerRepository.findOne({
        where: {
            customer_id: parseInt(req.params.id)
        }
    });
    if (!customer) return res.status(404).json({ message: 'Customer not found' });
    res.json(customer);
}

export const updateCustomerById = async (req: Request, res: Response) =>   {
    const { name, email, phone, address, city } = req.body;
    const customer = await customerRepository.findOne({
        where: {
            customer_id: parseInt(req.params.id)
        }
    });
    if (!customer) return res.status(404).json({ message: 'Customer not found' });

    customer.customer_name = name;
    customer.email = email;
    customer.phone = phone;
    customer.address = address;
    customer.city = city;

    await customerRepository.save(customer);
    res.status(200).json(customer);
}

export const deleteCustomerById = async (req: Request, res: Response) =>  {
    const customer = await customerRepository.findOne({
        where: {
            customer_id: parseInt(req.params.id)
        }
    });
    if (!customer) return res.status(404).json({ message: 'Customer not found' });

    await customerRepository.remove(customer);
    res.status(200).json({ message: 'Customer deleted' });
}