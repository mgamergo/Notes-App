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

      {/* Right Section (Search Icon and Hamburger Menu) */}
      <div className="flex-grow flex items-center justify-end md:hidden gap-3">
        {/* Search Icon */}
        {authStatus && (
          <SearchIcon
            fontSize="large"
            className="cursor-pointer text-white"
            onClick={toggleSearch}
          />
        )}

        {/* Hamburger Menu Icon */}
        {authStatus && (
          <MenuIcon
            fontSize="large"
            className="cursor-pointer text-white"
            onClick={toggleMenu}
          />
        )}
      </div>

      {/* Search Bar: Visible on large screens or when toggled */}
      <div className={`flex-grow ${isSearchOpen ? 'flex' : 'hidden'} md:flex items-center`}>
        {authStatus && <SearchBar />}
      </div>

      {/* Auth Links and Profile Section */}
      <div className="flex items-center gap-4 md:gap-8">
        {!authStatus ? (
          <div className="flex items-center gap-4">
            <Link to='/login'>
              <button className="px-4 py-2 rounded-md border font-bold transition-all duration-300 border-green-700 hover:bg-gray-900">
                Log In
              </button>
            </Link>
            <Link to='/signup'>
              <button className="px-4 py-2 rounded-md font-bold transition-all duration-300 bg-green-700 hover:bg-green-900 hover:text-text-paragraph">
                Sign Up
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-4 md:gap-8">
            {/* Hamburger Menu: Visible only when logged in */}
            <div className={`flex-col md:flex-row ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
              <AddButton />
              <Profile />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
