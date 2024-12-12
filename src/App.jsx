import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from "./Components/Footer";
import Home from './Pages/Home';
import SignUp from './Pages/Signup';
import Login from './Pages/login';
// import Dashboard from "./Pages/Dashboard";
import AboutUs from "./Pages/AboutUs";


function App() {
  return (
    <Router>
      <Header /> {/* The Header component */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login/>} /> 
        <Route path="/AboutUs" element={<AboutUs/>} />
        {/* <Route path="/Dashboard" element={<Dashboard/>} /> */}
      </Routes>
          
          
        <Footer />
    </Router>
  
  );
}

export default App;


