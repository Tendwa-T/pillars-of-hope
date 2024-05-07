import { Box, Card, CardActions, CardContent, CardMedia, Button, Modal, Snackbar, Alert } from "@mui/material";
import Typography from "@mui/material/Typography"
import { useEvent } from "../../context/Event/useEvent";
import { useState } from "react";
import moment from 'moment';
import AddEventForm from "./events/AddEventsForm";
import { useAuth } from "../../context/Auth/useAuth";
import EditEventsForm from "./events/EditEventsForm";
import PropTypes from 'prop-types'


export default function AdminEventsSection() {
    const [snackConfig, setSnackConfig] = useState({ openSnackbar: false, message: '', serverity: 'info' });
    const { events } = useEvent();
    const { isAuthenticated } = useAuth();


    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackConfig({ ...snackConfig, openSnackbar: false });
    };

    function DeleteEvent({ eventID }) {
        const [open, setOpen] = useState(false);
        const { deleteEvent } = useEvent();
        const handleOpen = () => {
            setOpen(true);
        };
        const handleClose = () => {
            setOpen(false);
        };
        async function handleDelete() {
            if (await deleteEvent(eventID)) {
                setSnackConfig({ openSnackbar: true, message: 'Event Deleted', serverity: 'success' });
                handleClose();
            } else {
                setSnackConfig({ openSnackbar: true, message: 'Error Deleting Event', serverity: 'error' });
                handleClose();
            }

        }
        const style = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: { xs: '90%', sm: '80%', md: '60%' },
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            pt: 2,
            px: 4,
            pb: 3,
        };


        return (

            <>
                <Button onClick={handleOpen} color='error' variant='contained'>Delete</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description"
                >
                    <Box sx={{ ...style, width: { xs: 350, sm: 400, md: 600 }, borderRadius: 5, }}>
                        <Typography id="child-modal-title" variant="h6"> Delete Event?</Typography>
                        <Typography id="child-modal-description" variant="body1">Are you sure you want to delete this event?</Typography>
                        <Box display={'flex'} justifyContent={'center'} my={2}></Box>
                        <Box width={"100%"} justifyContent={"space-evenly"} display={'flex'}>
                            <Button onClick={handleClose} variant="contained" color='error'>Do not Delete</Button>
                            <Button onClick={handleDelete} variant="contained" color='warning'>Yes, Delete Event</Button>
                        </Box>
                    </Box>
                </Modal>

            </>

        );
    }
    DeleteEvent.propTypes = {
        eventID: PropTypes.string.isRequired,

    }


    return (
        <Box mt={2} sx={{ display: 'flex', flexWrap: 'nowrap', flexDirection: 'column' }}>
            <Typography variant="h2" textAlign={'center'} sx={{ cursor: 'default', userSelect: 'none', }}>
                Events
            </Typography>

            {events && events.length === 0 &&
                <Box px={2} display={'flex'} justifyContent={'Center'} >
                    <Typography variant="h6" textAlign={'center'} sx={{ cursor: 'default', userSelect: 'none', }}>No events available</Typography>
                </Box>
            }
            {isAuthenticated && <Box px={2} display={'flex'} justifyContent={'end'}>
                <AddEventForm />
            </Box>}

            <Box padding={2} sx={{ overflowX: 'auto', display: { xs: 'block', sm: 'flex' }, flexWrap: 'nowrap', width: '100%' }}>

                {events && events.map((event) => (

                    <Card key={event._id} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', margin: 2, borderRadius: 5, minWidth: { xs: '70%', sm: '50%', md: '30%' }, flexWrap: 'nowrap' }}>

                        <CardMedia image={event.image} sx={{ height: 200, width: '100%', }} />
                        <CardContent>
                            <Typography variant="h5" textAlign={'center'} fontWeight={'bold'} sx={{ cursor: 'default', userSelect: 'none', }}>{event.title}</Typography>
                            <Typography variant="body1" sx={{ cursor: 'default', userSelect: 'none', }}>{event.description}</Typography>
                            <Typography variant="caption" sx={{ cursor: 'default', userSelect: 'none', }}>{moment(event.date).format("dddd, MMMM Do YYYY")}</Typography><br></br>
                            <Typography variant="caption" sx={{ cursor: 'default', userSelect: 'none', }}>{moment(event.time).format("h:mm a")}</Typography>
                        </CardContent>
                        {isAuthenticated && <CardActions sx={{ display: { xs: 'block', sm: 'flex' }, justifyContent: 'space-between', width: "100%" }}>
                            <DeleteEvent eventID={event._id} />
                            <EditEventsForm eventData={event} />
                        </CardActions>}

                    </Card>

                ))}

            </Box>
            <Snackbar open={snackConfig.openSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity={snackConfig.serverity} sx={{ width: '100%' }}>
                    {snackConfig.message}
                </Alert>
            </Snackbar>

        </Box>
    )
}