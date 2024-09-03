import React from "react";
import { useDispatch } from "react-redux";
import { makeVisible } from "../../store/addNoteDisplaySlice";

function AddButton() {
  const dispatch = useDispatch();

  const addNoteButtonClick = () => {
    dispatch(makeVisible());
  };

  return (
    <button
      className="bg-green-700 text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-green-900 hover:text-text-paragraph w-full md:w-auto"
      onClick={addNoteButtonClick}
    >
      Add Note
    </button>
  );
}

export default AddButton;
