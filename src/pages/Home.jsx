import React from 'react'
import PhoneFrame from '../components/PhoneFrame'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text slide-in-left">
              <h1>Create AI-powered assessments in seconds.</h1>
              <p className="hero-subtitle">Download now on the app store</p>
              <div className="hero-cta">
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
            <div className="hero-image slide-in-right">
              <PhoneFrame 
                image="/images/FirstHomeImg.PNG" 
                alt="SurveyAid app interface" 
                size="large"
                className="hero-phone"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section 1 */}
      <section className="feature-section section-padding">
        <div className="container">
          <div className="feature-content">
            <div className="feature-text fade-in">
              <h2>Build assessments with AI in seconds</h2>
              <p>
                Simply describe what you want to measure, and our AI will generate 
                professional survey questions tailored to your needs.
              </p>
              <ul className="feature-list">
                <li>AI-powered question generation</li>
                <li>Instant survey creation</li>
                <li>Professional templates</li>
              </ul>
            </div>
            <div className="feature-image fade-in">
              <PhoneFrame 
                image="/images/Section1Img.PNG" 
                alt="SurveyAid AI survey creation" 
                size="medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section 2 */}
      <section className="feature-section feature-section-alt section-padding">
        <div className="container">
          <div className="feature-content feature-content-reverse">
            <div className="feature-image fade-in">
              <PhoneFrame 
                image="/images/Section2Img.PNG" 
                alt="SurveyAid kiosk mode" 
                size="medium"
              />
            </div>
            <div className="feature-text fade-in">
              <h2>Take surveys anonymously or in kiosk mode</h2>
              <p>
                Collect participant information efficiently with flexible survey modes.
              </p>
              <ul className="feature-list">
                <li>Anonymous response collection</li>
                <li>Kiosk mode for public surveys</li>
                <li>Secure data handling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section 3 */}
      <section className="feature-section section-padding">
        <div className="container">
          <div className="feature-content">
            <div className="feature-text fade-in">
              <h2>Keep track of all surveys and responses</h2>
              <p>
                Manage all your surveys and responses in one centralized location.
              </p>
              <ul className="feature-list">
                <li>Centralized dashboard</li>
                <li>Real-time response tracking</li>
                <li>CSV export functionality</li>
              </ul>
            </div>
            <div className="feature-image fade-in">
              <PhoneFrame 
                image="/images/Section3Img.PNG" 
                alt="SurveyAid dashboard" 
                size="medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section-padding">
        <div className="container text-center">
          <div className="cta-content fade-in">
            <h2>Ready to revolutionize your survey creation?</h2>
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
      </section>
    </div>
  )
}

export default Home
