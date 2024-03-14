import React from 'react';
import '../styles/Contact.css';

const Contact = () => (
  <div className="contact-container">
    <div id="Contact">
      <h1>Contact</h1>
      <p>Send us a message!</p>
    </div>
    <div>
      <form action="https://formspree.io/f/mjvdlwek" method="post" className="form">
        <div className="form-group">
          <label htmlFor="name">
            Name
            <input type="text" name="name" placeholder="Enter your name" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="Email">
            Email
            <input type="email" name="email" id="email" placeholder="abd@mail.com" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="Message">
            Message
            <textarea name="message" placeholder="Write your message" />
          </label>
        </div>
        <button type="submit">Get in touch</button>
      </form>
    </div>
  </div>
);

// validate Email //

const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const emailel = document.getElementById('email').value;
  const valid = document.querySelector('.invalid');
  if (emailel !== emailel.toLowerCase()) {
    valid.innerText = 'please enter a correct email address format';
  } else {
    form.submit();
  }
});

export default Contact;
