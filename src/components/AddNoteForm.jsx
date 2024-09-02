import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setFullData, setRenderData } from "../store/noteSlice";
import dataService from "../appwrite/config";
import { makeInvisible } from "../store/addNoteDisplaySlice";

function AddNoteForm() {
  const dispatch = useDispatch();
  const fullData = useSelector((state) => state.note.fullData);
  const userId = useSelector(state => state.auth.userData)

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      Title: "",
      Content: "",
      Color: "#030712",
      tags: [],
      isArchived: false,
      isTrashed: false,
    },
  });

  const cancel = () => {
    reset()
    dispatch(makeInvisible());
  }

  const submit = async (data) => {
    try {
      const addNote = await dataService.addNote(data);

      if (addNote) {     
        const {$id} = addNote   
        dispatch(makeInvisible());

        // Update Redux state and trigger re-render
        const updatedData = [...fullData, { ...data, $id: $id, userId: userId }];
        dispatch(setFullData({noteData: updatedData}));
        dispatch(setRenderData({noteData: updatedData}));

        reset();
      }
    } catch (error) {
      console.log("Error adding note:", error);
    }
  };

  return (
    <div className="w-full flex-col items-stretch p-4">
      <form onSubmit={handleSubmit(submit)} className="space-y-4">
        <div className="flex flex-col mb-5">
          <label htmlFor="Title" className="text-white mb-2">Title</label>
          <input 
            id="Title"
            placeholder="Title"
            {...register("Title")}
            className="bg-gray-900 text-white p-2 rounded"
          />
        </div>

        <div className="flex flex-col mb-5">
          <label htmlFor="Content" className="text-white mb-2">Content</label>
          <textarea 
            rows="4"
            id="Content"
            placeholder="Write your note here..."
            {...register("Content")}
            className="bg-gray-900 text-white p-2 rounded"
          />
        </div>

        <div className="flex justify-start items-center gap-3">
          <button type="submit" className="bg-green-900 px-4 py-2 rounded-md transition-all duration-300 hover:bg-green-700 hover:text-white cursor-pointer">
            Add
          </button>
          <button type='button' onClick = {cancel} className="bg-red-900 px-4 py-2 rounded-md transition-all duration-300 hover:bg-red-700 hover:text-white cursor-pointer">Cancel</button>
        </div>

      </form>
    </div>
  );
}

export default AddNoteForm;
