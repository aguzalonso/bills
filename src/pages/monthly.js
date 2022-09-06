import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const Monthly = () => {
    const itemStore = useSelector(state => state.itemStore.value);

    return (
        <>
            {itemStore?.map((item, index) => (<Typography key={index}>{item.concept}</Typography>))}
        </>
    )
}

export default Monthly