import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-text">
                    <strong>Canteen Management System</strong> &copy; 2024 | All Rights Reserved
                </div>
                <div className="footer-links">
                    <a href="/privacy-policy">Privacy Policy</a>
                    |
                    <a href="/terms-of-service">Terms of Service</a>
                    |
                    <a href="/contact-us">Contact Us</a>
                </div>
                <div className="footer-social">
                    <span>Follow us:</span>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    |
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    |
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;