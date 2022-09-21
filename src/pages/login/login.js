import React, { useState } from 'react';
import { OutlinedInput, Typography, Grid, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import './index.scss'
import { Link, useNavigate } from 'react-router-dom';
import SnackBar from '../../componets/snackbar';

const validationSchema = yup.object({
    email: yup
        .string('Enter your Email')
        .required('Email is required')
        .email(),
    password: yup
        .string('Enter your password')
        .required('Password is required')
        .min(8)
});

const Login = () => {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()
    const loginUser = async (values) => {
        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
        })

        const data = await response.json()

        if (data.user) {
            localStorage.setItem('token', data.user)
            navigate('/')
        } else {
            setOpen(true)
        }
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            loginUser(values)
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container justifyContent='center' direction='column' alignItems='center' spacing={6} padding='30px' paddingTop={10}>
                <Grid item xs={12} style={{ width: '100%' }}>
                    <Typography variant='h5' className='typography'>Email</Typography>
                    <OutlinedInput
                        id="email"
                        name='email'
                        placeholder="marty.mcfly@hillvalley.com"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        variant="outlined"
                        type='email'
                        className='input'
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helpertext={formik.touched.email && formik.errors.email}
                    />
                </Grid>
                <Grid item xs={12} style={{ width: '100%' }}>
                    <Typography variant='h5' className='typography'>Password</Typography>
                    <OutlinedInput
                        id="password"
                        name='password'
                        placeholder='*****'
                        type='password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        className='input'
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helpertext={formik.touched.password && formik.errors.password}
                    // startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    />
                </Grid>
                <Grid item container xs={12} direction='row' justifyContent='space-around' style={{ width: '100%', display: 'flex' }}>
                    <Button variant="contained" type='submit'>Log in</Button>
                </Grid>
                <Grid item container xs={12} direction='row' justifyContent='space-around' style={{ width: '100%', display: 'flex' }}>
                    <Typography className='typography'>If you don't have an account, <Link className='link' to='/register'>click here</Link></Typography>
                </Grid>
                <SnackBar open={open} setOpen={setOpen} message='Please check your usernname and password' />
            </Grid>
        </form>
    )
}

export default Login