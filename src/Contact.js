// Contact.js
import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';

function Contact() {
  const [showTerms, setShowTerms] = useState(false);
  const [state, handleSubmit] = useForm("mgveaeqv");

  if (state.succeeded) {
    return <p>Thanks for reaching out! I'll get back to you soon.</p>;
  }

  return (
    <div className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out for collaborations or inquiries!</p>

      <div className="contact-me">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" name="name" required />

          <label htmlFor="email">Email:</label>
          <input id="email" type="email" name="email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="phone">Phone Number:</label>
          <input id="phone" type="tel" name="phone" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required />
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button type="submit" disabled={state.submitting}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
