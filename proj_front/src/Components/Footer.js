import React from 'react';
import logo from "../assets/img/infoccase3D.jpg";
import "./footer.css";


const Footer = () => {
    return (
         <footer>
      <div className="footer-content"></div>
      <div className="footer-div">
        <img className="logoFooter" src={logo} alt="logo" />
        <div className="footer-text"> ©Infoccase 3D 2024</div>
      </div>
    </footer>
  );
};

export default Footer; 