import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Booking from './pages/Booking'
import Home from './pages/Home'

function NotFound() {
  return <h2>Page Not Found</h2>
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
