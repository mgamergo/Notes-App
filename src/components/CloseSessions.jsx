import React from 'react'
import authService from '../appwrite/auth'

function CloseSessions() {
    const closeSessions = async () => {
        await authService.logout()
    }
  return (
    <div>
      <button className='px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-900' onClick={closeSessions}>
        Close Sessions
      </button>
    </div>
  )
}

export default CloseSessions
