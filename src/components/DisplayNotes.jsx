import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Note, AddNoteForm } from './index';

function DisplayNotes() {
    const notesList = useSelector((state) => state.note.renderData);
    const isAddNoteVisible = useSelector(state => state.addNoteDisplay.isAddNoteVisible);

    return (
        <div className='w-full px-5 md:ml-60 bg-red pt-5'>
            {isAddNoteVisible && (
                <div className='w-full p-3'>
                    <AddNoteForm />
                </div>
            )}
            {notesList.length > 0 ? (
                <ul className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-2'>
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
