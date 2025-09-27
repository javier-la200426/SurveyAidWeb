import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="header-content fade-in">
            <h1>About SurveyAid</h1>
            <p>Empowering NGOs and community organizations with AI-powered survey tools</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section section-padding">
        <div className="container">
          <div className="mission-content text-center fade-in">
            <h2>Our Mission</h2>
            <p className="mission-text">
              To democratize professional assessment creation by making AI-powered survey and evaluation tools 
              accessible to everyone, regardless of technical expertise. We believe that powerful data collection 
              tools should be available to organizations of all sizes, enabling them to make informed decisions 
              and create positive impact in their communities.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section section-padding">
        <div className="container">
          <div className="story-content">
            <div className="story-text slide-in-left">
              <h2>Our Story</h2>
              <p>
                SurveyAid was born from a simple observation: while working with NGOs in developing countries, 
                I noticed that many organizations were still using paper-based surveys or basic online forms 
                that didn't capture the nuanced data they needed to make informed decisions.
              </p>
              <p>
                After witnessing the challenges of manual data collection and analysis, I decided to create 
                a solution that would make professional survey creation as easy as having a conversation. 
                The result was SurveyAid - a platform that uses AI to help organizations create multilingual surveys in seconds.
              </p>
            </div>
            <div className="story-image slide-in-right">
              <div className="story-visual">
                <div className="story-icon">📊</div>
                <h3>Data-Driven Impact</h3>
                <p>Helping organizations make better decisions through better data collection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section section-padding">
        <div className="container">
          <div className="team-content text-center">
            <h2 className="section-title fade-in">Our Team</h2>
            <div className="team-grid">
              <div className="team-member fade-in">
                <div className="member-photo">
                  <img src="/images/team-member1.svg" alt="Javier Laveaga" />
                </div>
                <div className="member-info">
                  <h3>Javier Laveaga</h3>
                  <p className="member-role">Founder & CEO</p>
                  <p className="member-description">
                    Creator of SurveyAid, responsible for the platform's development, design, and strategic vision. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section-padding">
        <div className="container">
          <div className="values-content text-center">
            <h2 className="section-title fade-in">Our Values</h2>
            <div className="values-grid">
              <div className="value-card fade-in">
                <div className="value-icon">🌍</div>
                <h3>Accessibility</h3>
                <p>
                  Making powerful survey tools accessible to organizations of all sizes, 
                  regardless of technical expertise or budget constraints.
                </p>
              </div>
              <div className="value-card fade-in">
                <div className="value-icon">🔒</div>
                <h3>Privacy First</h3>
                <p>
                  Protecting user data and ensuring privacy is at the core of everything we do. 
                  Your data stays on your device unless you choose to export it.
                </p>
              </div>
              <div className="value-card fade-in">
                <div className="value-icon">🤝</div>
                <h3>Community Impact</h3>
                <p>
                  Empowering organizations to create positive change in their communities through 
                  better data collection and informed decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section-padding">
        <div className="container text-center">
          <div className="cta-content fade-in">
            <h2>Join Our Mission</h2>
            <p>Be part of the movement to democratize professional survey creation</p>
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

export default About
