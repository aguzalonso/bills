import React from "react";
import { Slide, Snackbar } from "@mui/material";

const SnackBar = ({ open, setOpen, message }) => {
    return (
        <Snackbar
            open={open}
            onClose={() => setOpen(false)}
            TransitionComponent={(props) => <Slide {...props} direction='up'/>}
            message={message}
            key='snackbar'
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            autoHideDuration={10000}
        />
    )
}

export default SnackBar;