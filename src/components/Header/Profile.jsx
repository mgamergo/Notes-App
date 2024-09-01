import React, { useState, useRef } from 'react';

const Profile = () => {
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

  return (
    <div className="relative inline-block" ref={menuRef}>
      {/* Avatar Image */}
      <img 
        src="avatar.png" 
        alt="Avatar" 
        className="w-10 h-10 rounded-full cursor-pointer" 
        onClick={toggleMenu} 
      />

      {/* Conditional rendering of the menu */}
      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
          <p className="text-center text-gray-700 px-4 py-2">Hello, User!</p>
          <button 
            className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 focus:bg-gray-100"
            id="logout-button"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
