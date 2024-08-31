import React from "react";
import { Note } from "./components";

const arr = [
  {
    title: "Note1",
    content: "siud isugfuvk ssdugvudsi ssigv iudsgvu",
    tags: ["hello", "hai"],
  },
];

function App() {
  return (
    <div className="bg-gray-950 flex justify-center items-center h-screen">
      {arr.map((item) => (
        <Note note={item} />
      ))}
    </div>
  );
}

export default App;
