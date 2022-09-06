import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper, Grid, AppBar, Typography, Toolbar } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import PaidIcon from '@mui/icons-material/Paid';
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Monthly from './pages/monthly';
import Home from './pages/home/home';
import './index.scss'

const pageTitle = {
    '/': 'Daily Bills',
    '/bills': 'Total Bills' 
}

const App = () => {
    const [value, setValue] = useState(0);
    const location = useLocation();

    return (
        <>
            <Grid container justifyContent='center'>
                <AppBar position="static" className='appBar'>
                    <Toolbar variant="dense" >
                        <Typography variant="h6" color="primary" component="div" >
                            {pageTitle[location?.pathname]}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Grid item xs={12} md={8}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="bills" element={<Monthly />} />
                    </Routes>
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
                </Grid>
            </Grid>
        </>
    )
}

export default App