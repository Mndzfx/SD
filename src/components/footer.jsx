import React from 'react';
import styled from 'styled-components';

// Define CSS Variables using Styled Components' theming or directly as constants
// For simplicity, we'll define them directly within the styled components here.
// In a larger app, you'd typically use a ThemeProvider for global variables.

const FooterContainer = styled.footer`
    background-color: #222; /* --dark-gray */
    color: #fff; /* --white */
    padding: 40px 0 25px;
    margin-top: 40px;
    margin-bottom: -100px;
    border-radius: 15px;
    box-shadow: 0 -6px 15px rgba(0,0,0,0.15);
    font-family: 'Arial', sans-serif;
`;

const FooterGrid = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap; /* Allows items to wrap to the next line if needed */
    gap: 20px; /* Reduced gap for smaller screens */
    max-width: 1200px; /* --content-max-width */
    margin: 0 auto;
    padding: 0 20px; /* --content-padding-x */

    @media (max-width: 768px) {
        /* On smaller screens, allow wrapping but maintain horizontal flow */
        justify-content: center; /* Center items if they wrap */
        gap: 15px; /* Further reduce gap on very small screens */
    }
`;

const FooterColumn = styled.div`
    flex: 1 1 22%; /* Adjusted flex-basis to allow for more columns in a row and better shrinking */
    min-width: 150px; /* Smaller minimum width to prevent excessive overflow */
    padding: 0 5px; /* Reduced padding for smaller screens */
    box-sizing: border-box; /* Include padding and border in the element's total width */

    &:last-child {
        margin-bottom: 0;
    }

    @media (max-width: 768px) {
        flex: 1 1 90%; /* On smaller screens, make columns take up almost full width, stacking them */
        min-width: unset; /* Remove min-width to allow maximum shrinking */
        margin-bottom: 20px; /* Add some space between rows if items wrap */
        padding: 0 8px;
        text-align: center; /* Center text within columns on mobile */
    }

    @media (max-width: 480px) {
        flex: 1 1 90%; /* Ensure it's still stacking on very small screens */
        min-width: unset;
        margin-bottom: 15px;
    }
`;

const Logo = styled.div`
    img {
        height: 38px;
        margin-bottom: 20px;
        vertical-align: middle;

        @media (max-width: 768px) {
            height: 32px; /* Slightly smaller logo on mobile */
            margin-bottom: 15px;
        }
    }
`;

const FooterText = styled.p`
    font-size: 0.95em;
    line-height: 1.7;
    color: #bbb;
    margin-bottom: 18px;

    @media (max-width: 768px) {
        font-size: 0.85em; /* Smaller font size on mobile */
        margin-bottom: 12px;
    }
`;

const ColumnTitle = styled.h4`
    font-size: 1.25em;
    margin-bottom: 20px;
    color: #fff;
    position: relative;
    font-weight: 700;

    &::after {
        content: '';
        display: block;
        width: 45px;
        height: 3px;
        background-color: #8a2be2; /* --primary-purple */
        margin-top: 8px;

        @media (max-width: 768px) {
            margin: 8px auto 0; /* Keep centered on mobile */
        }
    }

    @media (max-width: 768px) {
        font-size: 1.1em; /* Smaller title on mobile */
        margin-bottom: 15px;
    }
`;

const FooterList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;

    li {
        margin-bottom: 10px;
    }

    a {
        color: #bbb;
        text-decoration: none;
        transition: color 0.3s ease, transform 0.2s ease;
        font-size: 0.95em;
        display: inline-block;

        &:hover {
            color: #8a2be2; /* --primary-purple */
            transform: translateX(5px);
        }

        @media (max-width: 768px) {
            font-size: 0.85em; /* Smaller link font on mobile */
        }
    }
`;

const SocialIconsContainer = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 25px;

    @media (max-width: 768px) {
        justify-content: center; /* Ensure social icons are centered on mobile */
        margin-top: 15px;
    }

    a {
        display: inline-block;
        line-height: 0;
    }

    img {
        height: 26px;
        filter: brightness(0) invert(1);
        transition: filter 0.3s ease, transform 0.2s ease;

        &:hover {
            filter: invert(39%) sepia(85%) saturate(2250%) hue-rotate(240deg) brightness(85%) contrast(100%);
            transform: translateY(-3px);
        }

        @media (max-width: 768px) {
            height: 22px; /* Smaller social icons on mobile */
        }
    }
`;

const FooterBottom = styled.div`
    text-align: center;
    margin-top: 50px;
    padding-top: 25px;
    border-top: 1px solid rgba(255,255,255,0.08);
    font-size: 0.8em;
    color: #999;

    @media (max-width: 768px) {
        margin-top: 30px;
        padding-top: 15px;
        font-size: 0.7em; /* Smaller copyright text */
    }
`;

const ContactLink = styled.a`
    color: #bbb;
    text-decoration: none;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterGrid>
                <FooterColumn>
                    <Logo>
                        <img src="https://via.placeholder.com/120x40/ffffff/333333?text=PAYZE" alt="Payze Logo" />
                    </Logo>
                    <FooterText>Payze is your trusted partner for seamless and secure payment solutions. We simplify transactions, empowering businesses and individuals alike.</FooterText>
                    <SocialIconsContainer>
                        <a href="#" aria-label="Facebook"><img src="https://via.placeholder.com/28x28/ffffff/ffffff?text=f" alt="Facebook icon" /></a>
                        <a href="#" aria-label="Twitter"><img src="https://via.placeholder.com/28x28/ffffff/ffffff?text=t" alt="Twitter icon" /></a>
                        <a href="#" aria-label="Instagram"><img src="https://via.placeholder.com/28x28/ffffff/ffffff?text=i" alt="Instagram icon" /></a>
                    </SocialIconsContainer>
                </FooterColumn>
                <FooterColumn>
                    <ColumnTitle>Company</ColumnTitle>
                    <FooterList>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </FooterList>
                </FooterColumn>
                <FooterColumn>
                    <ColumnTitle>Support</ColumnTitle>
                    <FooterList>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </FooterList>
                </FooterColumn>
                <FooterColumn>
                    <ColumnTitle>Contact Info</ColumnTitle>
                    <FooterText>123 Business Lane, Suite 400<br />Metropolis, CA 90210, USA</FooterText>
                    <FooterText><ContactLink href="mailto:info@payze.com">info@payze.com</ContactLink></FooterText>
                    <FooterText><ContactLink href="tel:+1234567890">+1 (234) 567-890</ContactLink></FooterText>
                </FooterColumn>
            </FooterGrid>
            <FooterBottom>
                &copy; 2025 Payze. All rights reserved.
            </FooterBottom>
        </FooterContainer>
    );
};

export default Footer;