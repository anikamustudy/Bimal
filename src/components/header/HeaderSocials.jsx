import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/bimal7/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a href="https://github.com/bimalgyawali" target="_blank" rel="noreferrer">
        <FaGithubSquare />
      </a>
      <a
        href="https://www.facebook.com/bimal.gyawali07"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookSquare />
      </a>
    </div>
  );
};

export default HeaderSocials;
