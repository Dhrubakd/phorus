import './Terms.css';
import SEO from '../components/SEO';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Terms = () => {
  useScrollAnimation();

  return (
    <>
      <SEO 
        title="Terms of Service - Phorus Advisory"
        description="Read the terms and conditions for using Phorus Investment & Business Advisory services and website."
        keywords="terms of service, terms and conditions, user agreement, phorus terms, service agreement"
        url="https://phorusadvisory.com/terms"
      />
      <div className="terms-page">
        <section className="terms-hero">
          <div className="terms-hero-content">
            <h1 className="animate-fadeInUp">Terms of Service</h1>
            <p className="terms-subtitle animate-fadeInUp animate-delay-2">
              Last Updated: November 2025
            </p>
          </div>
        </section>

        <section className="terms-content">
          <div className="content-container">
            <div className="terms-section animate-on-scroll animate-fadeInUp">
              <h2>1. Acceptance of Terms</h2>
              <p>
                Welcome to Phorus Investment & Business Advisory Pvt. Ltd. ("Phorus," "we," "us," or "our"). By accessing or using our website and services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
              </p>
              <p>
                We reserve the right to modify these Terms at any time. Your continued use of our services after changes are posted constitutes acceptance of the modified Terms.
              </p>
            </div>

            <div className="terms-section animate-on-scroll animate-fadeInUp">
              <h2>2. Services Description</h2>
              <p>
                Phorus provides professional financial advisory, accounting, taxation, valuation, and strategic consulting services to businesses, investors, and family offices. Our services include but are not limited to:
              </p>
              <ul>
                <li>Strategic Corporate Finance</li>
                <li>Financial Reporting and Accounting Services</li>
                <li>Management Reporting and Performance Analytics</li>
                <li>Transaction and Valuation Advisory</li>
                <li>Taxation and Regulatory Compliance</li>
                <li>Corporate Governance and Controls</li>
                <li>Business and Strategic Advisory</li>
                <li>Technology and Digital Finance Governance</li>
                <li>Fractional CFO Services</li>
              </ul>
            </div>

            <div className="terms-section animate-on-scroll animate-fadeInUp">
              <h2>3. User Eligibility</h2>
              <p>
                Our services are intended for businesses and individuals who are at least 18 years old. By using our services, you represent and warrant that you have the legal capacity to enter into binding agreements.
              </p>
            </div>

            <div className="terms-section animate-on-scroll animate-fadeInUp">
              <h2>4. User Responsibilities</h2>
              <p>When using our services, you agree to:</p>
              <ul>
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain the confidentiality of any account credentials</li>
                <li>Notify us immediately of any unauthorized access or security breaches</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not interfere with or disrupt our services or servers</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </div>

            <div className="terms-section animate-on-scroll animate-fadeInUp">
              <h2>5. Professional Services Engagement</h2>
              <h3>5.1 Engagement Letters</h3>
              <p>
                Specific professional services will be governed by separate engagement letters that outline the scope of work, fees, deliverables, and timelines. These engagement letters will supplement and form part of these Terms.
              </p>
              
              <h3>5.2 Professional Standards</h3>
              <p>
                Our services are provided in accordance with applicable professional standards, including but not limited to GAAP, IFRS, and relevant regulatory requirements in Nepal and internationally.
              </p>

              <h3>5.3 Client Cooperation</h3>
              <p>
                The quality and timeliness of our services depend on your cooperation, including providing timely access to information, personnel, and documentation as reasonably requested.
              </p>
            </div>

            <div className="terms-section animate-on-scroll animate-fadeInUp">
              <h2>6. Fees and Payment</h2>
              <ul>
                <li>Service fees will be specified in individual engagement letters</li>
                <li>Payment terms are typically net 30 days unless otherwise agreed</li>
                <li>Late payments may be subject to interest charges</li>
                <li>All fees are exclusive of applicable taxes unless stated otherwise</li>
                <li>We reserve the right to suspend services for non-payment</li>
              </ul>
            </div>

            <div className="terms-section animate-on-scroll animate-fadeInUp">
              <h2>7. Intellectual Property</h2>
              <h3>7.1 Our Content</h3>
              <p>
                All content on our website, including text, graphics, logos, images, and software, is the property of Phorus or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>

              <h3>7.2 Work Product</h3>
              <p>
                Deliverables created specifically for you under an engagement will be your property upon full payment. However, we retain the right to use general knowledge, methodologies, and non-confidential information gained during the engagement.
              </p>
            </div>

            <div className="terms-section animate-on-scroll animate-fadeInUp">
              <h2>8. Confidentiality</h2>
              <p>
                We maintain strict confidentiality regarding all client information in accordance with professional standards and applicable laws. We will not disclose your confidential information except:
              </p>
              <ul>
                <li>With your written consent</li>
                <li>As required by law or court order</li>
                <li>To our employees and contractors on a need-to-know basis</li>
                <li>To comply with professional standards or regulatory requirements</li>
              </ul>
            </div>

            <div className="terms-section animate-on-scroll animate-fadeInUp">
              <h2>9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Phorus shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, arising from or relating to our services or these Terms.
              </p>
              <p>
                Our total liability for any claims arising from our services shall not exceed the fees paid by you for the specific services giving rise to the claim, or NPR 100,000, whichever is greater.
              </p>
            </div>

            <div className="terms-section animate-on-scroll animate-fadeInUp">
              <h2>10. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Phorus, its officers, directors, employees, and agents from any claims, damages, liabilities, costs, and expenses (including reasonable attorneys' fees) arising from:
              </p>
              <ul>
                <li>Your use of our services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of another party</li>
                <li>Your provision of inaccurate or misleading information</li>
              </ul>
            </div>

            <div className="terms-section animate-on-scroll animate-fadeInUp">
              <h2>11. Disclaimer of Warranties</h2>
              <p>
                Our services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </p>
              <p>
                We do not warrant that our services will be uninterrupted, error-free, or completely secure. We do not guarantee specific results from our advisory services.
              </p>
            </div>

            <div className="terms-section animate-on-scroll animate-fadeInUp">
              <h2>12. Termination</h2>
              <h3>12.1 By You</h3>
              <p>
                You may terminate your use of our services at any time by providing written notice. You remain responsible for fees for services rendered prior to termination.
              </p>

              <h3>12.2 By Us</h3>
              <p>
                We may terminate or suspend your access to our services immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
              </p>
            </div>

            <div className="terms-section animate-on-scroll animate-fadeInUp">
              <h2>13. Dispute Resolution</h2>
              <h3>13.1 Governing Law</h3>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of Nepal, without regard to its conflict of law provisions.
              </p>

              <h3>13.2 Dispute Resolution Process</h3>
              <p>
                In the event of any dispute arising from these Terms or our services, the parties agree to first attempt resolution through good-faith negotiations. If negotiations fail, disputes shall be resolved through arbitration in Kathmandu, Nepal, in accordance with the Arbitration Act of Nepal.
              </p>
            </div>

            <div className="terms-section animate-on-scroll animate-fadeInUp">
              <h2>14. Modifications to Services</h2>
              <p>
                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of services.
              </p>
            </div>

            <div className="terms-section animate-on-scroll animate-fadeInUp">
              <h2>15. Third-Party Links and Services</h2>
              <p>
                Our website may contain links to third-party websites or services. We are not responsible for the content, accuracy, or practices of these third parties. Your use of third-party services is at your own risk.
              </p>
            </div>

            <div className="terms-section animate-on-scroll animate-fadeInUp">
              <h2>16. Force Majeure</h2>
              <p>
                We shall not be liable for any failure or delay in performing our obligations due to circumstances beyond our reasonable control, including natural disasters, acts of war, terrorism, labor disputes, or governmental actions.
              </p>
            </div>

            <div className="terms-section animate-on-scroll animate-fadeInUp">
              <h2>17. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
              </p>
            </div>

            <div className="terms-section animate-on-scroll animate-fadeInUp">
              <h2>18. Entire Agreement</h2>
              <p>
                These Terms, together with any engagement letters and our Privacy Policy, constitute the entire agreement between you and Phorus regarding our services and supersede all prior agreements and understandings.
              </p>
            </div>

            <div className="terms-section animate-on-scroll animate-fadeInUp">
              <h2>19. Contact Information</h2>
              <p>If you have any questions about these Terms of Service, please contact us:</p>
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

export default Terms;
