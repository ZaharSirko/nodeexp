// src/routers/ContractRouter.ts

import { Router } from 'express';
import {
    createContract,
    deleteContractById,
    getContractById,
    getContracts,
    updateContractById
} from "../controllers/contractController";

const router = Router();

router.get('/', getContracts);
router.post('/', createContract);
router.get('/:id', getContractById);
router.put('/:id', updateContractById);
router.delete('/:id', deleteContractById);

export default router;
