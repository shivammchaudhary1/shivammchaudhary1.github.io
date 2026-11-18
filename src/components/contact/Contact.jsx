import { useRef, useState } from "react";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight, FiPhone, FiSend } from "react-icons/fi";
import "./contact.css";

const Contact = () => {
  const pending = useRef(false);
  const [status, setStatus] = useState("idle");

  const sendEmail = async (event) => {
    event.preventDefault();
    if (pending.current) return;
    const form = event.currentTarget;
    // Quietly discard automated submissions that fill the hidden honeypot.
    if (new FormData(form).get("company_website")) {
      form.reset();
      setStatus("success");
      return;
    }
    pending.current = true;
    setStatus("sending");
    try {
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_w8jvef8",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_g73wult",
        form,
        {
          publicKey:
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "zGNRxJPOLx_bscel6",
        },
      );
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      pending.current = false;
    }
  };

  return (
    <section
      className="contact_container"
      id="contact"
      aria-labelledby="contact-title"
    >
      <p className="section-eyebrow">Let's connect</p>
      <h2 id="contact-title">Let's Build Something Together</h2>
      <p className="contact-intro">
        Have a role, project or idea in mind? Reach out using your preferred
        channel, or send a quick message using the form.
      </p>
      <div className="contact_container_devided">
        <div className="contact_email_whatsaap" aria-label="Contact options">
          <div className="contact-method">
            <div className="contact-method-icon"><CgMail aria-hidden="true" size={24}/></div>
            <div className="contact-method-content">
              <h3>Primary email</h3>
              <a id="contact-email" href="mailto:shivamchaudhary75@gmail.com">shivamchaudhary75@gmail.com</a>
              <span>Email me <FiArrowUpRight aria-hidden="true" /></span>
            </div>
          </div>
          <div className="contact-method">
            <div className="contact-method-icon"><CgMail aria-hidden="true" size={24}/></div>
            <div className="contact-method-content">
              <h3>Alternate email</h3>
              <a id="contact-email-secondary" href="mailto:shivamchaudhary15may@gmail.com">shivamchaudhary15may@gmail.com</a>
              <span>Email me <FiArrowUpRight aria-hidden="true" /></span>
            </div>
          </div>
          <div className="contact-method">
            <div className="contact-method-icon"><FaWhatsapp aria-hidden="true" size={24}/></div>
            <div className="contact-method-content">
              <h3>WhatsApp</h3>
              <a id="contact-phone" href="https://wa.me/919169235786" target="_blank" rel="noopener noreferrer">+91 9169235786</a>
              <span>Start a conversation <FiArrowUpRight aria-hidden="true" /></span>
            </div>
          </div>
          <div className="contact-method">
            <div className="contact-method-icon"><FiPhone aria-hidden="true" size={24}/></div>
            <div className="contact-method-content">
              <h3>Alternate number</h3>
              <a id="contact-phone-secondary" href="tel:+917275262500">+91 7275262500</a>
              <span>Call me <FiArrowUpRight aria-hidden="true" /></span>
            </div>
          </div>
        </div>
        <div className="contact_form">
          <div className="contact-form-heading">
            <FiSend aria-hidden="true" />
            <div>
              <h3>Send a message</h3>
              <p>I usually respond as soon as I can.</p>
            </div>
          </div>
          <form
            onSubmit={sendEmail}
            aria-label="Contact Shivam"
            aria-busy={status === "sending"}
          >
            <div className="contact-honeypot" aria-hidden="true">
              <label htmlFor="contact-company-website">Leave this field empty</label>
              <input
                id="contact-company-website"
                name="company_website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <label htmlFor="contact-name">Your Name</label>
            <input
              id="contact-name"
              type="text"
              name="user_name"
              autoComplete="name"
              placeholder="Your Name"
              required
              maxLength={120}
            />
            <label htmlFor="contact-email-input">Your Email</label>
            <input
              id="contact-email-input"
              type="email"
              name="user_email"
              autoComplete="email"
              placeholder="Your Email"
              required
              maxLength={254}
            />
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows="7"
              placeholder="Write a message here"
              required
              maxLength={5000}
            />
            <button
              type="submit"
              className="send_button primary-button-one"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
            <p
              className={`form-status form-status-${status}`}
              role="status"
              aria-live="polite"
            >
              {status === "success" &&
                "Message sent successfully. Thank you for getting in touch!"}
              {status === "error" && (
                <>
                  Your message could not be sent. Please try again or{" "}
                  <a href="mailto:shivamchaudhary75@gmail.com">
                    email me directly
                  </a>
                  .
                </>
              )}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
