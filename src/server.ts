import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/customerRoutes";
import config from '../ormconfig';
import vehicleRoutes from "./routes/vehicleRoutes";
import {AppDataSource} from "./data-source";

const app = express();
const PORT = 3000;

AppDataSource.initialize().then(() => {
    console.log('Data Source has been initialized!');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err) => {
    console.error('Error during Data Source initialization:', err);
});