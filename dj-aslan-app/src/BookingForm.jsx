import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './form.css';

export default function BookingForm() {
  const [phone, setPhone] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.target);

    if (!email.includes('@')) {
      alert('Please enter a valid email.');
      setIsSubmitting(false);
      return;
    }

    if (phone.length < 10) {
      alert('Please enter a valid phone number.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/xpwdzgbb', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData,
      });

      if (response.ok) {
        setFormSubmitted(true);
      } else {
        const result = await response.json();
        console.error('Formspree error:', result);
        alert('Oops! Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error, please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-wrapper">
      {!formSubmitted ? (
        <form onSubmit={handleSubmit} method="POST" className="form-card">
          <h1>Book the ASLAN Group</h1>

          <label htmlFor="name">Your Name</label>
          <input type="text" name="name" id="name" required disabled={isSubmitting} />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
          />

          <label htmlFor="phone">Phone Number</label>
          <PhoneInput
            country={'ca'}
            value={phone}
            onChange={setPhone}
            enableSearch={false}
            onlyCountries={['ca', 'mx', 'us', 'gb', 'ae', 'ar', 'at', 'au', 'bd', 'be', 'br', 'cn', 'fr', 'de', 'in', 'jp', 'tr']}
            preferredCountries={['ca', 'mx', 'us', 'gb']}
            inputProps={{
              name: 'phone',
              required: true,
            }}
            inputStyle={{
              width: '100%',
              borderRadius: '18px',
              paddingLeft: '48px',
              height: '44px',
              fontSize: '16px',
              paddingRight: '10px',
            }}
            buttonStyle={{
              borderTopLeftRadius: '18px',
              borderBottomLeftRadius: '18px',
              left: '0',
            }}
            dropdownStyle={{
              zIndex: 9999,
              marginLeft: '-10px',
            }}
            countryCodeEditable={false}
            disabled={isSubmitting}
          />

          <label htmlFor="event-type">Event Type</label>
          <select name="event-type" id="event-type" required disabled={isSubmitting}>
            <option value="wedding">Wedding</option>
            <option value="birthday">Birthday Party</option>
            <option value="anniversary">Anniversary Party</option>
            <option value="christmas">Christmas Party</option>
            <option value="newyears">New Year's Eve</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="message">Tell me about your event</label>
          <textarea name="message" id="message" required disabled={isSubmitting}></textarea>

          <button type="submit" disabled={isSubmitting} className={isSubmitting ? 'btn-disabled' : 'btn-submit'}>
            {isSubmitting ? 'Sending...' : 'Send Request'}
          </button>
        </form>
      ) : (
        <div className="confirmation-message">
          <h2>Thank you for booking with the ASLAN Group!</h2>
          <p>Your booking request has been successfully submitted. We'll get back to you soon!</p>

          <button className="btn-home" onClick={() => navigate('/')}>
            <img
              src="/images/Aslan-Logo-blur-black.png"
              alt="Return to Home"
              className="btn-home-logo"
            />
            <span>Return to Home</span>
          </button>
        </div>
      )}
    </div>
  );
}
