import React from "react";
import { Grid, Box, Typography } from "@mui/material";

const EmptyView = ({icon, text}) => {
    return (
        <Grid container justifyContent='center' textAlign='center' direction='column' alignItems='center' spacing={4} paddingTop={13}>
            <Grid item xs={12} display='flex' justifyContent='center'>
                <Box style={{ maxWidth: '10rem', maxHeight: '16rem' }}>
                    <img alt='coming soon' src={icon} width='100%' height='100%' />
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h4" style={{
                    color: '#f1f3f9',
                    fontWeight: 'bold'
                }}>{text}</Typography>
            </Grid>
        </Grid>
    )
}

export default EmptyView