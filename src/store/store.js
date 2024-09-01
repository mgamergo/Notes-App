import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import noteSlice from "./noteSlice";
import referenceSlice from "./referenceSlice";
import addNoteDisplaySlice from "./addNoteDisplaySlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        note: noteSlice,
        reference: referenceSlice,
        addNoteDisplay: addNoteDisplaySlice,
    },
})

export default store