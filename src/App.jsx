// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import Header from "./Components/Header"
// import Signup from "./Pages/Signup"

// function Canteen() {
//   return (
//     <>
//           <Header />
//           <Signup />

//           </> 
//       );
//     }
  
// export default Canteen;
   
  
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from "./Components/Footer";
import Home from './Pages/Home';
import Food from './Pages/Food';
import Contact from './Pages/Contact';
import SignUp from './Pages/Signup';
import Login from './Pages/login';
import UserHome from './Pages/user-homepage';
import Dashboard from './Pages/Dashboard';


function App() {
  return (
    <Router>
      <Header /> {/* The Header component */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<Home />} />
        <Route path="/contact" element={<Home />} />
         
        <Route path="/user-home" element={<UserHome />} />   
      </Routes>
      <Routes>
      <Route path="/signup" element={<SignUp />} />
        <Route path='/login' element={<Login/>} /> 
        </Routes>
        <Routes>
        <Route path="/Food" element={<Food />} />
        <Route path='/Contact' element={<Contact />} /> 
        <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
          
        <Footer />
    </Router>
  
  );
}

export default App;


