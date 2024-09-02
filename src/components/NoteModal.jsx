import React from 'react';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';

function NoteModal({ note, onClose }) {
  const { Title, Content, Color = '#030712', tags = [] } = note;

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
        <button
          className="absolute top-2 right-2"
          onClick={onClose}
        >
          <CloseIcon className="text-white" />
        </button>
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
      </motion.div>
    </motion.div>
  );
}

export default NoteModal;
