import React from 'react';
import MobileNavBar from '../components/MobileNavBar'; // Adjust path as needed
import '../assets/contactcards.css';

export default function ContactCards() {
  return (
    <>
      <MobileNavBar />
      <section className="contact-cards-section">
        <h2 className="contact-cards-title">We’d love to hear from you</h2>
        <p className="contact-cards-subtitle">
          Whether you’re curious about our packages, a mix, or scheduling – we’re ready to answer any and all questions.
        </p>

        {/* Smaller "Request a Mix" button */}
        <button type="button" className="small turquoise">
          Request a Mix
        </button>

        <div className="contact-cards-container">
          <div className="contact-card sales">
            <div className="contact-card-content">
              <h3>Sales</h3>
              <p>
                Wondering if ASLAN GROUP is the right entertainment for your event? Chat with our team to see if there’s a fit.
              </p>
              <button className="pink">Let's Chat</button>
              <img className="static-img" src="/images/sale.png" alt="Sales Visual" />
            </div>
          </div>

          <div className="contact-card support">
            <div className="contact-card-content">
              <h3>Support</h3>
              <p>
                Need a hand logging in to update your event form? Let’s get you connected with your support team.
              </p>
              <button className="turquoise">Get Support</button>
              <img className="static-img" src="/images/support.png" alt="Support Visual" />
            </div>
          </div>

          <div className="contact-card partnerships">
            <div className="contact-card-content">
              <h3>Partnerships</h3>
              <p>
                We’re into co-marketing with awesome brands. Drop us a note and our Partnerships team will circle back.
              </p>
              <button className="pink">Get In Touch</button>
              <img className="static-img" src="/images/partnership.png" alt="Partnership Visual" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
