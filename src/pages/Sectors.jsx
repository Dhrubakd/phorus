import './Sectors.css';
import SEO from '../components/SEO';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Sectors = () => {
  useScrollAnimation();
  
  return (
    <>
    <SEO 
      title="Industry Sectors - Phorus Advisory Services" 
      description="Deep expertise across diverse industries including Real Estate, Technology, Manufacturing, Retail, Healthcare, Financial Services, Education, Hospitality, and Non-Profit sectors."
      keywords="industry sectors, real estate advisory, technology consulting, manufacturing finance, retail advisory, healthcare consulting, financial services nepal"
      url="https://phorusadvisory.com/sectors"
    />
    <div className="sectors-page">
      <section className="sectors-hero">
        <div className="sectors-hero-content">
          <h1>Industry Sectors</h1>
          <p className="sectors-subtitle">
            Deep Expertise Across Diverse Industries
          </p>
        </div>
      </section>

      <section className="sectors-content">
        <div className="sectors-container">
          <p className="sectors-intro">
            Our team has extensive experience serving clients across multiple industries, 
            bringing sector-specific insights and best practices to every engagement.
          </p>

          <div className="sectors-grid">
            <div className="sector-card">
              <div className="sector-icon">💻</div>
              <h3>Technology & SaaS</h3>
              <p>
                Specialized advisory for software companies, including subscription 
                metrics, ARR/MRR modeling, and SaaS-specific valuation methodologies.
              </p>
            </div>

            <div className="sector-card">
              <div className="sector-icon">⚕️</div>
              <h3>Healthcare & Life Sciences</h3>
              <p>
                Expert guidance for healthcare providers, medical devices, biotech, 
                and pharmaceutical companies navigating complex regulatory environments.
              </p>
            </div>

            <div className="sector-card">
              <div className="sector-icon">🏭</div>
              <h3>Manufacturing & Distribution</h3>
              <p>
                Operational finance expertise for manufacturers and distributors, 
                including inventory optimization and supply chain analytics.
              </p>
            </div>

            <div className="sector-card">
              <div className="sector-icon">🛍️</div>
              <h3>Consumer & Retail</h3>
              <p>
                Strategic support for retail and consumer brands, including omnichannel 
                analytics, customer lifetime value, and market expansion planning.
              </p>
            </div>

            <div className="sector-card">
              <div className="sector-icon">💼</div>
              <h3>Professional Services</h3>
              <p>
                Tailored solutions for consulting firms, law firms, and other 
                service-based businesses with unique revenue recognition needs.
              </p>
            </div>

            <div className="sector-card">
              <div className="sector-icon">🏗️</div>
              <h3>Real Estate & Construction</h3>
              <p>
                Comprehensive financial advisory for developers, REITs, and construction 
                firms, including project finance and feasibility analysis.
              </p>
            </div>

            <div className="sector-card">
              <div className="sector-icon">⚡</div>
              <h3>Energy & Utilities</h3>
              <p>
                Specialized expertise in traditional and renewable energy sectors, 
                including project valuation and regulatory compliance.
              </p>
            </div>

            <div className="sector-card">
              <div className="sector-icon">💳</div>
              <h3>Financial Services</h3>
              <p>
                Advisory for fintech, asset management, and financial institutions 
                with complex regulatory and reporting requirements.
              </p>
            </div>
            <div className="sector-card">
              <div className="sector-icon">🌍</div>
              <h3>NGO/INGO</h3>
              <p>
                Financial management and compliance support for non-profit organizations 
                with donor reporting, grant management, and impact measurement requirements.
              </p>
            </div>
            <div className="sector-card">
              <div className="sector-icon">💳</div>
              <h3>Travel Tourism and Hotels</h3>
              <p>
                Advisory for fintech, asset management, and financial institutions 
                with complex regulatory and reporting requirements.
              </p>
            </div>
            <div className="sector-card">
              <div className="sector-icon">💳</div>
              <h3>Hospitals and Education</h3>
              <p>
                Advisory for hospitals, educational institutions, and related sectors
                with complex regulatory and reporting requirements.
              </p>
            </div>
            <div className="sector-card">
              <div className="sector-icon">💳</div>
              <h3>Start-ups</h3>
              <p>
                Advisory for start-ups and emerging businesses with unique financial
                and operational challenges.
              </p>
            </div>
          </div>

          {/* <div className="sectors-cta">
            <h2>Don't See Your Industry?</h2>
            <p>
              We regularly work with clients across emerging and niche sectors. 
              Contact us to discuss your specific industry needs.
            </p>
          </div> */}
        </div>
      </section>
    </div>
    </>
  );
};

export default Sectors;
