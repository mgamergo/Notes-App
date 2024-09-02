import React from "react";
import { Sidebar, DisplayNotes } from "../components";

function Homepage() {
  return (
    <div className="flex mt-5 h-screen">
      <Sidebar />
      <DisplayNotes />
    </div>
  );
}

export default Homepage;
