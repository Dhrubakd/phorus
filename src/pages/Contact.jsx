import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import SEO from '../components/SEO';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact = () => {
  useScrollAnimation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJS configuration
    const serviceId = 'phorusid';  // Your EmailJS service ID
    const templateId = 'template_09n5m37';  // Your template ID from the URL SeVapy7SoYDbdO4f9  template_i7s2dqw
    const publicKey = '07EszC2KJiwxaxP5z';  // Get this from Account > API Keys in EmailJS

    const templateParams = {
      name: formData.name,
      email: formData.email,
      company: formData.company || 'Not provided',
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
      alert('Thank you for contacting us! We will get back to you soon.');
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      alert('Sorry, there was an error sending your message. Please try again or email us directly at dhrubakd53@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <SEO 
      title="Contact Phorus - Get in Touch" 
      description="Contact Phorus Investment & Business Advisory for financial consulting services. Located in Kathmandu, Nepal. Call +977 9861696726 or email info@phorus.com."
      keywords="contact phorus, financial advisor kathmandu, business consulting nepal, phorus contact number, phorus email"
      url="https://phorusadvisory.com/contact"
    />
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p className="contact-subtitle">
            Let's Start a Conversation About Your Financial Advisory Needs
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <p>info@phorusadvisory.com</p>
              <p className="info-detail">We respond within 24 hours</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Phone</h3>
              <p>+977 9861696726</p>
              <p className="info-detail">Mon-Fri, 9:00 AM - 6:00 PM NPT</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Office</h3>
              <p>Kathmandu, Nepal</p>
            </div>

            {/* <div className="info-card social-card">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="#facebook" className="social-link">Facebook</a>
                <a href="#linkedin" className="social-link">LinkedIn</a>
                <a href="#twitter" className="social-link">Twitter</a>
              </div>
            </div> */}
          </div>

          <div className="contact-form-wrapper">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <p className="submit-message success">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="submit-message error">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <h2 className="map-title">Our Location</h2>
          <div className="map-wrapper">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.27776846365!2d85.2911801!3d27.7172453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '20px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Phorus Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Contact;
