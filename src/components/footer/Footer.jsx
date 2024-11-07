import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="/" className="footer__logo">
        <img src="logo.png" alt="logo" />
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/bimal.gyawali07">
          {" "}
          <FaFacebookF />
        </a>
        <a href="https://github.com/BimalGyawali">
          <ImGithub />
        </a>
        <a href="https://www.linkedin.com/in/bimal7/">
          <BsLinkedin />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Bimal Gyawali || All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
