import React, { useEffect, useState } from 'react';



// const API_URL = "http://localhost:3000/users";
const Header = () => {


  return (
    <header>
      <h1>Meal Mind </h1>
      {/* Navigation Bar */}
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Food</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Dashboard</a></li>
          <li><a href="Signup">SignUp</a></li>
        </ul>

        <div className="logo">
          <img
            src="https://th.bing.com/th?id=OIP.kueay3_Yyo9T9pSw4Y-C6QHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2"
            alt="Logo"
            className="logo-img"
          />
        </div>

      </nav>    
    </header>
  );
};

export default Header;
