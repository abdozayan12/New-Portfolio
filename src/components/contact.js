import React from 'react';

const Contact = () => (
  <div>
    <div>
      <h1>Contact</h1>
      <p>Send us a message!</p>
    </div>
    <div>
      <form>
        <label htmlFor="name">
          Name:
          <input type="text" name="name" />
        </label>
        <label htmlFor="Email">
          Email:
          <input type="text" name="email" />
        </label>
        <label htmlFor="Message">
          Message:
          <textarea name="message" />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
);

export default Contact;
