import React from 'react';
import './navbar.css';  

function VerticalNavbar() {
  return (
    <nav className="vertical-navbar">
      <ul className="vertical-navbar-list">
        <li className="vertical-navbar-item"><a href="#Dashboard">Dashboard</a></li>
        <li className="vertical-navbar-item"><a href="Daily Usage Limits">Daily Usage Limits</a></li>
        <li className="vertical-navbar-item"><a href="#Limits on the Go">Focus Mode</a></li>
        <li className="vertical-navbar-item"><a href="#Limits on the Go">Limits on the Go</a></li>
        <li className="vertical-navbar-item"><a href="#In-App blocking">In-App blocking</a></li>
        <li className="vertical-navbar-item"><a href="#Settings">Settings</a></li>
        <li className="vertical-navbar-item"><a href="#Get Help">Get Help</a></li>
      </ul>
    </nav>
  );
}

export default VerticalNavbar;