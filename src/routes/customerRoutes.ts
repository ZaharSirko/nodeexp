import { Router } from "express";
import {
    getCustomers,
    createCustomer,
    getCustomerById,
    updateCustomerById,
    deleteCustomerById
} from "../controllers/customerController";

const router = Router();

router.get("/", getCustomers);
router.post("/", createCustomer);
router.get("/:id",getCustomerById);
router.put("/:id",updateCustomerById);
router.delete("/:id",deleteCustomerById);


export default router;
