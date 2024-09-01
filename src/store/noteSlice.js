import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullData: [],
  renderData: [],
};

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    setFullData: (state, action) => {
      state.fullData = action.payload.noteData;
    },
    setRenderData: (state, action) => {
      state.renderData = action.payload.noteData;
    },
  },
});

export const { setFullData, setRenderData } = noteSlice.actions;

export default noteSlice.reducer;
