import React, { useEffect } from "react";
import { Header } from "./components";
import dataService from "./appwrite/config";
import { useDispatch, useSelector } from "react-redux";
import { setFullData, setRenderData } from "./store/noteSlice";
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth.status);
  const userId = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotes = async () => {
      if (authStatus) {
        const notes = await dataService.getAllNotes(userId);
        const myNotes = notes.filter(
          (item) => !item.isArchived && !item.isTrashed
        );
        dispatch(setFullData({ noteData: notes }));
        dispatch(setRenderData({ noteData: myNotes }));
      } else {
        navigate("/login");
      }
    };

    fetchNotes();
  }, [dispatch, authStatus, navigate]);

  return (
    <div className="text-text-paragraph bg-gray-950 min-h-screen w-screen overflow-y-auto flex flex-col">
      <Header />
      <main className="flex-1 p-4 md:p-8 lg:p-12">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
