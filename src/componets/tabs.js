import { Box, Tab, Tabs as MuiTabs } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeValue } from "../features/items/tabValue";

const Tabs = ({ tabs }) => {
    const dispatch = useDispatch()
    const tabValue = useSelector(state => state.tabValue.value);

    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <MuiTabs value={tabValue} onChange={(_, newValue) => dispatch(changeValue(newValue))} aria-label="basic tabs example" centered>
                {tabs.map((tab, index) => (<Tab key={index} label={tab.name} />))}
            </MuiTabs>
        </Box>
    )
}

export default Tabs;