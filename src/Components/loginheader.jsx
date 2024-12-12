import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled components for logged-in header
const LoginHeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color:#e3c7a2;
  color: #442902;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const NavTitle = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 500;
  width: 100%;
`;

const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 15px;
`;

const NavLinkStyled = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 1.1rem;
  padding: 10px 20px;
  border: 2px solid transparent;
  border-radius: 5px;
  transition: all 0.3s ease;
  display: inline-block;

  &:hover {
    background-color: #442902;
    color: #fff;
    border-color: #442902;
    transform: scale(1.05);
  }
`;

const loginheader = () => {
  return (
    <LoginHeaderWrapper>
      <Logo>
        <LogoImage
          src="https://th.bing.com/th?id=OIP.kueay3_Yyo9T9pSw4Y-C6QHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2"
          alt="Logo"
        />
        <h1>Meal Mind</h1>
      </Logo>
      <NavTitle>Fuel your body, feed your mind</NavTitle>
      <Nav>
        <NavLinks>
          <li>
            <NavLinkStyled to="/">Home</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/Dashboard">Dashboard</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/AboutUs">About Us</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/login">Log Out</NavLinkStyled> {/* This will log the user out */}
          </li>
        </NavLinks>
      </Nav>
    </LoginHeaderWrapper>
  );
};

export default loginheader;
