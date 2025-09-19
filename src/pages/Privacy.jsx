import React from 'react'
import './Privacy.css'

const Privacy = () => {
  return (
    <div className="privacy">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="header-content fade-in">
            <h1>Privacy Policy for SurveyAid</h1>
            <p className="last-updated"><em>Last updated: September 17, 2025</em></p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="privacy-content section-padding">
        <div className="container">
          <div className="content-wrapper">
            <p className="intro-text">
              SurveyAid ("we", "our", or "us") values your privacy. This Privacy Policy explains what information our mobile app collects, how it is used, and your choices regarding your data.
            </p>
            
            <hr className="section-divider" />
            
            <div className="privacy-section">
              <h2>Information We Collect</h2>
              <p>SurveyAid collects minimal data necessary to provide our service:</p>
              <ul>
                <li>
                  <strong>Subscription Data:</strong> Managed through <a href="https://www.revenuecat.com/" target="_blank" rel="noopener noreferrer">RevenueCat</a>, including subscription status, purchase history, and entitlements (e.g., free, basic, pro plans).
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you interact with AI features (such as the number of requests) to enforce subscription limits.
                </li>
                <li>
                  <strong>User Content:</strong> Prompts you enter to generate assessments are sent to our AI service provider (<a href="https://openrouter.ai/" target="_blank" rel="noopener noreferrer">OpenRouter</a>) to return results.
                </li>
                <li>
                  <strong>Local Data:</strong> Assessment results are stored on your device and are not uploaded to our servers unless you choose to share them.
                </li>
              </ul>
              
              <p>
                We do not collect your name, email, phone number, contacts, location, or sensitive personal information. Payment details are handled securely by Apple/Google; we do not see or store them.
              </p>
            </div>
            
            <div className="privacy-section">
              <h2>How We Use the Information</h2>
              <ul>
                <li>To provide and maintain core app functionality</li>
                <li>To verify and manage subscription access</li>
                <li>To process AI-powered template generation</li>
                <li>To ensure fair usage of subscription plans</li>
              </ul>
              
              <p>We do not use your data for advertising or marketing purposes.</p>
            </div>
            
            <div className="privacy-section">
              <h2>Sharing of Information</h2>
              <p>SurveyAid shares data only with trusted third parties needed to operate the app:</p>
              <ul>
                <li>RevenueCat (subscription management)</li>
                <li>OpenRouter (AI prompt processing)</li>
                <li>Apple/Google App Store (payment processing)</li>
              </ul>
              
              <p>We do not sell your data or share it with advertisers.</p>
            </div>
            
            <div className="privacy-section">
              <h2>Data Retention</h2>
              <ul>
                <li>Subscription data is retained as long as necessary for your account.</li>
                <li>Usage data may be stored temporarily to enforce quotas.</li>
                <li>Assessment content remains on your device unless deleted by you.</li>
              </ul>
            </div>
            
            <div className="privacy-section">
              <h2>Children's Privacy</h2>
              <p>
                SurveyAid is not directed at children under 13. We do not knowingly collect personal information from children.
              </p>
            </div>
            
            <div className="privacy-section">
              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be reflected on this page with a new "Last updated" date.
              </p>
            </div>
            
            <div className="privacy-section">
              <h2>Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us:</p>
              <p className="contact-link-wrapper">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfrzmUAXX1-XSz1O2tSS281t4r79uKZ67blRYNvYQNFEHUl6w/viewform?usp=dialog" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  Google Form for inquiries
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Privacy
