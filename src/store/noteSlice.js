import { createSlice } from "@reduxjs/toolkit";
import dataService from "../appwrite/config";

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
    resetData: (state, action) => {
      state.fullData = []
      state.renderData = []
    },
    setDelete: (state, action) => {
      state.fullData.map(async (item) => {
        if(item.$id === action.payload.$id) {
          item.isTrashed = true
          await dataService.updateNote(action.payload.$id, {...item, isTrashed: true})
        }
      })
      state.renderData.map(async (item) => {
        if(item.$id === action.payload.$id) {
          item.isTrashed = true
          await dataService.updateNote(action.payload.$id, {...item, isTrashed: true})
        }
      })
    },
    setArchive: (state, action) => {
      state.fullData.map(async (item) => {
        if(item.$id === action.payload.$id){
           item.isArchived = true
           await dataService.updateNote(action.payload.$id, {...item, isArchived: true})
          }
      })
      state.renderData.map(async (item) => {
        if(item.$id === action.payload.$id) {
          item.isArchived = true
          await dataService.updateNote(action.payload.$id, {...item, isArchived: true})
        }
      })
    },
  },
});

export const { setFullData, setRenderData, resetData, setDelete, setArchive } = noteSlice.actions;

export default noteSlice.reducer;
