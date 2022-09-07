import { createSlice } from '@reduxjs/toolkit'

export const tabValue = createSlice({
    name: 'itemStore',
    initialState: {
        value: 0
    },
    reducers: {
        changeValue: (state, action) => {
            state.value = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { changeValue } = tabValue.actions

export default tabValue.reducer