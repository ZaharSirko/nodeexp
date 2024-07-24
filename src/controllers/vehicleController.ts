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
        const { license_plate, vin, brand, model, year, fuel_type, power } = req.body;
        const vehicle = await vehicleRepository.findOne({
        where: {
            vehicle_id: parseInt(req.params.id)
        }
       });
        if (!vehicle) return res.status(404).json({ message: 'Vehicle not found' });

        vehicle.license_plate = license_plate;
        vehicle.vin = vin;
        vehicle.brand = brand;
        vehicle.model = model;
        vehicle.year = year;
        vehicle.fuel_type = fuel_type;
        vehicle.power = power;

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