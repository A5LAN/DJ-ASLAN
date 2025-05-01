import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Booking from './pages/Booking';  // Correct path to the Booking component
import Home from './pages/Home';      // Correct path to the Home component

function App() {
  return (
    <Router>  {/* Removed the basename */}
    {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Root path for Home */}
        <Route path="/Booking" element={<Booking />} /> {/* Path for Booking */}
        {/* 404 Route */}
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
