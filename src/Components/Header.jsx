import { Link, NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Header = () => {
  return (
    <header>
      <h1>Meal Mind</h1>
      <div className="logo">
        <img
          src="https://th.bing.com/th?id=OIP.kueay3_Yyo9T9pSw4Y-C6QHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2"
          alt="Logo"
          className="logo-img"
        />
      </div>

      <nav className="nav">
      <h1>Fuel your body, feed your mind</h1>
        <ul className="nav-links">
          {/* Use <Link> for navigation */}
          <li><Link to="/">Home</Link></li>

          {/* <li><Link to="/food">Food</Link></li> */}

          {/* <li><Link to="/contact">Contact</Link></li> */}

          <li><Link to="/signup">SignUp</Link></li>

          <li><Link to="/login">login</Link></li>
        </ul>
      </nav>
      
    </header>
  );
};

export default Header;






// import { Link, NavLink } from 'react-router-dom';
// import React, { useEffect, useState } from 'react';

// const Header = () => {


//   return (
//     <header>
//       <h1> Meal Mind </h1>
//       <div className="logo">
//           <img
//             src="https://th.bing.com/th?id=OIP.kueay3_Yyo9T9pSw4Y-C6QHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2"
//             alt="Logo"
//             className="logo-img"
//           />
//         </div>

//       <nav className="nav">

//         <ul className="nav-links">
//           <li><a href="#">Home</a></li>

//           <li><a href="#">Food</a></li>

//           <li><a href="#">Contact</a></li>

//           <li><a href="#">SignUp</a></li>
//         </ul>
//       </nav>    
//     </header>
//   );
// };

// export default Header; 