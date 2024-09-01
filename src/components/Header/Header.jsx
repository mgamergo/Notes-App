import React from 'react'
import {AddButton, Profile, SearchBar} from '../index'

function Header() {
  return (
    <div className='w-screen bg-background py-5 border-b border-orange-400 flex justify-between px-5'>
      <div className='flex items-center gap-3'>
        <div className='text-orange-400 font-extrabold text-5xl mr-8'>N</div>
        <SearchBar />
      </div>

      <div className='flex items-center gap-8'>
        <AddButton />
        <Profile />
      </div>
    </div>
  )
}

export default Header
