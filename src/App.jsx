import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from "./assets/Components/Layout/header"
import  Main from "./assets/Components/Layout/mainbody"
import Footer from "./assets/Components/Layout/footer"

function Canteen() {
  return (
        <div className="canteen-container">
          <Header />
          <Main />
          <Footer />
        </div>
      );
    }
  
    
    export default Canteen;
   
  



