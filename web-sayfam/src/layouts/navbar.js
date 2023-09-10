import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navContainer">
      <div className="circlea">A</div>
      <div className="sph flex gap-5">
        <div>Skills</div>
        <div>Projects</div>
        <div className="hireme">Hire me</div>
      </div>
    </nav>
  );
}
