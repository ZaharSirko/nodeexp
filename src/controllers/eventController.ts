
import { Request, Response } from 'express';
import { Events } from '../entity/Events';
import { AppDataSource } from "../data-source";

const eventRepository = AppDataSource.getRepository(Events);

export const getEvents = async (req: Request, res: Response) => {
    try {
        const events = await eventRepository.find({ relations: ['contract'] });
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving events', error });
    }
}

export const createEvent = async (req: Request, res: Response) => {
    try {
        const newEvent = eventRepository.create(req.body);
        const event = await eventRepository.save(newEvent);
        res.status(201).json(event);
    } catch (error) {
        res.status(500).json({ message: 'Error creating event', error });
    }
}

export const getEventById = async (req: Request, res: Response) => {
    try {
        const event = await eventRepository.findOne({
            where: { event_id: parseInt(req.params.id) },
            relations: ['contract']
        });
        if (!event) return res.status(404).json({ message: 'Event not found' });
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving event', error });
    }
}

export const updateEventById = async (req: Request, res: Response) => {
    try {
        const { contract, event_date, event_type, comment } = req.body;
        const event = await eventRepository.findOne({
            where: { event_id: parseInt(req.params.id) },
            relations: ['contract']
        });
        if (!event) return res.status(404).json({ message: 'Event not found' });

        event.contract = contract;
        event.event_date = event_date;
        event.event_type = event_type;
        event.comment = comment;

        await eventRepository.save(event);
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: 'Error updating event', error });
    }
}

export const deleteEventById = async (req: Request, res: Response) => {
    try {
        const event = await eventRepository.findOne({
            where: { event_id: parseInt(req.params.id) },
            relations: ['contract']
        });
        if (!event) return res.status(404).json({ message: 'Event not found' });

        await eventRepository.remove(event);
        res.status(200).json({ message: 'Event deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting event', error });
    }
}
