import { useRef, useState } from "react";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  const pending = useRef(false);
  const [status, setStatus] = useState("idle");

  const sendEmail = async (event) => {
    event.preventDefault();
    if (pending.current) return;
    const form = event.currentTarget;
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
      <p className="section-eyebrow">Get in touch</p>
      <h2 id="contact-title">Contact Me</h2>
      <div className="contact_container_devided">
        <div className="contact_email_whatsaap">
          <div className="email_whatsaap">
            <div className="heading">
              <CgMail size={30} aria-hidden="true" />
              <h3>e-mail</h3>
            </div>
            <div className="heading_content">
              <p id="contact-email">shivamchaudhary75@gmail.com</p>
              <a href="mailto:shivamchaudhary75@gmail.com">Send Message</a>
            </div>
          </div>
          <div className="email_whatsaap">
            <div className="heading">
              <FaWhatsapp size={30} aria-hidden="true" />
              <h3>WhatsApp</h3>
            </div>
            <div className="heading_content">
              <p id="contact-phone">+91 9169235786</p>
              <a
                href="https://wa.me/919169235786"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Message
              </a>
            </div>
          </div>
        </div>
        <div className="contact_form">
          <form
            onSubmit={sendEmail}
            aria-label="Contact Shivam"
            aria-busy={status === "sending"}
          >
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
