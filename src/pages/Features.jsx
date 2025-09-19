import React from 'react'
import PhoneFrame from '../components/PhoneFrame'
import './Features.css'

const Features = () => {
  return (
    <div className="features">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="header-content fade-in">
            <h1>Features</h1>
            <p>Discover the powerful tools that make SurveyAid the perfect solution for your organization</p>
          </div>
        </div>
      </section>

      {/* Organization Management */}
      <section className="organization-section section-padding">
        <div className="container">
          <div className="organization-content text-center fade-in">
            <h2>Organization Management</h2>
            <p>Keep your surveys and assessments organized with our comprehensive management system</p>
            
            <div className="organization-images">
              <div className="org-image-item slide-in-left">
                <h3>Created Surveys</h3>
                <PhoneFrame 
                  image="/images/SurveyTemplates.PNG" 
                  alt="Survey Templates - Keep your created surveys organized" 
                  size="medium"
                />
                <p>Manage and organize all your created surveys in one place</p>
              </div>
              <div className="org-image-item slide-in-right">
                <h3>Past Assessments</h3>
                <PhoneFrame 
                  image="/images/Assesments.PNG" 
                  alt="Assessment History - Keep your taken assessments organized" 
                  size="medium"
                />
                <p>Track and review all completed assessments and their results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="core-features-section section-padding">
        <div className="container">
          <h2 className="section-title text-center fade-in">Core Features</h2>
          <div className="features-grid">
            <div className="feature-card fade-in">
              <div className="feature-icon">🤖</div>
              <h3>AI-Powered Creation</h3>
              <ul>
                <li>Generate surveys in seconds with AI</li>
                <li>Context-aware survey structure</li>
                <li>Professional formatting</li>
              </ul>
            </div>

            <div className="feature-card fade-in">
              <div className="feature-icon">🌍</div>
              <h3>Multilingual Support</h3>
              <ul>
                <li>Generate surveys in 180+ languages</li>
                <li>Translate during creation or editing</li>
                <li>One-click translation to any language</li>
              </ul>
            </div>

            <div className="feature-card fade-in">
              <div className="feature-icon">🔒</div>
              <h3>Privacy & Security</h3>
              <ul>
                <li>Your survey data stays private on your phone</li>
                <li>Data not uploaded unless you export to CSV</li>
                <li>No personal information collected</li>
              </ul>
            </div>

            <div className="feature-card fade-in">
              <div className="feature-icon">📊</div>
              <h3>Data Management</h3>
              <ul>
                <li>Real-time response tracking</li>
                <li>Export to CSV format</li>
                <li>Data visualization tools</li>
              </ul>
            </div>

            <div className="feature-card fade-in">
              <div className="feature-icon">📱</div>
              <h3>Flexible Collection</h3>
              <ul>
                <li>Anonymous response collection</li>
                <li>Kiosk mode for public surveys</li>
                <li>Offline data collection</li>
              </ul>
            </div>

            <div className="feature-card fade-in">
              <div className="feature-icon">⚡</div>
              <h3>Easy to Use</h3>
              <ul>
                <li>Intuitive interface design</li>
                <li>No technical knowledge required</li>
                <li>Quick setup and deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section section-padding">
        <div className="container">
          <div className="pricing-content text-center">
            <h2 className="section-title fade-in">Pricing Plans</h2>
            <p className="pricing-subtitle fade-in">Choose the plan that fits your organization's needs</p>
            
            <div className="pricing-table fade-in">
              <div className="pricing-card">
                <div className="pricing-header">
                  <h3>Free</h3>
                  <div className="price">
                    <span className="price-amount">$0</span>
                    <span className="price-period">/month</span>
                  </div>
                </div>
                <div className="pricing-features">
                  <ul>
                    <li>5 AI survey creations/edits per day</li>
                    <li>Access to all features</li>
                  </ul>
                </div>
                <div className="pricing-cta">
                  <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    Get Started
                  </a>
                </div>
              </div>

              <div className="pricing-card pricing-card-featured">
                <div className="pricing-badge">Most Popular</div>
                <div className="pricing-header">
                  <h3>SurveyAid Basic</h3>
                  <div className="price">
                    <span className="price-amount">$4.99</span>
                    <span className="price-period">/month</span>
                  </div>
                </div>
                <div className="pricing-features">
                  <ul>
                    <li>100 AI survey creations/edits per month</li>
                    <li>Access to all features</li>
                  </ul>
                </div>
                <div className="pricing-cta">
                  <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Get Started
                  </a>
                </div>
              </div>

              <div className="pricing-card">
                <div className="pricing-header">
                  <h3>SurveyAid Pro</h3>
                  <div className="price">
                    <span className="price-amount">$9.99</span>
                    <span className="price-period">/month</span>
                  </div>
                </div>
                <div className="pricing-features">
                  <ul>
                    <li>500 AI survey creations/edits per month</li>
                    <li>Access to all features</li>
                  </ul>
                </div>
                <div className="pricing-cta">
                  <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section-padding">
        <div className="container text-center">
          <div className="cta-content fade-in">
            <h2>Ready to Get Started?</h2>
            <a 
              href="https://apps.apple.com" 
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

export default Features
