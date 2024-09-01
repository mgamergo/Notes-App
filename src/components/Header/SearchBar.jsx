import React from 'react';
import dataService from '../../appwrite/config';
import { useDispatch, useSelector } from 'react-redux';
import { Query } from 'appwrite';
import { setFullData, setRenderData } from '../../store/noteSlice';

function SearchBar() {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.note.fullData);

  const search = async (e) => {
    const searchQuery = e.target.value;
    if (searchQuery && searchQuery !== '') { 
      const query = [
        Query.search('Title', searchQuery),
        Query.search('Content', searchQuery)
      ];
      const result = await dataService.getAllNotes(query);
      console.log('Search results:', result);
      
      // Dispatch the search result with the correct payload structure
      dispatch(setRenderData({ noteData: result }));
    } else {
      // Reset to all notes with the correct payload structure
      dispatch(setRenderData({ noteData: notes }));
      console.log('All notes:', notes);
      console.log('I ran');
    }
  };

  return (
    <div>
      <input 
        type='search'
        onChange={search}
        placeholder='Search notes...'
        className='bg-gray-900 w-96 h-10 p-3'
      />
    </div>
  );
}

export default SearchBar;
