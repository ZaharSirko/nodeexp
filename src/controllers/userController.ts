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

const userRepository = AppDataSource.getRepository(Customer);

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    const users = await userRepository.find();
    return res.json(users);
};

export const createUser = async (req: Request, res: Response): Promise<Response> => {
    const newUser = userRepository.create(req.body);
    const results = await userRepository.save(newUser);
    return res.json(results);
};

