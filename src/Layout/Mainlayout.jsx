import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
// import LandingPage from "../Components/Landing";
//import Dashboard from "../Pages/Dashboard";



function MainLayout({ children }) {
  return (
    <>
      <Header />
      
      <main>{children}</main>
      {/* <LandingPage/> */}
      <Footer />
    </>
  );
}

export default MainLayout;