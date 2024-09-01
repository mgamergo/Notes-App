import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAddNoteVisible: false,
}

const addNoteDisplaySlice = createSlice({
    name: 'addNoteDisplay',
    initialState,
    reducers: {
        makeVisible: (state, action) => {
            state.isAddNoteVisible = true
        },
        makeInvisible: (state,action) => {
            state.isAddNoteVisible = false
        },
    }
})

export const {makeInvisible, makeVisible} = addNoteDisplaySlice.actions

export default addNoteDisplaySlice.reducer