
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
        const data = req.body;
        const event = await eventRepository.findOne({
            where: { event_id: parseInt(req.params.id) },
            relations: ['contract']
        });
        if (!event) return res.status(404).json({ message: 'Event not found' });

        event.contract = data.contract;
        event.event_date = data.event_date;
        event.event_type = data.event_type;
        event.comment = data.comment;

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
