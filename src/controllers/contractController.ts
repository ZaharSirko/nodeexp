// src/controllers/ContractController.ts

import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Contracts } from '../entity/Contracts';
import { Customer } from '../entity/Customer';
import { Vehicles } from '../entity/Vehicles';

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

        res.status(200).json(newContract);
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
        const { duration, startDate, endDate, totalPrice, customerPricePerMonth, odometerAtExpiration, startMileage } = req.body;
    const contract = await contractRepository.findOne({
        where: {
            contract_id: parseInt(req.params.id),
        },
        relations:
            ["customer", "vehicles"]
    })
        if (!contract) return res.status(404).json({ message: 'Contract not found' });

        contract.duration = duration;
        contract.start_date = startDate;
        contract.end_date = endDate;
        contract.total_price = totalPrice;
        contract.price_month = customerPricePerMonth;
        contract.odometer = odometerAtExpiration;
        contract.start_mileage = startMileage;

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

