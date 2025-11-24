import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Home.css';

const Home = () => {
  useScrollAnimation();
  
  return (
    <>
      <SEO 
        title="Phorus Advisory - Transaction Advisory & Financial Consulting Services in Nepal"
        description="Transform your finance operations into investor-grade credibility. Expert financial advisory services including strategic corporate finance, transaction advisory, valuation, FP&A, and fractional CFO services in Kathmandu, Nepal."
        keywords="financial advisory Nepal, transaction advisory Kathmandu, valuation services Nepal, CFO services, FP&A Nepal, corporate finance consulting, business advisory Nepal, M&A advisory, financial reporting services"
        url="https://phorusadvisory.com"
      />
      <div className="home">
      {/* Hero Section with 3D Background */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="sphere sphere-1"></div>
          <div className="sphere sphere-2"></div>
          <div className="sphere sphere-3"></div>
          <div className="grid-overlay"></div>
        </div>
        
        <div className="hero-content">
          <h1 className="hero-headline animate-fadeInUp">
            Your Trusted Advisor that Converts Finance Operations into Investor-Grade Credibility
          </h1>
          <p className="hero-subhead animate-fadeInUp animate-delay-2">
            We help growth-stage companies, family offices and investors establish rigorous reporting, 
            forecasting and financial governance enabling faster decision-making, cleaner data and 
            greater confidence during deals, fundraising and strategic planning.
          </p>
          <Link to="/contact" className="cta-button animate-fadeInUp animate-delay-3">
            Book a Consultation
          </Link>
        </div>
      </section>

      {/* Trust Anchors Section */}
      <section className="trust-section">
        <h2 className="section-title animate-on-scroll animate-fadeInUp">Why Choose Phorus</h2>
        <div className="trust-grid">
          <div className="trust-card animate-on-scroll animate-fadeInUp animate-delay-1">
            <div className="trust-icon">👔</div>
            <h3>Senior Expertise</h3>
            <p>
              Our leadership team has successfully led board-level financial reporting, fundraising rounds, and complex M&A transactions across diverse industries and markets.
            </p>
          </div>
          <div className="trust-card animate-on-scroll animate-fadeInUp animate-delay-2">
            <div className="trust-icon">🎯</div>
            <h3>Outcome-Driven Delivery</h3>
            <p>
              We focus on measurable results and tangible value creation, delivering solutions that directly impact your bottom line and strategic objectives.
            </p>
          </div>
          <div className="trust-card animate-on-scroll animate-fadeInUp animate-delay-3">
            <div className="trust-icon">💎</div>
            <h3>Investor Grade Standards</h3>
            <p>
              We apply institutional-quality financial practices and reporting standards that meet the rigorous expectations of investors, lenders, and stakeholders.
            </p>
          </div>
          <div className="trust-card animate-on-scroll animate-fadeInUp animate-delay-4">
            <div className="trust-icon">✅</div>
            <h3>Reliable Execution</h3>
            <p>
              Our proven track record of on-time, high-quality deliverables ensures you can depend on us for critical financial projects and deadlines.
            </p>
          </div>
          <div className="trust-card animate-on-scroll animate-fadeInUp animate-delay-5">
            <div className="trust-icon">🏭</div>
            <h3>Cross-Industry Financial Statement</h3>
            <p>
              Deep experience spanning technology, manufacturing, real estate, FMCG, and professional services enables us to understand sector-specific nuances and best practices.
            </p>
          </div>
          <div className="trust-card animate-on-scroll animate-fadeInUp animate-delay-6">
            <div className="trust-icon">🛡️</div>
            <h3>Governance and Controls Mindset</h3>
            <p>
              We embed robust internal controls, compliance frameworks, and governance structures into every engagement to protect your business and ensure operational integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="services-section">
        <h2 className="section-title animate-on-scroll animate-fadeInUp">Core Services</h2>
        <div className="services-grid">
          <div className="service-card animate-on-scroll animate-scaleIn animate-delay-1">
            <div className="service-icon">🎯</div>
            <h3>Strategic Corporate Finance</h3>
            <p>
              Aligning financial strategy with business goals through capital allocation optimization, 
              long-term planning, and strategic decision support for sustainable growth.
            </p>
            <Link to="/services#strategic-corporate" className="service-link">Learn More →</Link>
          </div>
          <div className="service-card animate-on-scroll animate-scaleIn animate-delay-2">
            <div className="service-icon">📊</div>
            <h3>Financial Reporting and Accounting Services</h3>
            <p>
              Ensuring accuracy and compliance with GAAP/IFRS standards through comprehensive financial 
              statement preparation, audit support, and regulatory reporting.
            </p>
            <Link to="/services#financial-reporting" className="service-link">Learn More →</Link>
          </div>
          <div className="service-card animate-on-scroll animate-scaleIn animate-delay-3">
            <div className="service-icon">📈</div>
            <h3>Management Reporting and Performance Analytics</h3>
            <p>
              Delivering actionable insights through KPI tracking, variance analysis, and customized 
              dashboards to drive informed business decisions.
            </p>
            <Link to="/services#management-reporting" className="service-link">Learn More →</Link>
          </div>
          <div className="service-card animate-on-scroll animate-scaleIn animate-delay-4">
            <div className="service-icon">🤝</div>
            <h3>Transaction and Valuation Advisory</h3>
            <p>
              Providing expert guidance for M&A, due diligence, business valuations, and deal 
              structuring to maximize transaction value and minimize risk.
            </p>
            <Link to="/services#transaction-valuation" className="service-link">Learn More →</Link>
          </div>
          <div className="service-card animate-on-scroll animate-scaleIn animate-delay-5">
            <div className="service-icon">📋</div>
            <h3>Taxation and Regulatory Compliance</h3>
            <p>
              Navigating complex tax regulations and ensuring compliance with corporate tax planning, 
              transfer pricing, and regulatory filing requirements.
            </p>
            <Link to="/services#taxation" className="service-link">Learn More →</Link>
          </div>
          <div className="service-card animate-on-scroll animate-scaleIn animate-delay-6">
            <div className="service-icon">🔒</div>
            <h3>Corporate Governance and Controlls</h3>
            <p>
              Establishing robust internal controls, risk management frameworks, and governance 
              structures to ensure operational integrity and stakeholder confidence.
            </p>
            <Link to="/services#governance" className="service-link">Learn More →</Link>
          </div>
          <div className="service-card animate-on-scroll animate-scaleIn animate-delay-1">
            <div className="service-icon">💼</div>
            <h3>Business and Strategic Advisory</h3>
            <p>
              Supporting critical business decisions with market analysis, feasibility studies, 
              business planning, and strategic growth initiatives.
            </p>
            <Link to="/services#business-advisory" className="service-link">Learn More →</Link>
          </div>
          <div className="service-card animate-on-scroll animate-scaleIn animate-delay-2">
            <div className="service-icon">💻</div>
            <h3>Technology and Digital Finance Governance</h3>
            <p>
              Implementing modern financial systems, automation solutions, and digital controls 
              to enhance efficiency and data integrity.
            </p>
            <Link to="/services#technology" className="service-link">Learn More →</Link>
          </div>
          <div className="service-card animate-on-scroll animate-scaleIn animate-delay-3">
            <div className="service-icon">🏢</div>
            <h3>Outsourced Finance Department</h3>
            <p>
              Providing comprehensive finance function support including bookkeeping, financial reporting, 
              accounts management, and treasury operations for growing businesses.
            </p>
            <Link to="/services#outsourced" className="service-link">Learn More →</Link>
          </div>
          <div className="service-card animate-on-scroll animate-scaleIn animate-delay-4">
            <div className="service-icon">🎓</div>
            <h3>Specialized Industry Solution</h3>
            <p>
              Delivering sector-specific expertise and tailored financial solutions for industries 
              with unique operational and regulatory requirements.
            </p>
            <Link to="/services#specialized" className="service-link">Learn More →</Link>
          </div>
          <div className="service-card animate-on-scroll animate-scaleIn animate-delay-5">
            <div className="service-icon">📊</div>
            <h3>FP&A, Budgeting and Dashboard</h3>
            <p>
              Building comprehensive financial planning, budgeting frameworks, and interactive 
              dashboards for real-time performance monitoring and forecasting.
            </p>
            <Link to="/services#fpa" className="service-link">Learn More →</Link>
          </div>
          <div className="service-card animate-on-scroll animate-scaleIn animate-delay-6">
            <div className="service-icon">👔</div>
            <h3>Fractional CFO</h3>
            <p>
              Offering strategic CFO-level expertise on a flexible basis for companies needing 
              senior financial leadership without full-time commitment.
            </p>
            <Link to="/services#fractional-cfo" className="service-link">Learn More →</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Transform Your Financial Operations?</h2>
          <p>Let's discuss how we can help you achieve investor-grade credibility.</p>
          <Link to="/contact" className="cta-button-secondary">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;
