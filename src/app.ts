
import express from 'express';
import bodyParser from "body-parser";
import userRoutes from "./routes/customerRoutes";
import vehicleRoutes from "./routes/vehicleRoutes";

const app = express();

app.use(bodyParser.json());
app.use("/users", userRoutes);

app.use("/vehicles", vehicleRoutes);

export default app;
