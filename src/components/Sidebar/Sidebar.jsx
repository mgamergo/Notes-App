import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DescriptionIcon from '@mui/icons-material/Description';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import { setCategory } from '../../store/noteCategorySlice';
import { setRenderData } from '../../store/noteSlice';

function Sidebar() {
  const dispatch = useDispatch()
  const activeItem = useSelector(state => state.category.selected)
  const noteData = useSelector(state => state.note.fullData)

  const setActiveItem = (item) => {
    let filteredNotes
    dispatch(setCategory({category: item}))
    switch (true) {
      case item === 'My Notes':
        filteredNotes = noteData.filter(item => !item.isArchived && !item.isTrashed)
        dispatch(setRenderData({noteData: filteredNotes}))
        break

      case item === 'Archived':
        filteredNotes = noteData.filter(item => item.isArchived)
        dispatch(setRenderData({noteData: filteredNotes}))
        break

      case item === 'Trashed':
        filteredNotes = noteData.filter(item => item.isTrashed)
        dispatch(setRenderData({noteData: filteredNotes}))
        break
    }
  }
 

  return (
    <div className='w-60 bg-gray-900 h-full'>
      <ul className='w-full p-4 my-2 bg-gray-900'>
        <li 
          className={`flex items-center mb-2 cursor-pointer p-3 rounded-md ${activeItem === 'My Notes' ? 'bg-gray-700' : ''}`} 
          onClick={() => setActiveItem('My Notes')}
        >
          <DescriptionIcon sx={{fontSize: '1.5rem'}} />
          <p className='pl-5 text-md font-bold'>My Notes</p>
        </li>
        <li 
          className={`flex items-center mb-2 cursor-pointer p-3 rounded-md ${activeItem === 'Archived' ? 'bg-gray-700' : ''}`} 
          onClick={() => setActiveItem('Archived')}
        >
          <ArchiveIcon sx={{fontSize: '1.5rem'}} />
          <p className='pl-5 text-md font-bold'>Archived</p>
        </li>
        <li 
          className={`flex items-center mb-2 cursor-pointer p-3 rounded-md ${activeItem === 'Trashed' ? 'bg-gray-700' : ''}`} 
          onClick={() => setActiveItem('Trashed')}
        >
          <DeleteIcon sx={{fontSize: '1.5rem'}} />
          <p className='pl-5 text-md font-bold'>Trashed</p>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
