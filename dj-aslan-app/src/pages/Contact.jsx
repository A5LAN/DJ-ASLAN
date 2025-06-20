import React from 'react';
import DesktopNavbar from '../components/DesktopNavbar';   // Import DesktopNavbar
import MobileNavBar from '../components/MobileNavBar';
import Footer from '../components/Footer';
import '../assets/contactcards.css';
import '../assets/DesktopNavbar.css';  // Import desktop navbar CSS

export default function ContactCards() {
  return (
    <>
      <DesktopNavbar />     {/* Desktop nav, visible md+ */}
      <MobileNavBar />      {/* Mobile nav, visible below md */}

      {/* Contact section only contains contact content now */}
      <section className="contact-cards-section">
        <h2 className="contact-cards-title">We’d love to hear from you</h2>
        <p className="contact-cards-subtitle">
          Whether you’re curious about our packages, a mix, or scheduling – we’re ready to answer any and all questions.
        </p>

        {/* "Request a Mix" button */}
        <a href="mailto:mixes@aslangroup.ca">
          <button type="button" className="small turquoise">Request a Mix</button>
        </a>

        <div className="contact-cards-container">
          <div className="contact-card sales">
            <div className="contact-card-content">
              <h3>Sales</h3>
              <p>
                Wondering if ASLAN GROUP is the right entertainment for your event? Chat with our team to see if there’s a fit.
              </p>
              <a href="mailto:sales@aslangroup.ca">
                <button type="button" className="pink">Let's Chat</button>
              </a>
              <img className="static-img" src="/images/sale.png" alt="Sales Visual" />
            </div>
          </div>

          <div className="contact-card support">
            <div className="contact-card-content">
              <h3>Support</h3>
              <p>
                Need a hand logging in to update your event form? Let’s get you connected with your support team.
              </p>
              <a href="mailto:support@aslangroup.ca">
                <button type="button" className="turquoise">Get Support</button>
              </a>
              <img className="static-img" src="/images/support.png" alt="Support Visual" />
            </div>
          </div>

          <div className="contact-card partnerships">
            <div className="contact-card-content">
              <h3>Partnerships</h3>
              <p>
                We’re into co-marketing with awesome brands. Drop us a note and our Partnerships team will circle back.
              </p>
              <a href="mailto:partnership@aslangroup.ca">
                <button type="button" className="pink">Get In Touch</button>
              </a>
              <img className="static-img" src="/images/partnership.png" alt="Partnership Visual" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
