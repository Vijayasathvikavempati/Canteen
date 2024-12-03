import React from 'react';

const Header = () => {
  return (
    <header>
      {/* Navigation Bar */}
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Food</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Sign In</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

