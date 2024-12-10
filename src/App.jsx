import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import React from 'react';

import Header from "./assets/Components/Layout/Header"
// import  Main from "./assets/Components/Layout/Mainbody"
// import Footer from "./assets/Components/Layout/Footer"
import MainBody from "./assets/Components/Layout/mainbody"

function Canteen() {
  return (
        <div className="canteen-container">
          <Header />
          <MainBody/>
          
        </div>
      );
    }

    

  
export default Canteen;










  



