import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import RestoreIcon from '@mui/icons-material/Restore';
import PaidIcon from '@mui/icons-material/Paid';
import { Link } from "react-router-dom";

const Home = () => {
    const [value, setValue] = useState(0);

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction component={Link} to="/" label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationAction component={Link} to="bills" label="Total" icon={<PaidIcon />} />
            </BottomNavigation>
        </Paper>
    )
}

export default Home