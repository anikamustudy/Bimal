import React, { useRef, useState } from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineLinkedin } from "react-icons/ai";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(""); // For form submission status

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b2pok8n",
        "template_gt7hjlb",
        form.current,
        "e89UbzuJsfpdazIqm"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Form submitted successfully! I will get back to you as soon as possible.");
        },
        (error) => {
          console.log(error.text);
          setStatus("Something went wrong. Please try again.");
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>bimalgyawali7@gmail.com</h5>
            <a
              href="mailto:bimalgyawali7@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Mail
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Bimal Gyawali</h5>
            <a
              href="https://m.me/100007806556557"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article className="contact_option">
            <AiOutlineLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Bimal Gyawali</h5>
            <a
              href="https://www.linkedin.com/in/bimal7/"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>

        {/* End Of Contact Options */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="8"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>

        {/* Display status message after form submission */}
        {status && <p className="status-message">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;
