import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Contracts } from '../entity/Contracts';
import { Customer } from '../entity/Customer';
import { Vehicles } from '../entity/Vehicles';
import {validate} from "class-validator";

const contractRepository = AppDataSource.getRepository(Contracts);
const userRepository = AppDataSource.getRepository(Customer);
const vehicleRepository = AppDataSource.getRepository(Vehicles);

export const createContract =  async (req: Request, res: Response)=> {
    const data = req.body;
    const customer = await userRepository.findOneBy({ customer_id: parseInt(data.customer) });
        if (!customer) return res.status(404).json({ message: 'Customer not found' });

    const vehicle = await vehicleRepository.findOneBy({ vehicle_id: parseInt(data.vehicles) });
        if (!vehicle) return res.status(404).json({ message: 'Vehicle not found' });

    const newContract = contractRepository.create(data);

    const errors = await validate(newContract);
    if (errors.length > 0) {
        return res.status(400).json(errors);
    }

    const results = await contractRepository.save(newContract);

        res.status(201).json(results);
    }

export const getContracts =   async (req: Request, res: Response)=> {
        const contracts = await contractRepository.find({ relations: ['customer', 'vehicles'] });
        res.status(200).json(contracts);
    }

export const getContractById =    async (req: Request, res: Response)=> {
        const contract = await contractRepository.findOne({
            where: {
                contract_id: parseInt(req.params.id),
            },
            relations:
                ["customer", "vehicles"]
        })
        if (!contract) return res.status(404).json({ message: 'Contract not found' });
        res.status(200).json(contract);
    }

export const updateContractById =    async (req: Request, res: Response)=> {
    const data = req.body;
    const contract = await contractRepository.findOne({
        where: {
            contract_id: parseInt(req.params.id),
        },
        relations:
            ["customer", "vehicles"]
    })
        if (!contract) return res.status(404).json({ message: 'Contract not found' });

        contract.duration = data.duration;
        contract.start_date = data.start_date;
        contract.end_date = data.end_date;
        contract.total_price = data.total_price;
        contract.price_month = data.price_month;
        contract.odometer = data.odometer;
        contract.start_mileage = data.start_mileage;

        await contractRepository.save(contract);
        res.status(200).json(contract);
    }

export const deleteContractById =    async (req: Request, res: Response)=> {
    const contract = await contractRepository.findOne({
        where: {
            contract_id: parseInt(req.params.id)
        }
    });
        if (!contract) return res.status(404).json({ message: 'Contract not found' });

        await contractRepository.remove(contract);
        res.status(200).json({ message: 'Contract deleted' });
    }

