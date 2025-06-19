import React from 'react';
import MobileNavBar from '../components/MobileNavBar'; // Adjust path as needed
import BookingForm from '../BookingForm'; // Adjusted import
import '../form.css'; // Adjusted path for form.css

function Booking() {
  return (
    <>
      <MobileNavBar />
      <div style={{ padding: '2rem' }}>
        <BookingForm />
      </div>
    </>
  );
}

export default Booking;
