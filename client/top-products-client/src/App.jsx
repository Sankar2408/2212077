import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Shortener from "./pages/Shortener";
import Stats from "./pages/Stats";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="nav">
          <NavLink to="/" end className={({isActive}) => isActive ? "active" : ""}>Shortener</NavLink>
          <NavLink to="/stats" className={({isActive}) => isActive ? "active" : ""}>Statistics</NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Shortener />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
