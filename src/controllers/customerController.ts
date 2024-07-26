import { Request, Response } from "express";
import { Customer } from "../entity/Customer";
import {AppDataSource} from "../data-source";
import {validate} from "class-validator";


const customerRepository = AppDataSource.getRepository(Customer);

export const getCustomers = async (req: Request, res: Response): Promise<Response> => {
    const customers = await customerRepository.find();
    return res.status(200).json(customers);
};

export const createCustomer = async (req: Request, res: Response): Promise<Response> => {
    const newUser = customerRepository.create(req.body);

    const errors = await validate(newUser);
    if (errors.length > 0) {
        return res.status(400).json(errors);
    }

    const results = await customerRepository.save(newUser);
    return res.status(201).json(results);
};


export const getCustomerById = async (req: Request, res: Response)=>  {
    const customer = await customerRepository.findOne({
        where: {
            customer_id: parseInt(req.params.id)
        }
    });
    if (!customer) return res.status(404).json({ message: 'Customer not found' });
    res.status(200).json(customer);
}

export const updateCustomerById = async (req: Request, res: Response) =>   {
    const data = req.body;
    const customer = await customerRepository.findOne({
        where: {
            customer_id: parseInt(req.params.id)
        }
    });
    if (!customer) return res.status(404).json({ message: 'Customer not found' });

    customer.customer_name = data.customer_name;
    customer.email = data.email;
    customer.phone = data.phone;
    customer.address = data.address;
    customer.city = data.city;

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