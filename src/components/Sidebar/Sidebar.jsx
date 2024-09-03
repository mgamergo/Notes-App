import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DescriptionIcon from '@mui/icons-material/Description';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import { setCategory } from '../../store/noteCategorySlice';
import { setRenderData } from '../../store/noteSlice';

function Sidebar() {
  const dispatch = useDispatch();
  const activeItem = useSelector(state => state.category.selected);
  const noteData = useSelector(state => state.note.fullData);

  const setActiveItem = (item) => {
    let filteredNotes;
    dispatch(setCategory({ category: item }));
    switch (true) {
      case item === 'My Notes':
        filteredNotes = noteData.filter(item => !item.isArchived && !item.isTrashed);
        dispatch(setRenderData({ noteData: filteredNotes }));
        break;
      case item === 'Archived':
        filteredNotes = noteData.filter(item => item.isArchived);
        dispatch(setRenderData({ noteData: filteredNotes }));
        break;
      case item === 'Trashed':
        filteredNotes = noteData.filter(item => item.isTrashed);
        dispatch(setRenderData({ noteData: filteredNotes }));
        break;
      default:
        break;
    }
  };

  return (
    <div className='relative'>
      <div className="hidden md:flex md:flex-col w-60 bg-gray-900 h-full absolute top-0">
        <ul className="w-full p-4 my-2 bg-gray-900">
          <li
            className={`flex items-center mb-2 cursor-pointer p-3 rounded-md ${activeItem === 'My Notes' ? 'bg-gray-700' : ''}`}
            onClick={() => setActiveItem('My Notes')}
          >
            <DescriptionIcon sx={{ fontSize: '1.5rem' }} />
            <p className="pl-5 text-md font-bold">My Notes</p>
          </li>
          <li
            className={`flex items-center mb-2 cursor-pointer p-3 rounded-md ${activeItem === 'Archived' ? 'bg-gray-700' : ''}`}
            onClick={() => setActiveItem('Archived')}
          >
            <ArchiveIcon sx={{ fontSize: '1.5rem' }} />
            <p className="pl-5 text-md font-bold">Archived</p>
          </li>
          <li
            className={`flex items-center mb-2 cursor-pointer p-3 rounded-md ${activeItem === 'Trashed' ? 'bg-gray-700' : ''}`}
            onClick={() => setActiveItem('Trashed')}
          >
            <DeleteIcon sx={{ fontSize: '1.5rem' }} />
            <p className="pl-5 text-md font-bold">Trashed</p>
          </li>
        </ul>
      </div>
      
      <div className="md:hidden flex justify-around bg-gray-900 p-2 fixed bottom-0 w-full">
        <button
          className={`flex items-center p-2 ${activeItem === 'My Notes' ? 'bg-gray-700' : ''}`}
          onClick={() => setActiveItem('My Notes')}
        >
          <DescriptionIcon sx={{ fontSize: '1.5rem' }} />
          <p className="pl-2 text-sm">My Notes</p>
        </button>
        <button
          className={`flex items-center p-2 ${activeItem === 'Archived' ? 'bg-gray-700' : ''}`}
          onClick={() => setActiveItem('Archived')}
        >
          <ArchiveIcon sx={{ fontSize: '1.5rem' }} />
          <p className="pl-2 text-sm">Archived</p>
        </button>
        <button
          className={`flex items-center p-2 ${activeItem === 'Trashed' ? 'bg-gray-700' : ''}`}
          onClick={() => setActiveItem('Trashed')}
        >
          <DeleteIcon sx={{ fontSize: '1.5rem' }} />
          <p className="pl-2 text-sm">Trashed</p>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
