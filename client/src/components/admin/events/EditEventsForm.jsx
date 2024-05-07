import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { TextField, Box, Button, Typography, CircularProgress, Modal, } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers';
import { styled } from '@mui/material/styles/';
import moment from 'moment';
import { useEvent } from '../../../context/Event/useEvent';

const baseAPI = import.meta.env.VITE_BASE_API;

export default function EditEventsForm({ eventData, }) {
    const [showModal, setShowModal] = useState(false);
    const [eventID, setEventID] = useState(eventData._id);
    const [title, setTitle] = useState(eventData.title);
    const [description, setDescription] = useState(eventData.description);
    const [location, setLocation] = useState(eventData.location);
    const [date, setDate] = useState(eventData.date);
    const [time, setTime] = useState(eventData.time);
    const [image, setImage] = useState();
    const [imageURL, setImageURL] = useState(eventData.image);
    const [loading, setLoading] = useState(false);
    const { updateEvent } = useEvent();

    useEffect(() => {
        setEventID(eventData._id)
        setTitle(eventData.title);
        setDescription(eventData.description);
        setLocation(eventData.location);
        setDate(eventData.date);
        setTime(eventData.time);
        setImageURL(eventData.image);
    }, [eventData])

    const handleOpen = () => {
        setShowModal(!showModal);
    }




    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    })



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

    async function handleSubmit() {
        setLoading(true);
        const updatedEvent = {
            _id: eventID,
            title,
            description,
            location,
            date,
            time,
            image: imageURL
        };
        if ((await updateEvent(updatedEvent))) {
            handleOpen();
            setLoading(false);
        }

        setLoading(false);
    }

    async function handleImageUpload(e) {
        setLoading(true);
        const file = e.target.files[0];
        setImage(file);
        const formData = new FormData();
        formData.append('image', image);

        try {
            const response = await fetch(`${baseAPI}/api/upload`, {
                method: 'POST',
                body: formData
            })

            if (response.ok) {
                const data = await response.json();
                setImageURL(data.url);
                console.log('Image uploaded successfully', data);
                setLoading(false);
                return;
            } else {
                console.log('Failed to upload image');
                setLoading(false);
                return;
            }
        } catch (error) {
            setLoading(false);
            console.error(error.message)
        }
    }


    return (
        <>
            <Button onClick={handleOpen}>
                Edit
            </Button>

            <Modal
                open={showModal}
                onClose={handleOpen}
                aria-labelledby="events-form"
                aria-describedby="events-form"
                disableEnforceFocus
            >
                <Box sx={{ ...style }} border={1} borderRadius={5} justifyContent={"space-between"} display={'flex'} flexDirection={'column'}>
                    <Typography variant="h4" textAlign={'center'}>Edit Event</Typography>

                    {imageURL && <Box display={'flex'} justifyContent={'center'}>
                        <img src={imageURL} alt="event" style={{ width: '30%', height: '30%' }} />
                    </Box>}
                    <Box my={2} width={'100%'} display={'flex'} justifyContent={'center'}>
                        {loading ? <CircularProgress /> : <Button
                            variant="outlined"
                            component="label"
                            role={"undefined"}
                            tabIndex={-1}
                            startIcon={<CloudUpload />}
                        >
                            Change Image
                            <VisuallyHiddenInput type='file' onChange={handleImageUpload} />
                        </Button>}

                    </Box>

                    <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} sx={{ pb: { xs: 2, md: 2 }, pr: { xs: 0, md: 2 } }} />
                    <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} sx={{ pb: { xs: 2, md: 2 }, pr: { xs: 0, md: 2 } }} />
                    <TextField label="Location" value={location} onChange={(e) => setLocation(e.target.value)} sx={{ pb: { xs: 2, md: 2 }, pr: { xs: 0, md: 2 } }} />

                    <Box justifyContent={"space-between"} display={'flex'}>
                        <LocalizationProvider dateAdapter={AdapterMoment}>

                            <DatePicker
                                label="Date"
                                value={moment(date)}
                                onChange={(newValue) => {
                                    setDate(newValue);
                                }}
                                slotProps={{ textField: { variant: 'outlined' } }}
                                sx={{ pb: { xs: 2, md: 2 }, pr: { xs: 0, md: 2 } }}
                            />
                            <TimePicker
                                label="Time"
                                value={moment(time)}
                                onChange={(newValue) => {
                                    setTime(newValue);
                                }}
                                slotProps={{ textField: { variant: 'outlined' } }}
                                sx={{ pb: { xs: 2, md: 2 }, pr: { xs: 0, md: 2 } }}
                            />

                        </LocalizationProvider>
                    </Box>
                    <Box display={'flex'} justifyContent={'center'}>
                        {loading ? <CircularProgress /> :
                            <Box width={"100%"} justifyContent={"space-evenly"} display={'flex'} >
                                <Button onClick={handleOpen} variant='outlined'>Cancel</Button>
                                <Button variant='contained' onClick={handleSubmit} >Submit</Button>
                            </Box>
                        }
                    </Box>

                </Box>
            </Modal>

        </>
    )


}
EditEventsForm.propTypes = {
    eventData: PropTypes.object.isRequired,
};
