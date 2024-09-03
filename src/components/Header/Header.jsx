import React, { useState } from "react";
import { AddButton, Profile, SearchBar } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MenuIcon from '@mui/icons-material/Menu'; // Material UI for Hamburger Icon
import SearchIcon from '@mui/icons-material/Search'; // Material UI for Search Icon

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="w-full bg-background py-2 border-b border-orange-400 flex items-center justify-between px-5">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link to='/'>
          <div className="text-orange-400 font-extrabold text-3xl md:text-4xl">
            N<span className="text-white font-bold text-2xl md:text-3xl">ote.</span>
          </div>
        </Link>
      </div>

      {/* Search Icon and Hamburger Menu for Small/Medium Screens */}
      <div className="flex items-center gap-3 md:hidden">
        {/* Search Icon */}
        {authStatus && (
          <SearchIcon
            fontSize="large"
            className="cursor-pointer text-white"
            onClick={toggleSearch}
          />
        )}

        {/* Hamburger Menu Icon */}
        <MenuIcon
          fontSize="large"
          className="cursor-pointer text-white"
          onClick={toggleMenu}
        />
      </div>

      {/* Search Bar: Visible on large screens or when toggled */}
      <div className={`flex-grow ${isSearchOpen ? 'flex' : 'hidden'} md:flex items-center`}>
        {authStatus && <SearchBar />}
      </div>

      {/* Auth Links and Profile Section - Hidden on small/medium devices, visible on large */}
      <div className={`md:flex items-center gap-4 md:gap-8 ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row`}>
        {!authStatus ? (
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Link to='/login'>
              <button className="px-4 py-2 rounded-md border font-bold transition-all duration-300 border-green-700 hover:bg-gray-900 w-full md:w-auto">
                Log In
              </button>
            </Link>
            <Link to='/signup'>
              <button className="px-4 py-2 rounded-md font-bold transition-all duration-300 bg-green-700 hover:bg-green-900 hover:text-text-paragraph w-full md:w-auto">
                Sign Up
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <AddButton />
            <Profile />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
