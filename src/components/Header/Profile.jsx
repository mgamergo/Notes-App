import React, { useState, useRef } from 'react';
import authService from '../../appwrite/auth';
import { useDispatch } from 'react-redux';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { logout } from '../../store/authSlice';

const Profile = () => {
  const dispatch = useDispatch()

  // State to manage the visibility of the menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Ref to manage the click outside functionality
  const menuRef = useRef(null);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle click outside the menu to close it
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  // Add event listener for clicks outside of the menu
  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const submit = () => {
    authService.logout()
    dispatch(logout())
    
  }

  return (
    <div className="relative inline-block" ref={menuRef}>
      {/* Avatar Image */}
      <AccountCircleIcon sx={{fontSize:"3rem", cursor: "pointer"}} onClick={toggleMenu}/> 

      {/* Conditional rendering of the menu */}
      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-800 shadow-lg rounded-lg py-2 z-50">
          <p className="text-center text-text-paragraph px-4 py-2">Hello, User!</p>
          <button 
            className="block m-auto mt-3 text-left px-4 py-2 text-white rounded-md bg-red-700 hover:bg-red-400 focus:bg-red-400"
            id="logout-button"
            onClick={submit}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
