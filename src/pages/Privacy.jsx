import './Privacy.css';
import SEO from '../components/SEO';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Privacy = () => {
  useScrollAnimation();

  return (
    <>
      <SEO 
        title="Privacy Policy - Phorus Advisory"
        description="Learn about how Phorus Investment & Business Advisory collects, uses, and protects your personal information and data privacy."
        keywords="privacy policy, data protection, phorus privacy, confidentiality, information security"
        url="https://phorusadvisory.com/privacy"
      />
      <div className="privacy-page">
        <section className="privacy-hero">
          <div className="privacy-hero-content">
            <h1 className="animate-fadeInUp">Privacy Policy</h1>
            <p className="privacy-subtitle animate-fadeInUp animate-delay-2">
              Last Updated: November 2025
            </p>
          </div>
        </section>

        <section className="privacy-content">
          <div className="content-container">
            <div className="privacy-section animate-on-scroll animate-fadeInUp">
              <h2>1. Introduction</h2>
              <p>
                Phorus Investment & Business Advisory Pvt. Ltd. ("Phorus," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p>
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
              </p>
            </div>

            <div className="privacy-section animate-on-scroll animate-fadeInUp">
              <h2>2. Information We Collect</h2>
              <h3>2.1 Personal Information</h3>
              <p>We may collect personal information that you voluntarily provide to us when you:</p>
              <ul>
                <li>Request information about our services</li>
                <li>Submit a Request for Quotation (RFQ)</li>
                <li>Contact us through our website</li>
                <li>Subscribe to our newsletter or updates</li>
                <li>Engage our professional services</li>
              </ul>
              <p>This information may include:</p>
              <ul>
                <li>Name and contact information (email, phone number, address)</li>
                <li>Company name and position</li>
                <li>Financial and business information relevant to our services</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3>2.2 Automatically Collected Information</h3>
              <p>When you visit our website, we may automatically collect certain information about your device, including:</p>
              <ul>
                <li>IP address and browser type</li>
                <li>Operating system and device information</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
              </ul>
            </div>

            <div className="privacy-section animate-on-scroll animate-fadeInUp">
              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, operate, and maintain our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Analyze usage trends and user preferences</li>
                <li>Detect, prevent, and address technical issues or fraudulent activities</li>
                <li>Comply with legal obligations and regulatory requirements</li>
              </ul>
            </div>

            <div className="privacy-section animate-on-scroll animate-fadeInUp">
              <h2>4. Information Sharing and Disclosure</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
              <ul>
                <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website and conducting our business</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of company assets</li>
                <li><strong>With Your Consent:</strong> When you have given us explicit permission to share your information</li>
              </ul>
            </div>

            <div className="privacy-section animate-on-scroll animate-fadeInUp">
              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul>
                <li>Encryption of sensitive data during transmission</li>
                <li>Secure servers and databases</li>
                <li>Regular security assessments and updates</li>
                <li>Restricted access to personal information on a need-to-know basis</li>
              </ul>
              <p>
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </div>

            <div className="privacy-section animate-on-scroll animate-fadeInUp">
              <h2>6. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
              </p>
            </div>

            <div className="privacy-section animate-on-scroll animate-fadeInUp">
              <h2>7. Your Rights and Choices</h2>
              <p>You have the following rights regarding your personal information:</p>
              <ul>
                <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Objection:</strong> Object to the processing of your personal information</li>
                <li><strong>Restriction:</strong> Request restriction of processing your information</li>
                <li><strong>Portability:</strong> Request transfer of your information to another service provider</li>
                <li><strong>Withdraw Consent:</strong> Withdraw your consent to data processing at any time</li>
              </ul>
              <p>
                To exercise these rights, please contact us at <a href="mailto:phorusadvisory@gmail.com">phorusadvisory@gmail.com</a>
              </p>
            </div>

            <div className="privacy-section animate-on-scroll animate-fadeInUp">
              <h2>8. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your browsing experience and analyze website usage. You can control cookie preferences through your browser settings. However, disabling cookies may limit certain functionalities of our website.
              </p>
            </div>

            <div className="privacy-section animate-on-scroll animate-fadeInUp">
              <h2>9. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            <div className="privacy-section animate-on-scroll animate-fadeInUp">
              <h2>10. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
              </p>
            </div>

            <div className="privacy-section animate-on-scroll animate-fadeInUp">
              <h2>11. International Data Transfers</h2>
              <p>
                Your information may be transferred to and maintained on servers located outside of Nepal. By using our services, you consent to the transfer of your information to countries that may have different data protection laws than your jurisdiction.
              </p>
            </div>

            <div className="privacy-section animate-on-scroll animate-fadeInUp">
              <h2>12. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website with a revised "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </div>

            <div className="privacy-section animate-on-scroll animate-fadeInUp">
              <h2>13. Contact Us</h2>
              <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
              <div className="contact-info">
                <p><strong>Phorus Investment & Business Advisory Pvt. Ltd.</strong></p>
                <p>Kathmandu, Nepal</p>
                <p>Email: <a href="mailto:phorusadvisory@gmail.com">phorusadvisory@gmail.com</a></p>
                <p>Phone: +977 9861696726</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Privacy;
