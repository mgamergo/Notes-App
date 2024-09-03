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
          item.isTrashed = !item.isTrashed
          await dataService.updateNote(action.payload.$id, {...item, isTrashed: !item.isTrashed})
        }
      })
      state.renderData.map(async (item) => {
        if(item.$id === action.payload.$id) {
          item.isTrashed = !item.isTrashed
          await dataService.updateNote(action.payload.$id, {...item, isTrashed: !item.isTrashed})
        }
      })
    },
    setArchive: (state, action) => {
      state.fullData.map(async (item) => {
        if(item.$id === action.payload.$id){
           item.isArchived = !item.isArchived
           await dataService.updateNote(action.payload.$id, {...item, isArchived: !item.isArchived})
          }
      })
      state.renderData.map(async (item) => {
        if(item.$id === action.payload.$id) {
          item.isArchived = !item.isArchived
          await dataService.updateNote(action.payload.$id, {...item, isArchived: !item.isArchived})
        }
      })
    },
  },
});

export const { setFullData, setRenderData, resetData, setDelete, setArchive } = noteSlice.actions;

export default noteSlice.reducer;
