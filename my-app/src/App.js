import "./App.css";
//import React, { useState } from "react";
import { Navbarr, Footer } from "./Components/Navbarr";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import CourseRegistration from "./Components/CourseRegistration";
import Result from "./Components/Result";
import Profile from "./Components/Profile";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <div>
      <Navbarr/>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="profile" Component={Profile}></Route>
        <Route path="result" Component={Result}></Route>
        <Route path="coursereg" Component={CourseRegistration}></Route>
        <Route path="login" Component={Login}></Route>
        <Route path="signup" Component={SignUp}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
