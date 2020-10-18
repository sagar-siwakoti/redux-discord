import React, {useEffect} from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import {useDispatch, useSelector} from "react-redux";
import {login, logout, selectUser} from "./features/userSlice";
import Login from "./components/Login/Login";
import {auth} from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch=useDispatch(selectUser);
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      console.log("user is ", authUser)
      if (authUser){
        //user is logged in
        dispatch(login({
          uid:authUser.uid,
          photo:authUser.photoURL,
          email:authUser.email,
          displayName:authUser.displayName
        }))
      }else {
        //user is not logged in
        dispatch(logout());
      }
    })
  },[dispatch])
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
        <Login />
      )}
    </div>
  );
}

export default App;
