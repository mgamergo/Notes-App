import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    references: {},
}

const referenceSlice = createSlice({
    name: "reference",
    initialState,
    reducers: {
        setReference: (state, action) => {
            const {key, ref} = action.payload
            state.references[key] = ref
        },
        deleteReference: (state, action) => {
            const {key} = action.payload
            delete state.references[key]
        },
        clearReferences: (state) => {
            state.references = {}
        }
    }
})

export const {setReference, deleteReference, clearReferences} = referenceSlice.actions

export default referenceSlice.reducer