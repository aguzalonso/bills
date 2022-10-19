import React from "react";
import { Grid, IconButton, List, ListItem, ListItemText, Typography } from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { isEmpty } from "lodash";
import EmptyView from "../../componets/emptyView";
import image from '../../assets/images/expense2.png'
import useMonthlyBills from "./useMothlyBills";
import Loading from "../../componets/loading";
import './index.scss'

const month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

const Monthly = () => {
    const { bills, isLoading } = useMonthlyBills()
    const currentMonth = month[new Date().getMonth()]

    const totalAmount = () => {
        let total = 0
        bills.forEach((bill) => total += bill.amount)

        return total
    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <>
            {isEmpty(bills) ? (<EmptyView icon={image} text='You have no expenses yet' />) :
                (
                    <Grid container>
                        <Grid xs={12} className='amount-container'>
                            <Typography variant="h4" style={{ color: '#f1f3f9' }}>{currentMonth} TOTAL: ${totalAmount()}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <List className="list-container">
                                {bills?.map((bill, index) => (
                                    <ListItem
                                        className="list-item"
                                        secondaryAction={
                                            <IconButton edge="end" aria-label="delete">
                                                <AttachMoneyIcon />{bill.amount}
                                            </IconButton>
                                        }
                                        key={index}
                                    >
                                        <ListItemText primary={bill.concept.toUpperCase()} secondary={bill.date} />
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                    </Grid>
                )}
        </>
    )
}

export default Monthly