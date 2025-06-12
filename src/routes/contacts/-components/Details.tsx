import React from 'react';
import './contacts.css';

const Details: React.FC = () => (
  <>
    <div className='contact-container'>
      <div className='contact-header'>
        <h1>Contact Us</h1>
        <p>
          We are here to help you with your IT needs. Reach out to us for
          project inquiries, support, or partnership opportunities.
        </p>
      </div>
      <div className='contact-info'>
        <div className='contact-info-section'>
          <h3>Head Office</h3>
          <p>IT Solutions Pvt. Ltd.</p>
          <p>1234 Innovation Drive</p>
          <p>Bangalore, KA 560001, India</p>
          <p>
            Phone: <a href='tel:+918000112233'>+91 8000 112233</a>
          </p>
          <p>
            Email:{' '}
            <a href='mailto:info@itsolutions.com'>info@itsolutions.com</a>
          </p>
        </div>
        <div className='contact-info-section'>
          <h3>Business Hours</h3>
          <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
          <p>Saturday: 10:00 AM - 3:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
        <div className='contact-info-section'>
          <h3>Quick Links</h3>
          <p>
            <a href='/about'>About Us</a>
          </p>
          <p>
            <a href='/services'>Our Services</a>
          </p>
          <p>
            <a href='/careers'>Careers</a>
          </p>
          <p>
            <a href='/support'>Support</a>
          </p>
        </div>
      </div>
      <div className='contact-form-section'>
        <h2>Send Us a Message</h2>
        <form className='contact-form' onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor='name'>Full Name</label>
            <input
              id='name'
              name='name'
              type='text'
              placeholder='Your Name'
              required
            />
          </div>
          <div>
            <label htmlFor='email'>Email Address</label>
            <input
              id='email'
              name='email'
              type='email'
              placeholder='you@example.com'
              required
            />
          </div>
          <div>
            <label htmlFor='subject'>Subject</label>
            <input
              id='subject'
              name='subject'
              type='text'
              placeholder='Subject'
              required
            />
          </div>
          <div>
            <label htmlFor='message'>Message</label>
            <textarea
              id='message'
              name='message'
              placeholder='How can we help you?'
              required
            />
          </div>
          <button type='submit'>Send Message</button>
        </form>
      </div>
      <div
        style={{
          marginTop: 40,
          color: '#888',
          fontSize: '0.95rem',
          textAlign: 'center',
        }}
      >
        <p>
          <strong>IT Solutions Pvt. Ltd.</strong> &copy;{' '}
          {new Date().getFullYear()} | Empowering your business with technology.
        </p>
      </div>
    </div>
  </>
);

export default Details;
