import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
export const EventContext = createContext();
const baseAPI = import.meta.env.VITE_BASE_API;

export function EventProvider({ children }) {
    const [events, setEvents] = useState([]);
    const [event, setEvent] = useState({});

    useEffect(() => {
        getEvents();
    }, []);

    async function getEvents() {
        try {
            const response = await fetch(`${baseAPI}/api/events/all`);
            const data = await response.json();
            if (response.ok) {
                setEvents(data.data);
            } else {
                console.error(data.data);
            }
        } catch (error) {
            console.error(error);
        }
    }

    async function getEvent(id) {
        try {
            const response = await fetch(`${baseAPI}/api/events/${id}`);
            const data = await response.json();
            if (response.ok) {
                setEvent(data);
            } else {
                console.error(data.data);
            }
        } catch (error) {
            console.error(error);
        }
    }

    async function addEvent(event) {
        try {
            const response = await fetch(`${baseAPI}/api/events/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(event),
            });
            const data = await response.json();
            if (response.ok) {
                setEvents([...events, data.data]);
                return true;
            } else {
                console.error(data.data);
                return false;
            }
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async function updateEvent(event) {
        try {
            const response = await fetch(`${baseAPI}/api/events/${event._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(event),
            });
            const data = await response.json();
            if (response.ok) {
                getEvents();
            } else {
                console.error(data.message);
            }
        } catch (error) {
            console.error(error);
        }
    }

    async function deleteEvent(id) {
        try {
            const response = await fetch(`${baseAPI}/api/events/${id}`, {
                method: "DELETE",
            });
            const data = await response.json();
            if (response.ok) {
                getEvents();
            } else {
                console.error(data.message);
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    const value = {
        events,
        event,
        setEvent,
        getEvents,
        getEvent,
        addEvent,
        updateEvent,
        deleteEvent,
    };
    return <EventContext.Provider value={value}>{children}</EventContext.Provider>;
}

EventProvider.propTypes = {
    children: PropTypes.node,
};