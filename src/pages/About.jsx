import './About.css';
import SEO from '../components/SEO';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  useScrollAnimation();
  
  return (
    <>
    <SEO 
      title="About Phorus - Financial Advisory & Business Consulting" 
      description="Phorus Investment & Business Advisory is a professional services firm delivering expert accounting, finance, valuation, taxation and strategic advisory solutions to companies, investors and family offices in Nepal."
      keywords="about phorus, financial advisory nepal, business consulting kathmandu, accounting services, valuation services, taxation advisory"
      url="https://phorusadvisory.com/about"
    />
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="animate-fadeInUp">About Phorus</h1>
          <p className="about-subtitle animate-fadeInUp animate-delay-2">
            Transforming Financial Operations with Expert Advisory
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="content-container">
          <div className="about-story-section">
            <div className="story-header animate-on-scroll animate-fadeInUp">
              <h2>Who We Are</h2>
              <div className="header-underline"></div>
            </div>
            <div className="story-content animate-on-scroll animate-fadeInUp animate-delay-2">
              <p className="story-paragraph">
                <strong>Phorus Investment & Business Advisory Pvt. Ltd.</strong> is a professional services firm delivering disciplined accounting, finance, valuation, taxation and strategic advisory solutions to companies, investors and family offices.
              </p>
              <p className="story-paragraph">
                We operate at the intersection of <strong>financial rigor, operational clarity and strategic decision-making</strong>—helping leadership teams run stronger, cleaner, and more investor-ready organizations.
              </p>
              <p className="story-paragraph">
                Our firm is built on a simple principle: <strong>credible finance drives credible businesses.</strong> Every engagement we undertake is engineered to strengthen financial reporting quality, enhance analytical intelligence and improve governance standards across the organization.
              </p>
            </div>
          </div>

          <div className="values-section">
            <div className="section-header animate-on-scroll animate-fadeInUp">
              <h2>Our Core Values</h2>
              <div className="header-underline"></div>
            </div>
            <div className="values-row animate-on-scroll animate-fadeInUp animate-delay-2">
              <div className="value-item">
                <div className="value-icon-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3>Mission</h3>
                <p>
                  To provide institutional-quality financial advisory and execution support that elevates the financial maturity, decision-making capability and long-term resilience of our clients.
                </p>
              </div>
              <div className="value-item">
                <div className="value-icon-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                  </svg>
                </div>
                <h3>Vision</h3>
                <p>
                  To be the leading provider of financial advisory services in Nepal, recognized for delivering investor-grade solutions that transform business operations and strategic capabilities.
                </p>
              </div>
              <div className="value-item">
                <div className="value-icon-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
                  </svg>
                </div>
                <h3>Innovation</h3>
                <p>
                  We leverage cutting-edge financial tools, automation and data analytics to deliver superior insights, efficiency and competitive advantage to our clients.
                </p>
              </div>
              <div className="value-item">
                <div className="value-icon-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                  </svg>
                </div>
                <h3>Integrity</h3>
                <p>
                  Our deliverables are designed to withstand scrutiny by investors, auditors, regulators or counterparties. We do not compromise on accuracy, transparency or professional standards.
                </p>
              </div>
            </div>
          </div>

          <div className="team-section animate-on-scroll animate-fadeInUp">
            <h2>Our Team</h2>
            <p className="team-intro">
              Our senior advisory team brings together diverse expertise from leading
              financial institutions, Big Four firms, and successful transactions across
              multiple industries.
            </p>
            <div className="credentials">
              <div className="credential-badge animate-on-scroll animate-scaleIn animate-delay-1">
                <div className="credential-icon">📜</div>
                <h4>Chartered Accountants</h4>
                <p>CA, CPA certified professionals</p>
              </div>
              <div className="credential-badge animate-on-scroll animate-scaleIn animate-delay-2">
                <div className="credential-icon">📊</div>
                <h4>ACCA Professionals</h4>
                <p>Global accounting expertise</p>
              </div>
              <div className="credential-badge animate-on-scroll animate-scaleIn animate-delay-3">
                <div className="credential-icon">💼</div>
                <h4>MBA - Finance</h4>
                <p>Strategic finance leaders</p>
              </div>
              <div className="credential-badge animate-on-scroll animate-scaleIn animate-delay-4">
                <div className="credential-icon">⚖️</div>
                <h4>Legal Advisors</h4>
                <p>Corporate law specialists</p>
              </div>
              <div className="credential-badge animate-on-scroll animate-scaleIn animate-delay-5">
                <div className="credential-icon">💰</div>
                <h4>Tax Advisors</h4>
                <p>Tax planning & compliance</p>
              </div>
              <div className="credential-badge animate-on-scroll animate-scaleIn animate-delay-6">
                <div className="credential-icon">💻</div>
                <h4>IT Professionals</h4>
                <p>Financial systems experts</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default About;
