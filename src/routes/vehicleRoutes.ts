import { Router } from "express";
import {
    createVehicles,
    deleteVehicleById,
    getVehicleById,
    getVehicles,
    updateVehicleById
} from "../controllers/vehicleController";

const router = Router();

router.get("/", getVehicles);
router.post("/", createVehicles);
router.get("/:id",getVehicleById);
router.put("/:id",updateVehicleById);
router.delete("/:id",deleteVehicleById);


export default router;
