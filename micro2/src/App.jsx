import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Club from "./pages/Club";
import Profile from "./pages/Profile";
import Navbar from "./Navbar";

function App() {
  return (
    <section className="main">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/miCuenta" element={<Profile />} />
        <Route path="/club/:id" element={<Club />} />
      </Routes>
    </section>
  );
}

export default App;
