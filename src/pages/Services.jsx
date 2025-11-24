import './Services.css';
import SEO from '../components/SEO';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Services = () => {
  useScrollAnimation();
  
  return (
    <>
    <SEO 
      title="Professional Services - Phorus Financial Advisory" 
      description="Comprehensive financial advisory services including Strategic Corporate Finance, Financial Reporting, Transaction Advisory, Taxation, Governance, FP&A, and Fractional CFO services for growth-stage companies."
      keywords="financial advisory services, corporate finance, transaction advisory, taxation services, business advisory, fractional cfo, fpa budgeting, valuation services nepal"
      url="https://phorusadvisory.com/services"
    />
    <div className="services-page">
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>Professional Services</h1>
          <p className="services-subtitle">
            Comprehensive Financial Advisory for Growth-Stage Excellence
          </p>
        </div>
      </section>

      <section className="services-content">
        <div className="services-container">
          <div className="service-detail" id="strategic-corporate">
            <div className="service-icon">🎯</div>
            <h2>Strategic Corporate Finance</h2>
            <p className="service-description">
              Aligning financial strategy with business goals through capital allocation optimization, 
              long-term planning, and strategic decision support for sustainable growth.
            </p>
            <ul className="service-features">
              <li>Long-range strategic planning and modeling</li>
              <li>Capital structure optimization</li>
              <li>Investment appraisal and prioritization</li>
              <li>Growth strategy and expansion planning</li>
              <li>Scenario analysis and stress testing</li>
            </ul>
          </div>

          <div className="service-detail" id="financial-reporting">
            <div className="service-icon">📊</div>
            <h2>Financial Reporting and Accounting Services</h2>
            <p className="service-description">
              Ensuring accuracy and compliance with GAAP/IFRS standards through comprehensive financial 
              statement preparation, audit support, and regulatory reporting.
            </p>
            <ul className="service-features">
              <li>Financial statement preparation (GAAP/IFRS)</li>
              <li>Month-end and year-end close procedures</li>
              <li>Audit coordination and support</li>
              <li>Regulatory compliance reporting</li>
              <li>Accounting policy development</li>
            </ul>
          </div>

          <div className="service-detail" id="management-reporting">
            <div className="service-icon">📈</div>
            <h2>Management Reporting and Performance Analytics</h2>
            <p className="service-description">
              Delivering actionable insights through KPI tracking, variance analysis, and customized 
              dashboards to drive informed business decisions.
            </p>
            <ul className="service-features">
              <li>Customized management dashboards</li>
              <li>KPI development and tracking</li>
              <li>Variance analysis and trend reporting</li>
              <li>Business unit performance analysis</li>
              <li>Executive reporting packages</li>
            </ul>
          </div>

          <div className="service-detail" id="transaction-valuation">
            <div className="service-icon">🤝</div>
            <h2>Transaction and Valuation Advisory</h2>
            <p className="service-description">
              Providing expert guidance for M&A, due diligence, business valuations, and deal 
              structuring to maximize transaction value and minimize risk.
            </p>
            <ul className="service-features">
              <li>Buy-side and sell-side M&A advisory</li>
              <li>Financial and commercial due diligence</li>
              <li>Business and asset valuations</li>
              <li>Quality of earnings analysis</li>
              <li>Deal structuring and negotiation support</li>
            </ul>
          </div>

          <div className="service-detail" id="taxation">
            <div className="service-icon">📋</div>
            <h2>Taxation and Regulatory Compliance</h2>
            <p className="service-description">
              Navigating complex tax regulations and ensuring compliance with corporate tax planning, 
              transfer pricing, and regulatory filing requirements.
            </p>
            <ul className="service-features">
              <li>Corporate tax planning and optimization</li>
              <li>Tax compliance and return preparation</li>
              <li>Transfer pricing documentation</li>
              <li>VAT/GST advisory and compliance</li>
              <li>Tax dispute resolution support</li>
            </ul>
          </div>

          <div className="service-detail" id="governance">
            <div className="service-icon">🔒</div>
            <h2>Corporate Governance and Controlls</h2>
            <p className="service-description">
              Establishing robust internal controls, risk management frameworks, and governance 
              structures to ensure operational integrity and stakeholder confidence.
            </p>
            <ul className="service-features">
              <li>Internal control design and implementation</li>
              <li>Risk assessment and mitigation strategies</li>
              <li>Corporate governance framework development</li>
              <li>Policy and procedure documentation</li>
              <li>SOX compliance and testing</li>
            </ul>
          </div>

          <div className="service-detail" id="business-advisory">
            <div className="service-icon">💼</div>
            <h2>Business and Strategic Advisory</h2>
            <p className="service-description">
              Supporting critical business decisions with market analysis, feasibility studies, 
              business planning, and strategic growth initiatives.
            </p>
            <ul className="service-features">
              <li>Business plan development</li>
              <li>Market analysis and feasibility studies</li>
              <li>Strategic growth planning</li>
              <li>Operational improvement initiatives</li>
              <li>Turnaround and restructuring advisory</li>
            </ul>
          </div>

          <div className="service-detail" id="technology">
            <div className="service-icon">💻</div>
            <h2>Technology and Digital Finance Governance</h2>
            <p className="service-description">
              Implementing modern financial systems, automation solutions, and digital controls 
              to enhance efficiency and data integrity.
            </p>
            <ul className="service-features">
              <li>ERP system selection and implementation</li>
              <li>Financial process automation</li>
              <li>Data analytics and visualization tools</li>
              <li>Digital controls and cybersecurity</li>
              <li>System integration and optimization</li>
            </ul>
          </div>

          <div className="service-detail" id="outsourced">
            <div className="service-icon">🏢</div>
            <h2>Outsourced Finance Department</h2>
            <p className="service-description">
              Providing comprehensive finance function support including bookkeeping, financial reporting, 
              accounts management, and treasury operations for growing businesses.
            </p>
            <ul className="service-features">
              <li>Full-service bookkeeping and accounting</li>
              <li>Accounts payable and receivable management</li>
              <li>Payroll processing and administration</li>
              <li>Cash flow and treasury management</li>
              <li>Month-end close and reconciliations</li>
            </ul>
          </div>

          <div className="service-detail" id="specialized">
            <div className="service-icon">🎓</div>
            <h2>Specialized Industry Solution</h2>
            <p className="service-description">
              Delivering sector-specific expertise and tailored financial solutions for industries 
              with unique operational and regulatory requirements.
            </p>
            <ul className="service-features">
              <li>Industry-specific financial modeling</li>
              <li>Sector regulatory compliance</li>
              <li>Specialized revenue recognition</li>
              <li>Industry benchmarking and analytics</li>
              <li>Vertical-specific best practices</li>
            </ul>
          </div>

          <div className="service-detail" id="fpa">
            <div className="service-icon">📊</div>
            <h2>FP&A, Budgeting and Dashboard</h2>
            <p className="service-description">
              Building comprehensive financial planning, budgeting frameworks, and interactive 
              dashboards for real-time performance monitoring and forecasting.
            </p>
            <ul className="service-features">
              <li>Annual budgeting and rolling forecasts</li>
              <li>Financial modeling and scenario planning</li>
              <li>Real-time performance dashboards</li>
              <li>Variance analysis and reporting</li>
              <li>Driver-based planning models</li>
            </ul>
          </div>

          <div className="service-detail" id="fractional-cfo">
            <div className="service-icon">👔</div>
            <h2>Fractional CFO</h2>
            <p className="service-description">
              Offering strategic CFO-level expertise on a flexible basis for companies needing 
              senior financial leadership without full-time commitment.
            </p>
            <ul className="service-features">
              <li>Strategic financial planning and analysis</li>
              <li>Board and investor relations</li>
              <li>Capital raising and financing strategies</li>
              <li>Financial team leadership and mentoring</li>
              <li>Exit planning and transaction advisory</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Services;
