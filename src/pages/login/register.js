import React, { useState } from 'react';
import { OutlinedInput, Typography, Grid, Button } from '@mui/material';
import { Routes, Route, Link, useLocation, useHistory, useNavigate } from "react-router-dom";

import { useFormik } from 'formik';
import * as yup from 'yup';
import './index.scss'
import { useMutation } from 'react-query';
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

const Register = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)

    // const { data, isSuccess, isLoading, isError, mutate } = useMutation(newUser => {
    //     return fetch('http://localhost:4000/register', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(newUser)
    //     })
    //         .then(res => console.log('res', res))
    //         .catch(err => {
    //             console.log(err)
    //             return err
    //         })
    // })

    const registerUser = async (values) => {

        // await mutate(values)


        // if (isSuccess) {
        //     return navigate('/login')
        // }

        // if (isError) {
        //     setOpen(true)
        // }

        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
        })

        const data = await response.json()

        console.log('DATA', data)

        if (data.status === 'ok') {
            navigate('/login')
        } else {
            console.log('HOLAAA')
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
            registerUser(values)
            formik.handleReset();
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
                    <Button variant="outlined" onClick={() => navigate('/login')}>Go to login</Button>
                    <Button variant="contained" type='submit'>Register</Button>
                </Grid>
                <SnackBar open={open} setOpen={setOpen} message='Email already exist' />
            </Grid>
        </form>
    )
}

export default Register