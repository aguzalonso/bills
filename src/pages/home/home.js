import React from 'react';
import { InputAdornment, OutlinedInput, Typography, Grid, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import './index.scss'
import { useDispatch } from 'react-redux';
import { increment } from '../../features/items/itemStore';

const validationSchema = yup.object({
    concept: yup
        .string('Enter your concept')
        .required('Concept is required'),
    amount: yup
        .string('Enter your amount')
        .required('Amount is required'),
});

const Home = () => {
    const dispatch = useDispatch()

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
            dispatch(increment(newValues));
            formik.handleReset();
        },
    });

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
            </Grid>
        </form>
    )
}

export default Home