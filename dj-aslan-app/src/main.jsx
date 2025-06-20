import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './assets/styles.css';

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <BrowserRouter basename="/">  {/* Serving at root */}
      <App />
    </BrowserRouter>
  </StrictMode>
)
