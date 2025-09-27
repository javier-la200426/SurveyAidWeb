import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <nav className="nav">
        <div className="container">
          <div className="nav-content">
            <Link to="/" className="logo" onClick={closeMenu}>
              <img src="/images/IconStart.png" alt="SurveyAid Logo" className="logo-img" />
              <span className="logo-text">SurveyAid</span>
            </Link>
            
            <div className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                to="/features" 
                className={`nav-link ${location.pathname === '/features' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Features
              </Link>
              <Link 
                to="/about" 
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Contact
              </Link>
              <a 
                href="https://apps.apple.com/us/app/surveyaid/id6752032428" 
                target="_blank" 
                rel="noopener noreferrer"
                className="nav-cta btn btn-primary"
                onClick={closeMenu}
              >
                Download App
              </a>
            </div>

            <button className="menu-toggle" onClick={toggleMenu}>
              <span className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
