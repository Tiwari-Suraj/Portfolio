import React, { useRef } from "react";
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import { motion } from "framer-motion"; // Make sure you're importing from framer-motion

const Contact = () => {
  const formRef = useRef(); // 👈 useRef to reference the form

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = formRef.current;
    const formData = new FormData(form);

    formData.append("access_key", "07d2a1c8-ec55-4b4b-9cb6-389953c12808");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      form.reset(); // 👈 This will now work since we're directly referencing the form
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Get in touch
        </motion.h1>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="contact-section"
      >
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail" />
              <p>tiwarisuraj76090@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call" />
              <p>+91 8887299937</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location" />
              <p>Uttam Nagar(West Delhi)</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right" ref={formRef}>
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            required
          />
          <label>Your Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            required
          />
          <label>Write your message</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
