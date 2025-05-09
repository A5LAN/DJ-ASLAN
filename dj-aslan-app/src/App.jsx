import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Booking from './pages/Booking';
import Home from './pages/Home';

function App() {
  return (
    <Router basename="/DJ-ASLAN/">{/* GitHub Pages subdirectory */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
