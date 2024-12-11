import React from 'react';
import styled from 'styled-components';

// Styled Components
const FooterContainer = styled.footer`
  background-color: #442902;
  color: white;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

const FooterLogo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Logo = styled.img`
  width: 50px;
`;


const FooterContact = styled.div`
  flex: 1;
`;

const FooterSocial = styled.div`
  flex: 1;
`;

const SocialLinks = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SocialLink = styled.li`
  margin: 5px 0;
`;

const SocialLinkAnchor = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Logo or brand name */}
        <FooterLogo>
          <Logo src="https://th.bing.com/th?id=OIP.kueay3_Yyo9T9pSw4Y-C6QHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2" alt="Logo" />
          <p>Delicious Bites - Your favorite food destination</p>
        </FooterLogo>

        {/* Contact information */}
        <FooterContact>
          <h3>Contact Us</h3>
          <p>Email: info@deliciousbites.com</p>
          <p>Phone: (123) 456-7890</p>
        </FooterContact>

        {/* Social Media Links */}
        <FooterSocial>
          <h3>Follow Us</h3>
          <SocialLinks>
            <SocialLink>
              <SocialLinkAnchor href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                Facebook
              </SocialLinkAnchor>
            </SocialLink>
            <SocialLink>
              <SocialLinkAnchor href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
              </SocialLinkAnchor>
            </SocialLink>
            <SocialLink>
              <SocialLinkAnchor href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </SocialLinkAnchor>
            </SocialLink>
          </SocialLinks>
        </FooterSocial>
      </FooterContent>

      {/* Copyright Section */}
      <FooterBottom>
        <p>&copy; 2024 Delicious Bites. All Rights Reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
