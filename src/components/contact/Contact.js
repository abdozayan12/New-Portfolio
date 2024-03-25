import { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';

const Contact = () => {
  const [state, handleSubmit] = useForm('mjvdlwek');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
  };

  useEffect(() => {
    let timer;
    if (state.succeeded) {
      setSubmitted(true);
      timer = setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 100);
    }

    return () => clearTimeout(timer);
  }, [state.succeeded]);

  return (
    <section className="contact" id="contact">
      <h2>Let&apos;s Connect</h2>
      <p className="forMobile">Got somthing in mind? Let&#39;s talk about it!</p>
      <p>
        I&#39;m currently looking for new opportunities, my inbox is always open.
        <br />
        Whether you have a question or just want to say hi, I&#39;ll try my best to get back to you!
      </p>
      <div className="contact-form-container">
        <div className="contact-form-cont">
          <form onSubmit={onSubmit} className="contact-form">
            <div className="form-element">
              <label htmlFor="name">
                Your Name :
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </label>
            </div>
            <div className="form-element">
              <label htmlFor="email">
                Your Email :
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <ValidationError field="email" prefix="Email" errors={state.errors} />
              </label>
            </div>
            <div className="form-element">
              <label htmlFor="message">
                Message
                <textarea
                  id="message"
                  name="message"
                  placeholder="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </label>
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="submit-button"
            >
              Get in touch
            </button>
            {submitted && (
              <div className="success-message">
                <h2>Thanks for contacting me!</h2>
                <p>I&apos;ll get back to you soon.</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
