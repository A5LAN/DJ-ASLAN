import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './form.css'; // Optional external CSS for styling

export default function BookingForm() {
  const [phone, setPhone] = useState('');

  return (
    <div className="form-wrapper">
      <form
        action="https://formspree.io/f/your-form-id"
        method="POST"
        className="form-card"
      >
        <h1>Book DJ ASLAN</h1>

        <label htmlFor="name">Your Name</label>
        <input type="text" name="name" id="name" required />

        <label htmlFor="email">Your Email</label>
        <input type="email" name="email" id="email" required />

        <label htmlFor="phone">Phone Number</label>
        <PhoneInput
          country={'ca'}
          value={phone}
          onChange={setPhone}
          enableSearch={true}
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
          }}
          buttonStyle={{
            borderTopLeftRadius: '18px',
            borderBottomLeftRadius: '18px',
            left: '10px',
          }}
          dropdownStyle={{ zIndex: 9999 }}
          countryCodeEditable={false}
        />

        <label htmlFor="event-type">Event Type</label>
        <select name="event-type" id="event-type" required>
          <option value="wedding">Wedding</option>
          <option value="birthday">Birthday Party</option>
          <option value="anniversary">Anniversary Party</option>
          <option value="christmas">Christmas Party</option>
          <option value="newyears">New Year's Eve</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="message">Tell me about your event</label>
        <textarea name="message" id="message" required></textarea>

        <button type="submit">Send Request</button>
      </form>
    </div>
  );
}
