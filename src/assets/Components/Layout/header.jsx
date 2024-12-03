// import React , { useState } from 'react';

// const HeaderWithMenu = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
  
//     const toggleMenu = () => {
//       setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
//     };
// const Header = () => {
//   return (
//     <header>


      

//       {/* Navigation Bar */}
//       <nav className="nav">
//         <ul className="nav-links">
//           <li><a href="#">Home</a></li>
//           <li><a href="#">Food</a></li>
//           <li><a href="#">Contact</a></li>
//           <li><a href="#">Sign In</a></li>
//           <li><a href="#">Login</a></li>
//         </ul>

//         {/* 3 Dots Icon Section */}
//       <div className="menu-icon" onClick={toggleMenu}>
//         <span className="dot"></span>
//         <span className="dot"></span>
//         <span className="dot"></span>
//       </div>
      
//       {isMenuOpen && (
//         <div className="menu-dropdown">
//           <ul>
//             <li><a href="#">Login</a></li>
//             <li><a href="#">Sign In</a></li>
//           </ul>
//         </div>

//       </nav>
//     </header>
//   );
// }

// export default Header;



import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
  };

  return (
    <header>
      {/* Navigation Bar */}
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Food</a></li>
          <li><a href="#">Contact</a></li>
          {/* <li><a href="#">Sign In</a></li>
          <li><a href="#">Login</a></li> */}
        </ul>

        {/* 3 Dots Icon Section */}
        <div className="menu-icon" onClick={toggleMenu}>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </nav>

      {/* Dropdown Menu for Login/Sign In */}
      {isMenuOpen && (
        <div className="menu-dropdown">
          <ul>
            <li><a href="#">Login</a></li>
            <li><a href="#">Sign In</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
