import React, { useEffect, useState } from 'react';
import { InputAdornment, OutlinedInput, Typography, Grid, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { increment } from '../../features/items/itemStore';
import './index.scss'
import useSaveBills from './useSaveBills';
import SnackBar from '../../componets/snackbar';

const validationSchema = yup.object({
    concept: yup
        .string('Enter your concept')
        .required('Concept is required'),
    amount: yup
        .string('Enter your amount')
        .required('Amount is required'),
});

const Recents = () => {
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState('')
    const { mutate, isSuccess, isError } = useSaveBills()

    const formik = useFormik({
        initialValues: {
            concept: '',
            amount: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const newValues = {
                ...values,
                date: new Date().toDateString(),
            };

            mutate(newValues)

            formik.handleReset();
        },
    });

    useEffect(() => {
        if (isError) {
            setOpen(true)
            setMessage('There was a error submitting your bill. Please try again later.')
        }

        if (isSuccess) {
            setOpen(true)
            setMessage('Bill was saved successfully!')
        }

    }, [isError, isSuccess])


    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container justifyContent='center' direction='column' alignItems='center' spacing={6} padding='30px' paddingTop={10}>
                <Grid item xs={12} style={{ width: '100%' }}>
                    <Typography variant='h5' className='typography'>Concept</Typography>
                    <OutlinedInput
                        id="concept"
                        name='concept'
                        placeholder="What did you buy?..."
                        value={formik.values.concept}
                        onChange={formik.handleChange}
                        variant="outlined"
                        className='input'
                        error={formik.touched.concept && Boolean(formik.errors.concept)}
                        helpertext={formik.touched.concept && formik.errors.concept}
                    />
                </Grid>
                <Grid item xs={12} style={{ width: '100%' }}>
                    <Typography variant='h5' className='typography'>Amount</Typography>
                    <OutlinedInput
                        id="amount"
                        name='amount'
                        placeholder='4.20...'
                        value={formik.values.amount}
                        onChange={formik.handleChange}
                        type='number'
                        className='input'
                        error={formik.touched.amount && Boolean(formik.errors.amount)}
                        helpertext={formik.touched.amount && formik.errors.amount}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    />
                </Grid>
                <Grid item container xs={12} direction='row' justifyContent='space-around' style={{ width: '100%', display: 'flex' }}>
                    <Button variant="outlined" onClick={() => formik.handleReset()}>Cancel</Button>
                    <Button variant="contained" type='submit'>Save</Button>
                </Grid>
                <SnackBar open={open} setOpen={setOpen} message={message} />
            </Grid>
        </form>
    )
}

export default Recents