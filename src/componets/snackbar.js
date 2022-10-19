import React from "react";
import { Button, Slide, Snackbar } from "@mui/material";
// import IconButton from "@mui/icons-material/IconButton";
import CloseIcon from '@mui/icons-material/Close';

const SnackBar = ({ open, setOpen, message }) => {
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    }

    return (
        <Snackbar
            open={open}
            onClose={handleClose}
            TransitionComponent={(props) => <Slide {...props} direction='up' />}
            message={message}
            key='snackbar'
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            autoHideDuration={2000}
            action={[
                <Button key="close" onClick={handleClose}>
                    <CloseIcon />
                </Button>
            ]}
        />
    )
}

export default SnackBar;