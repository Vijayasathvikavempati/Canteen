import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const FooterText = styled.div`
  font-weight: bold;
`;

const FooterLinks = styled.div`
  a {
    color: #fff;
    margin: 0 5px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const FooterSocial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    margin-bottom: 5px;
  }
  a {
    color: #fff;
    margin: 0 5px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>
          <strong>Canteen Management System</strong> &copy; 2024 | All Rights Reserved
        </FooterText>
        <FooterLinks>
          <a href="/privacy-policy">Privacy Policy</a>
          |
          <a href="/terms-of-service">Terms of Service</a>
          |
          <a href="/contact-us">Contact Us</a>
        </FooterLinks>
        <FooterSocial>
          <span>Follow us:</span>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          |
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          |
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </FooterSocial>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;