import { Request, Response } from "express";
import {Vehicles} from "../entity/Vehicles";
import {AppDataSource} from "../data-source";


const vehicleRepository = AppDataSource.getRepository(Vehicles);

export const getVehicles= async (req: Request, res: Response): Promise<Response> => {
    const customers = await vehicleRepository.find();
    return res.status(200).json(customers);
};

export const createVehicles = async (req: Request, res: Response)=> {
        const newVehicle = vehicleRepository.create(req.body);
        const vehicle =  vehicleRepository.save(newVehicle);
        return res.status(201).json(vehicle);
    }


export const getVehicleById = async (req: Request, res: Response) => {
        const vehicle = await vehicleRepository.findOne({
            where: {
                vehicle_id: parseInt(req.params.id)
            }
        });
        if (!vehicle) return res.status(404).json({ message: 'Vehicle not found' });
        return res.status(200).json(vehicle);
    }

export const updateVehicleById  = async (req: Request, res: Response)=> {
        const data = req.body;
        const vehicle = await vehicleRepository.findOne({
        where: {
            vehicle_id: parseInt(req.params.id)
        }
       });
        if (!vehicle) return res.status(404).json({ message: 'Vehicle not found' });

        vehicle.license_plate = data.license_plate;
        vehicle.vin = data.vin;
        vehicle.brand = data.brand;
        vehicle.model = data.model;
        vehicle.year = data.year;
        vehicle.fuel_type = data.fuel_type;
        vehicle.power = data.power;

        await vehicleRepository.save(vehicle);
    return res.status(200).json(vehicle);
    }

export const deleteVehicleById  = async (req: Request, res: Response)=> {
    const vehicle = await vehicleRepository.findOne({
        where: {
            vehicle_id: parseInt(req.params.id)
        }
    });
        if (!vehicle) return res.status(404).json({ message: 'Vehicle not found' });

        await vehicleRepository.remove(vehicle);
        return res.status(200).json({ message: 'Vehicle deleted' });
}