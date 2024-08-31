import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import noteSlice from "./noteSlice";
import referenceSlice from "./referenceSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        note: noteSlice,
        reference: referenceSlice,
    },
})

export default store