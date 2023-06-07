import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w8jvef8",
        "template_g73wult",
        form.current,
        "zGNRxJPOLx_bscel6"
      )
      .then(
        (result) => {
          console.log(result.text);
          // clear the previous value
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("Message Sent Successfully");
  };
  return (
    <div className="contact_container">
      <h4>Get in touch</h4>
      <h1>Contact Me</h1>
      <div className="contact_container_devided">
        <div className="contact_email_whatsaap">
          {/* email  */}
          <div className="email_whatsaap">
            {/* heading  */}
            <div className="heading">
              <CgMail size={30} />
              <h4>e-mail</h4>
            </div>

            <div className="heading_content">
              <h3>shivamchaudhary75@gmail.com</h3>
              <a href="mailto:shivamchaudhary75@gmail.com" target="_blank">
                Send Message
              </a>
            </div>
          </div>

          {/* whatsaap  */}
          <div className="email_whatsaap">
            <div className="heading">
              <FaWhatsapp size={30} className="icons" />
              <h4>WhatsApp</h4>
            </div>
            <div className="heading_content">
              <h3 id="contact-phone">+91 9169235786</h3>
              <a
                href="https://api.whatsapp.com/send?phone=9169235786"
                target="_blank"
              >
                Send Message
              </a>
            </div>
          </div>
        </div>
        <div className="contact_form">
          <form ref={form} onSubmit={sendEmail}>
            {/* <label>Name</label> */}
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            {/* <label>Email</label> */}
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
            {/* <label>Message</label> */}
            <textarea
              name="message"
              rows="7"
              placeholder="Write a message here"
              required
            />
            {/* <input type="submit" value="Send" /> */}
            <button
              type="submit"
              name="message"
              value="send"
              className="send_button"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
