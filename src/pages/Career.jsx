import { useState } from 'react';
import './Career.css';
import SEO from '../components/SEO';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Career = () => {
  useScrollAnimation();
  
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [];

  // Uncomment to add job positions
  // const jobs = [
  //   {
  //     id: 1,
  //     title: 'Senior Financial Analyst',
  //     location: 'Kathmandu, Nepal',
  //     type: 'Full-time',
  //     experience: '5+ years',
  //     description: 'Lead complex financial analysis and modeling projects for our clients.',
  //     requirements: [
  //       'CA, CFA, or CPA certification preferred',
  //       '5+ years in financial analysis or consulting',
  //       'Advanced Excel and financial modeling skills',
  //       'Strong communication and presentation abilities'
  //     ]
  //   }
  // ];

  return (
    <>
    <SEO 
      title="Careers at Phorus - Join Our Team" 
      description="Explore career opportunities at Phorus Investment & Business Advisory. Join our team of financial professionals in Kathmandu, Nepal and grow your career in financial advisory and consulting."
      keywords="phorus careers, financial jobs nepal, accounting careers kathmandu, consulting jobs, advisory careers"
      url="https://phorusadvisory.com/career"
    />
    <div className="career-page">
      <section className="career-hero">
        <div className="career-hero-content">
          <h1>Join Our Team</h1>
          <p className="career-subtitle">
            Build Your Career in Financial Advisory Excellence
          </p>
        </div>
      </section>

      <section className="career-content">
        <div className="career-container">
          <div className="career-intro">
            <h2>Why Work at Phorus?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">🎯</div>
                <h3>Impactful Work</h3>
                <p>Work on high-profile transactions and strategic projects</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">📚</div>
                <h3>Growth & Development</h3>
                <p>Continuous learning and professional development opportunities</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">⚖️</div>
                <h3>Work-Life Balance</h3>
                <p>Flexible working arrangements and generous time off</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">💰</div>
                <h3>Competitive Package</h3>
                <p>Market-leading compensation and comprehensive benefits</p>
              </div>
            </div>
          </div>

          <div className="job-section">
            <h2>Open Positions</h2>
            {jobs.length === 0 ? (
              <div className="no-positions-message">
                <div className="no-positions-icon">📋</div>
                <h3>No Open Positions Currently</h3>
                <p>
                  We don't have any open positions at the moment, but we're always looking for talented 
                  professionals to join our team. Please submit your resume for future opportunities below.
                </p>
              </div>
            ) : (
            <div className="jobs-grid">
              {jobs.map((job) => (
                <div key={job.id} className="job-card">
                  <div className="job-header">
                    <h3>{job.title}</h3>
                    <span className="job-type">{job.type}</span>
                  </div>
                  <div className="job-meta">
                    <span className="job-location">📍 {job.location}</span>
                    <span className="job-experience">💼 {job.experience}</span>
                  </div>
                  <p className="job-description">{job.description}</p>
                  <button 
                    className="view-details-btn"
                    onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                  >
                    {selectedJob === job.id ? 'Hide Details' : 'View Details'}
                  </button>
                  
                  {selectedJob === job.id && (
                    <div className="job-details">
                      <h4>Requirements:</h4>
                      <ul>
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                      <button className="apply-btn">Apply Now</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
            )}
          </div>

          <div className="general-application">
            <h2>Don't See the Right Role?</h2>
            <p>
              We're always looking for talented professionals to join our team. 
              Submit your resume for future opportunities.
            </p>
            <button className="general-apply-btn">Submit General Application</button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Career;
