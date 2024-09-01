import React, { useEffect, useRef } from "react";
import { DisplayNotes, Header } from "./components";
import dataService from "./appwrite/config";
import { useDispatch } from "react-redux";
import { setFullData, setRenderData } from "./store/noteSlice";
import { setReference } from "./store/referenceSlice";

const data = {
  Title: "Hello",
  Content: "df iu iu yvuj hvtv uyiug hj gv yuv hjjkv kyvhmn jkb hk byu vjk",
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchNotes = async () => {
      const notes = await dataService.getAllNotes();
      dispatch(setFullData({ noteData: notes }))
      dispatch(setRenderData({ noteData: notes }))
    };

    fetchNotes();
    
  }, [dispatch]);

  return (
    <div className="text-text-paragraph bg-gray-950 flex-col justify-center items-center h-screen w-screen">
      <Header />
      <DisplayNotes />
    </div>
  );
}

export default App;
