import React from "react";
import "./experience.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3> Design Engineer

</h3>
          <div className="experience__content">
            <article className="experience__details">
              {/* <AiFillHtml5 className="experience__details-icon" /> */}
              <div>
                <h4>Addon Engineering Solution</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            {/* <article className="experience__details">
              <DiCss3 className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <IoLogoJavascript className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Moderate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiTypescript className="experience__details-icon" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Moderate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiTailwindcss className="experience__details-icon" />
              <div>
                <h4>TailWind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <div>
                <h4>React JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiNextdotjs className="experience__details-icon" />
              <div>
                <h4>Next JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article> */}
          </div>
        </div>

        {/* End of frontend */}
        <div className="experience__frontend">
          <h3>Electrical Engineer

</h3>
          <div className="experience__content">
            <article className="experience__details">
              {/* <FaNodeJs className="experience__details-icon" /> */}
              <div>
                <h4>Nepal Electricity Authority</h4>
                <small className="text-light">EXperienced</small>
              </div>
            </article>
            {/* <article className="experience__details">
              <SiMongodb className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <GrMysql className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Moderate</small>
              </div>
            </article> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
