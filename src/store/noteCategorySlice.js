import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selected: "My Notes"
}

const noteCategorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.selected = action.payload.category
        }
    }
})

export const {setCategory} = noteCategorySlice.actions;

export default noteCategorySlice.reducer