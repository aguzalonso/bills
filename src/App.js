import React, { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction, Paper, Grid, AppBar, Typography, Toolbar, IconButton, Menu, MenuItem } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import PaidIcon from '@mui/icons-material/Paid';

import './index.scss'
import { AccountCircle } from '@mui/icons-material';

const Recents = lazy(() => import('./pages/recents/recents'));
const TotalBills = lazy(() => import('./pages/total-bills/totalBills'))
const Register = lazy(() => import('./pages/login/register'))
const Login = lazy(() => import('./pages/login/login'))

const pageTitle = {
    '/': 'Daily Bills',
    '/bills': 'Total Bills',
    '/register': 'Register',
    '/login': 'Login'
}

const App = () => {
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const location = useLocation();
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const [isLogged, setIsLogged] = useState(false)

    useEffect(() => {
        if (token) {
            setIsLogged(true)
            navigate('/')
        } else {
            localStorage.removeItem('token')
            navigate('/login')
        }
    }, [token])


    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (e) => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        setAnchorEl(null);
        localStorage.removeItem('token')

        setIsLogged(false)
        navigate('/login')
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Grid container justifyContent='center'>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Typography variant="h6" color="primary" component="div" sx={{ flexGrow: 1 }}>
                            {pageTitle[location?.pathname]}
                        </Typography>
                        {isLogged &&
                            <div>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleLogout}>Log Out</MenuItem>
                                </Menu>
                            </div>
                        }
                    </Toolbar>
                </AppBar>
                <Grid item xs={12} md={8}>
                    <Routes>
                        <Route path="/" element={<Recents />} />
                        <Route path="/bills" element={<TotalBills />} />
                        {!isLogged && <Route path="/register" element={<Register />} />}
                        {!isLogged && <Route path="/login" element={<Login />} />}
                    </Routes>
                    {isLogged ? (
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
                    ) : (
                        null
                    )}
                </Grid>
            </Grid>
        </Suspense >
    )
}

export default App