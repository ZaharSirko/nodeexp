import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes";
import config from '../ormconfig';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use("/users", userRoutes);

createConnection(config).then(() => {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}).catch(error => console.log(error));
