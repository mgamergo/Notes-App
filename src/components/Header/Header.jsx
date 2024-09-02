import React from "react";
import { AddButton, Profile, SearchBar, CloseSessions } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  return (
    <div className="w-screen bg-background py-2 border-b border-orange-400 flex justify-between px-5 h-full">
      <div className="flex items-center gap-3">
        <Link to='/'>
          <div className="text-orange-400 font-extrabold text-5xl mr-8">
            N<span className="text-white font-bold text-4xl">ote.</span>
          </div>
        </Link>
        {authStatus ? <SearchBar /> : null}
      </div>

      {!authStatus ? (
        <div className="flex items-center gap-4">
          <CloseSessions />
          <Link to='/login'>
            <button className="px-4 py-2 rounded-md border outline-none font-bold transition-all duration-300 border-green-700 hover:bg-gray-900">
              Log In
            </button>
          </Link>
          <Link to='/signup'>
            <button className="px-4 py-2 rounded-md outline-none font-bold transition-all duration-300 bg-green-700 hover:bg-green-900 hover:text-text-paragraph">
              Sign Up
            </button>
          </Link>
        </div>
      ) : null}

      {authStatus ? (
        <div className="flex items-center gap-8">
          <AddButton />
          <Profile />
        </div>
      ) : null}
    </div>
  );
}

export default Header;
