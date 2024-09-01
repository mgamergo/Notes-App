import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Note, AddNoteForm } from './index';

function DisplayNotes() {
    const notesList = useSelector((state) => state.note.renderData);
    const isAddNoteVisible = useSelector(state => state.addNoteDisplay.isAddNoteVisible);


    return (
        <div className='w-full pl-5 pt-5'>
            {isAddNoteVisible && (
                <div className='w-full p-3'>
                    <AddNoteForm />
                </div>
            )}
            {notesList.length > 0 ? (
                <ul className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {notesList.map((item, index) => (
                        <Note key={index} note={item} />
                    ))}
                </ul>
            ) : (
                <div className='text-text-paragraph flex justify-center items-center'>
                    <h1 className='font-bold text-2xl'>No Notes Found. Add notes now!!</h1>
                </div>
            )}
        </div>
    );
}

export default DisplayNotes;
