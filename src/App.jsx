import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from "./assets/Components/Layout/Header"
// import MainBody from './assets/Components/Layout/mainbody'
// import  Main from "./assets/Components/Layout/Mainbody"
// import Footer from "./assets/Components/Layout/Footer"
import Signup from "./assets/Components/Layout/Signup"

function Canteen() {
  return (
        <div className="canteen-container">
          <Header />
          {/* <MainBody /> */}
          <Signup />

        </div>
      );
    }
  
export default Canteen;
   
  



