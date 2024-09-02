import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeInvisible, makeVisible } from "../../store/addNoteDisplaySlice";

function AddButton() {
  const dispatch = useDispatch()

  const addNoteButtonClick = () => {
    dispatch(makeVisible())
  }

  return (
    <div>
      <button className="bg-green-700 text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-green-900 hover:text-text-paragraph"
        onClick={addNoteButtonClick}
      >
        Add Note
      </button>
    </div>
  );
}

export default AddButton;
