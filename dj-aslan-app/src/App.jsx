// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Booking from './pages/booking';  // Import from src/pages/booking.jsx

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/booking" element={<Booking />} />  {/* Routing to booking.jsx */}
      </Routes>
    </Router>
  );
}

export default App;
