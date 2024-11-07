import React from "react";
import "./about.css";
import ME from "../../assets/me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
// import Typical from "react-typical";
import CTA from "../header/CTA";

const about = () => {
  return (
    <div>
      {/* <div className="logoHeader">
        <img src="logo.png" alt="" />
      </div> */}
      <section id="about">
        <h5>Hello I'm</h5>
        <p className="helloI">Bimal Gyawali</p>
        <CTA />
        <h2 className="typ">
          {/* <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              "Frontend Web Developer 💻",
              1500,
              "Full Stack Developer 👑",
              1500,
              "Back End Developer 👓 ",
              1500,
            ]}
          /> */}
        </h2>

        <div className="container about__container">
          <div className="about__me">
            <img src={ME} className="about__me" alt="me"></img>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about_icon" />
                <h5>Experience</h5>
                <small>
                  {" "}
                  Experiend
                  <br /> Electrical Engineer
                </small>
              </article>
              <article className="about__card">
                <FiUsers className="about_icon" />
                <h5>Clients</h5>
                <small>20+</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about_icon" />
                <h5>Projects</h5>
                <small>10+</small>
              </article>
            </div>
            <p>
              Welcome to the professional portfolio of Bimal Gyawali, an
              accomplished Electrical Engineer with extensive experience in
              renewable energy and power systems.
            </p>
            <p>
              Currently serving at the Kaligandaki A Hydropower Station under
              the Nepal Electricity Authority, Bimal specializes in customized
              energy solutions, including solar-wind hybrid systems, building
              electrification, and both on-grid and off-grid solar PV systems.
              With a Master’s degree in Power System Engineering from Tribhuvan
              University, he brings expertise in designing efficient,
              sustainable energy projects tailored to meet specific needs. Bimal
              is dedicated to advancing clean energy solutions and contributing
              to Nepal’s energy sector through innovative, reliable, and
              eco-friendly approaches. Explore his work and insights into the
              future of energy.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default about;
