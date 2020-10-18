import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      {user ? (
        <>
          {/*Sidebar*/}
          <Sidebar />
          {/*Chat*/}
          <Chat />
        </>
      ) : (
        <h2>You need to login</h2>
      )}
    </div>
  );
}

export default App;
