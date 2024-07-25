// src/routers/ContractRouter.ts

import { Router } from 'express';
import {
    createEvent, deleteEventById, getEventById,
    getEvents, updateEventById

} from "../controllers/eventController";

const router = Router();

router.get('/', getEvents);
router.post('/', createEvent);
router.get('/:id', getEventById);
router.put('/:id', updateEventById);
router.delete('/:id', deleteEventById);

export default router;
