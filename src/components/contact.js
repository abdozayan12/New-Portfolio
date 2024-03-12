import React from 'react';
import '../styles/Contact.css';

const Contact = () => (
  <div className="contact-container">
    <div>
      <h1>Contact</h1>
      <p>Send us a message!</p>
    </div>
    <div>
      <form>
        <label htmlFor="name">
          Name
          <input type="text" name="name" placeholder="Enter your name" />
        </label>
        <label htmlFor="Email">
          Email
          <input type="email" name="email" placeholder="abd@mail.com" />
        </label>
        <label htmlFor="Message">
          Message
          <textarea name="message" placeholder="Write your message" />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
);

export default Contact;
