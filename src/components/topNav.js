import React from 'react';
import logo from '../assets/logo.jpg';

const TopNav = () => {
  return (
    <nav className="topnav h-12 flex justify-center">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="h-full" />
      </div>
    </nav>
  );
};

export default TopNav;
