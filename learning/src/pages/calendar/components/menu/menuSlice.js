import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: true,
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toggleIsOpen(state){
            state.isOpen = !state.isOpen;
        }
    }
})

export const {toggleIsOpen} = menuSlice.actions;

export default menuSlice.reducer;