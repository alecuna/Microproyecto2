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

function App() {
  return (
    <section className="main">
      <nav className="fact">
        <ul>
          <li>
            <Link to="/">Pagina Principal</Link>
          </li>
          <li>
            <Link to="/logIn">Log In</Link>
          </li>
          <li>
            <Link to="/signUp">Sign Up</Link>
          </li>
          <li>
            <Link to="/miCuenta">Mi Cuenta</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/miCuenta" element={<Profile />} />
        <Route path="/club" element={<Club />} />
      </Routes>
    </section>
  );
}

export default App;
