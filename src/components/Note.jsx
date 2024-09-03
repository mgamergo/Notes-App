import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {NoteModal} from './index'
import { useDispatch, useSelector } from "react-redux";
import { setArchive, setDelete, setFullData, setRenderData } from "../store/noteSlice";

function Note({ note }) {
  const [isNoteOpened, setIsNoteOpened] = useState(false)
  const { $id, Title, Content, Color = "#030712", tags = [], isArchived, isTrashed, userId } = note;
  const dispatch = useDispatch()

  const clicked = () => {
    setIsNoteOpened(prev => !prev)
  }

  const deleteNote = () => { 
    dispatch(setDelete({$id: $id}))
  }

  const archiveNote = () => {
    dispatch(setArchive({$id: $id}))
  }

  return (
    <li
      style={{ backgroundColor: Color }}
      className={`text-white p-5 py-8 pb-3 rounded-lg flex-col justify-center items-center  border border-gray-500 list-none hover:shadow-slate-800 hover:shadow-lg`}
      onClick={clicked}
    >
      <h3 className="text-lg font-bold pb-5 text-white">{Title}</h3>
      <p className="text-text-paragraph mb-8">{Content}</p>
      <ul className="flex gap-1 items-center mt-3">
        {tags.map((tag, index) => (
          <li
            className="text-sm p-1 px-3 bg-slate-800 rounded-2xl transition duration-200 hover:bg-slate-600 group"
            key={index}
          >
            <div className="flex gap-2 items-center">
              <p className="text-text-paragraph">{tag}</p>
              <button className="hidden group-hover:inline-flex">
                <CloseIcon
                  sx={{ fontSize: "1.2rem" }}
                  className="text-red-500"
                />
              </button>
            </div>
          </li>
        ))}
      </ul>
      {isNoteOpened ? <NoteModal note={note} clicked={clicked} deleteNote={deleteNote} archiveNote={archiveNote} /> : null}
    </li>
  );
}

export default Note;
