
import express from 'express';
import bodyParser from "body-parser";
import userRoutes from "./routes/customerRoutes";
import vehicleRoutes from "./routes/vehicleRoutes";
import contractRouter from "./routes/contractRouter";
import eventRouter from "./routes/eventRouter";

const app = express();

app.use(bodyParser.json());
app.use("/users", userRoutes);

app.use("/vehicles", vehicleRoutes);

app.use("/contracts", contractRouter);

app.use("/events", eventRouter);

export default app;
