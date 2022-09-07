import { createSlice } from '@reduxjs/toolkit'

export const itemStore = createSlice({
    name: 'itemStore',
    initialState: {
        value: []
    },
    reducers: {
        increment: (state, action) => {
            state.value = [...state.value, { ...action.payload }]
        }
    },
})

// Action creators are generated for each case reducer function
export const { increment } = itemStore.actions

export default itemStore.reducer