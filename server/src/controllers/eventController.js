const Event = require('../models/eventModel');

async function createEvent(req, res) {
    if (!req.body) {
        return res.status(400).json({ data: 'Please provide event details' })
    }
    try {
        const event = await Event.create(req.body);
        if (!event) {
            return res.status(500).json({ data: 'Failed to create event' })
        }
        return res.status(201).json({ data: event })

    } catch (error) {
        return res.status(500).json({ data: error.message })
    }
}

async function getAllEvents(req, res) {
    try {
        const events = await Event.find({
            isActive: true
        }, { __v: 0, }).sort({ date: -1 })
        if (!events) {
            return res.status(404).json({ data: 'No events found' })
        }
        return res.status(200).json({ data: events })

    } catch (error) {
        return res.status(500).json({ data: error.message })
    }
}

async function getEvent(req, res) {
    const { id } = req.params;
    try {
        const event = await Event.findById(id, { __v: 0, _id: 0 }, {
            isActive: true
        });
        if (!event) {
            return res.status(404).json({ data: 'Event not found' })
        }
        return res.status(200).json({ data: event })

    } catch (error) {
        return res.status(500).json({ data: error.message })
    }
}

async function updateEvent(req, res) {
    const { id } = req.params;
    try {
        const event = await Event.findByIdAndUpdate(id, req.body, { new: true });
        if (!event) {
            return res.status(404).json({ data: 'Event not found' })
        }
        return res.status(200).json({ data: event })

    } catch (error) {
        return res.status(500).json({ data: error.message })
    }
}

async function deleteEvent(req, res) {
    const { id } = req.params;
    try {
        const event = await Event.findByIdAndUpdate(id, { isActive: false }, { new: true });
        if (!event) {
            return res.status(404).json({ data: 'Event not found' })
        }
        return res.status(200).json({ data: 'Event deleted successfully' })

    } catch (error) {
        return res.status(500).json({ data: error.message })
    }
}

module.exports = {
    createEvent,
    getAllEvents,
    getEvent,
    updateEvent,
    deleteEvent
}