import { useState } from 'react';
import { Alert, Collapse, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

export default function AlertComponent({ message, severity, show, onClose }) {
    const [alert, setAlert] = useState(show);
    return (
        <Box sx={{ width: 'max-content', mt: 2 }}>
            <Collapse in={alert}>
                <Alert action={
                    <IconButton
                        aria-label='close'
                        color='inherit'
                        size='small'
                        onClick={() => {
                            setAlert(false);
                            if (onClose) onClose();
                        }}
                    >
                        <CloseIcon fontSize='inherit' />
                    </IconButton>
                }
                    variant='filled'
                    severity={severity}

                >
                    {message}
                </Alert>
            </Collapse>
        </Box>
    )
}

AlertComponent.propTypes = {
    message: PropTypes.string.isRequired,
    severity: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
}