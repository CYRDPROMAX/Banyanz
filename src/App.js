import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ProductsAndServices from './pages/ProductsAndServices';
import Industries from './pages/Industries';
import Company from './pages/Company';
import About from './pages/About';
import Features from './pages/Features';
import Join from './pages/Join';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <div className="logo"></div>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/products-and-services" className="nav-link">Products & Services</Link>
            <Link to="/industries" className="nav-link">Industries</Link>
            <Link to="/company" className="nav-link">Company</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/features" className="nav-link">Features</Link>
            <Link to="/join" className="nav-link">Join</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
          <div className="header-symbol"></div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products-and-services" element={<ProductsAndServices />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/company" element={<Company />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/join" element={<Join />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-column">
              <h3 className="footer-heading">Banyanz</h3>
              <p className="footer-text">Transforming enterprise connectivity with AI-driven private cellular networks.</p>
            </div>
            <div className="footer-column">
              <h3 className="footer-heading">Quick Links</h3>
              <a href="/products-and-services" className="footer-link">Products & Services</a>
              <a href="/industries" className="footer-link">Industries</a>
              <a href="/company" className="footer-link">Company</a>
            </div>
            <div className="footer-column">
              <h3 className="footer-heading">Connect</h3>
              <a href="https://www.linkedin.com" className="footer-link">LinkedIn</a>
              <a href="https://www.twitter.com" className="footer-link">Twitter</a>
              <a href="/contact" className="footer-link">Contact Us</a>
            </div>
            <div className="footer-column">
              <h3 className="footer-heading">Legal</h3>
              <a href="/privacy" className="footer-link">Privacy Policy</a>
              <a href="/terms" className="footer-link">Terms of Service</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Banyanz. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;