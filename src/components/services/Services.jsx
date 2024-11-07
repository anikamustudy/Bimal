import React from "react";
import "./services.css";
import { BsCheck } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="services">
          <div className="service__head">
            <h3> Electrical Engineering</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Renewable Energy Solutions</p>
              
             {/* <ul>
                <li>Design and implementation of solar-wind hybrid systems.</li>
              <li>On-grid and off-grid solar PV installations.</li>
              <li>Solar water pumping and solar lighting solutions.</li>
              <li>Rural electrification projects using renewable energy.</li>
              </ul> */}
              
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Building Electrification</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Power System Engineering</p>
              <br/>
              {/* <p>  Single line diagram creation and analysis.
                Power systems audits and assessments.Energy efficiency improvements for existing power systems.        
              </p> */}

            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Energy Project Financing Consultation</p>
              {/* <p>Guidance on financing opportunities for clean energy projects.
              Support in preparing documentation and proposals for energy efficiency funding.</p> */}
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Energy Audits</p>
              {/* <p>Comprehensive analysis of energy consumption and optimization strategies for energy efficiency.
Identification of cost-saving opportunities through energy conservation.</p> */}
            </li>

            <li>
              <BsCheck className="service__list-icon" />
              <p>Electrical Design Engineering:</p>
              {/* <p>CDetailed electrical design for infrastructure projects.
Consulting for hydropower stations and other high-power installations.</p> */}
            </li>
          </ul>
        </article>
        {/* END OF Web Development  */}
      </div>
    </section>
  );
};

export default Services;
