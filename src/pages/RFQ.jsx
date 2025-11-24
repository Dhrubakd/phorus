import { useState } from 'react';
import './RFQ.css';
import SEO from '../components/SEO';
import useScrollAnimation from '../hooks/useScrollAnimation';

const RFQ = () => {
  useScrollAnimation();
  
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    serviceType: '',
    projectScope: '',
    timeline: '',
    budget: '',
    description: '',
    documents: null
  });

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setFormData({
        ...formData,
        documents: e.target.files
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('RFQ Submitted:', formData);
    alert('Thank you for your request! We will contact you within 24 hours.');
  };

  return (
    <>
    <SEO 
      title="Request for Quotation - Phorus" 
      description="Request a quote for financial advisory, accounting, taxation, valuation, or strategic consulting services. Get customized solutions tailored to your business needs."
      keywords="request quote, rfq, financial services quote, consulting proposal, advisory services nepal"
      url="https://phorusadvisory.com/rfq"
    />
    <div className="rfq-page">
      <section className="rfq-hero">
        <div className="rfq-hero-content">
          <h1>Request for Quotation</h1>
          <p className="rfq-subtitle">
            Tell us about your project and we'll provide a tailored proposal
          </p>
        </div>
      </section>

      <section className="rfq-content">
        <div className="rfq-container">
          <form onSubmit={handleSubmit} className="rfq-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="companyName">Company Name *</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contactName">Contact Name *</label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="serviceType">Service Type *</label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="strategic-corporate">Strategic Corporate Finance</option>
                  <option value="financial-reporting">Financial Reporting and Accounting Services</option>
                  <option value="management-reporting">Management Reporting and Performance Analytics</option>
                  <option value="transaction-valuation">Transaction and Valuation Advisory</option>
                  <option value="taxation">Taxation and Regulatory Compliance</option>
                  <option value="governance">Corporate Governance and Controlls</option>
                  <option value="business-advisory">Business and Strategic Advisory</option>
                  <option value="technology">Technology and Digital Finance Governance</option>
                  <option value="outsourced">Outsourced Finance Department</option>
                  <option value="specialized">Specialized Industry Solution</option>
                  <option value="fpa">FP&A, Budgeting and Dashboard</option>
                  <option value="fractional-cfo">Fractional CFO</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="timeline">Expected Timeline</label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                >
                  <option value="">Select timeline</option>
                  <option value="urgent">Urgent (1-2 weeks)</option>
                  <option value="short">Short-term (1-3 months)</option>
                  <option value="medium">Medium-term (3-6 months)</option>
                  <option value="long">Long-term (6+ months)</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="projectScope">Project Scope *</label>
              <input
                type="text"
                id="projectScope"
                name="projectScope"
                value={formData.projectScope}
                onChange={handleChange}
                placeholder="Brief overview of your project"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="budget">Budget Range</label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="">Select budget range</option>
                <option value="under25k">Under $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k-250k">$100,000 - $250,000</option>
                <option value="over250k">Over $250,000</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="description">Detailed Description *</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="6"
                placeholder="Please provide details about your requirements, challenges, and objectives"
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="documents">Upload Documents (Optional)</label>
              <input
                type="file"
                id="documents"
                name="documents"
                onChange={handleChange}
                multiple
                accept=".pdf,.doc,.docx,.xls,.xlsx"
                className="file-input"
              />
              <p className="file-help-text">Upload any relevant documents (PDF, DOC, XLS - Max 10MB each)</p>
            </div>

            <button type="submit" className="submit-button">
              Submit Request
            </button>
          </form>

          <div className="rfq-sidebar">
            <div className="rfq-info-card">
              <h3>What Happens Next?</h3>
              <div className="process-step">
                <span className="step-number">1</span>
                <div>
                  <h4>Initial Review</h4>
                  <p>We'll review your request within 24 hours</p>
                </div>
              </div>
              <div className="process-step">
                <span className="step-number">2</span>
                <div>
                  <h4>Discovery Call</h4>
                  <p>Schedule a consultation to discuss your needs</p>
                </div>
              </div>
              <div className="process-step">
                <span className="step-number">3</span>
                <div>
                  <h4>Tailored Proposal</h4>
                  <p>Receive a customized proposal and timeline</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default RFQ;
