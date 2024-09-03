import React, { useState, useRef } from 'react';
import authService from '../../appwrite/auth';
import { useDispatch } from 'react-redux';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { logout } from '../../store/authSlice';
import { makeInvisible } from '../../store/addNoteDisplaySlice';
import { setCategory } from '../../store/noteCategorySlice';
import { resetData } from '../../store/noteSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const submit = async () => {
    dispatch(logout());
    dispatch(makeInvisible());
    dispatch(setCategory('My Notes'));
    dispatch(resetData());
    await authService.logout();
  };

  return (
    <div className="relative inline-block" ref={menuRef}>
      <AccountCircleIcon
        sx={{ fontSize: "3rem", cursor: "pointer" }}
        onClick={toggleMenu}
      />

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
