import React from "react"
import { CircularProgress, Grid } from "@mui/material"

const Loading = () => {
    return (
        <Grid container alignItems='center' display='flex' direction='column' paddingTop={30}>
            <Grid item xs={12}>
                <CircularProgress />
            </Grid>
        </Grid>
    )
}

export default Loading