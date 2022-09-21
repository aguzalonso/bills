import { Box, IconButton, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import './index.scss'
import { isEmpty } from "lodash";
import EmptyView from "../../componets/emptyView";
import image from '../../assets/images/expense2.png'


const Monthly = () => {
    const itemStore = useSelector(state => state.itemStore.value);

    const totalAmount = () => {
        let total = 0
        itemStore.forEach((item) => total += item.amount)

        return total
    }

    return (
        <>
            {isEmpty(itemStore) ? (<EmptyView icon={image} text='You have no expenses yet' />) :
                (
                    <>
                        <Box className='amount-container'>
                            <Typography variant="h3" style={{ color: '#f1f3f9' }}>TOTAL: ${totalAmount()}</Typography>
                        </Box>
                        <List sx={{
                            width: '100%',
                            overflow: 'auto',
                            maxHeight: '50vh'
                        }}>
                            {itemStore?.map((item, index) => (
                                <ListItem className="list-item" secondaryAction={
                                    <IconButton edge="end" aria-label="delete">
                                        <AttachMoneyIcon />{item.amount}
                                    </IconButton>
                                }
                                    key={index}>
                                    <ListItemText primary={item.concept.toUpperCase()} secondary={item.date} />
                                </ListItem>
                            ))}
                        </List>
                    </>
                )}
        </>
    )
}

export default Monthly