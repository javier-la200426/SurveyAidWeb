import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <Link to="/" className="footer-logo">
              <img src="/images/IconStart.png" alt="SurveyAid Logo" className="footer-logo-img" />
              <span className="footer-logo-text">SurveyAid</span>
            </Link>
            <p className="footer-description">
              Create AI-powered assessments in seconds. Empowering organizations with professional survey tools.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Download</h4>
            <a 
              href="https://apps.apple.com/us/app/surveyaid/id6752032428" 
              target="_blank" 
              rel="noopener noreferrer"
              className="app-store-link"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                alt="Download on the App Store" 
                className="app-store-badge"
              />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 SurveyAid. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
