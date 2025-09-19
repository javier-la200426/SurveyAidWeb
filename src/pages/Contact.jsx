import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact">

      {/* Google Form Section */}
      <section className="google-form-section section-padding">
        <div className="container">
          <div className="google-form-content text-center">
            <h2 className="section-title fade-in">Contact Us</h2>
            <p className="section-subtitle fade-in">Get in touch with our team for support, questions, or partnership opportunities</p>
            
            <div className="google-form-card fade-in">
              <div className="contact-icon">📋</div>
              <h3>Fill out our inquiry form</h3>
              <p>Click the link below to access our Google Form and send us your message.</p>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfrzmUAXX1-XSz1O2tSS281t4r79uKZ67blRYNvYQNFEHUl6w/viewform?usp=dialog" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary google-form-btn"
              >
                Open Contact Form
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section-padding">
        <div className="container">
          <div className="faq-content text-center">
            <h2 className="section-title fade-in">Frequently Asked Questions</h2>
            <div className="faq-grid">
              <div className="faq-item fade-in">
                <h3>How does the AI survey creation work?</h3>
                <p>
                  Simply describe what you want to measure, and our AI will generate professional survey questions 
                  tailored to your needs. The AI considers context, cultural appropriateness, and best practices 
                  in survey design.
                </p>
              </div>
              <div className="faq-item fade-in">
                <h3>Is my data secure?</h3>
                <p>
                  Yes, your survey data stays private on your device. We don't upload your data to our servers 
                  unless you choose to export it. We also don't collect personal information like names, emails, 
                  or contacts.
                </p>
              </div>
              <div className="faq-item fade-in">
                <h3>Can I use SurveyAid offline?</h3>
                <p>
                  Yes, once you've created your surveys, you can collect responses offline.
                </p>
              </div>
              <div className="faq-item fade-in">
                <h3>What languages are supported?</h3>
                <p>
                  SurveyAid supports 180+ languages for survey creation and translation. You can create surveys 
                  in your preferred language or translate existing surveys with just one click.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
