import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const noteSlice = createSlice({
    name: "note",
    initialState,
    reducers: {
        setData: (state, action) => {
            state = action.payload.noteData
        }
    }
})

export const {setData} = noteSlice.actions

export default noteSlice.reducer