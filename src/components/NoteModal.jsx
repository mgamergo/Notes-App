import React from "react";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import dataService from "../appwrite/config";
import { useDispatch, useSelector } from "react-redux";
import { setFullData, setRenderData } from "../store/noteSlice";

function NoteModal({ note, clicked }) {
  const { $id, Title, Content, Color = "#030712", tags = [] } = note;
  const noteData = useSelector(state => state.note.fullData)
  const renderNoteData = useSelector(state => state.note.renderData)
  const dispatch = useDispatch()

  const close = (e) => {
    e.stopPropagation();
    clicked();
  };

  const deleteClicked = async () => {
    const result = await dataService.deleteNote($id)
    if (result) {
      const newData = noteData.filter(item => item.$id != $id)
      const newRenderData = renderNoteData.filter(item => item.$id != $id)
      dispatch(setFullData({noteData: newData}))
      dispatch(setRenderData({noteData: newRenderData}))
    }
  }

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      <motion.div
        className="bg-gray-900 p-8 rounded-lg text-white max-w-lg w-full relative"
        style={{ backgroundColor: Color }}
      >
        {/* <button
          className="absolute top-2 right-2"
          onClick={close}
        >
          <CloseIcon className="text-white" />
        </button> */}
        <h2 className="text-2xl font-bold mb-4">{Title}</h2>
        <p className="text-lg mb-6">{Content}</p>
        <ul className="flex gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <li
              className="text-sm p-1 px-3 bg-slate-800 rounded-2xl"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="w-full flex justify-center items-center gap-3">
          <button className="bg-green-900 w-20 text-white inline-flex justify-center py-2 rounded-md transition-all duration-300 hover:bg-green-700 hover:text-text-paragraph">
            Edit
          </button>
          <button className="inline-flex justify-center w-20 text-left py-2 text-white rounded-md bg-red-900 hover:bg-red-700 focus:bg-red-700"
            onClick={deleteClicked}
          >
            Delete
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default NoteModal;
