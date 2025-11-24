import { Link } from 'react-router-dom';
import './Articles.css';
import SEO from '../components/SEO';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Articles = () => {
  useScrollAnimation();

  const articles = [
    {
      id: 1,
      title: "Understanding Financial Planning & Analysis (FP&A) in Modern Businesses",
      excerpt: "Explore how FP&A transforms raw financial data into strategic insights that drive business growth and informed decision-making.",
      category: "Financial Planning",
      date: "November 20, 2025",
      readTime: "8 min read",
      image: "📊"
    },
    {
      id: 2,
      title: "The Role of a Fractional CFO in Scaling Startups",
      excerpt: "Learn how fractional CFO services provide strategic financial leadership without the full-time cost, perfect for growth-stage companies.",
      category: "Leadership",
      date: "November 18, 2025",
      readTime: "6 min read",
      image: "👔"
    },
    {
      id: 3,
      title: "Transaction Advisory: Navigating M&A Due Diligence Successfully",
      excerpt: "A comprehensive guide to the due diligence process in mergers and acquisitions, covering financial, operational, and legal aspects.",
      category: "M&A Advisory",
      date: "November 15, 2025",
      readTime: "10 min read",
      image: "🤝"
    },
    {
      id: 4,
      title: "Business Valuation Methods: Which Approach is Right for Your Company?",
      excerpt: "Compare DCF, market multiples, and asset-based valuation approaches to determine the best method for your business context.",
      category: "Valuation",
      date: "November 12, 2025",
      readTime: "7 min read",
      image: "💰"
    },
    {
      id: 5,
      title: "Building Investor-Grade Financial Reporting Systems",
      excerpt: "Discover the key components of financial reporting that meet institutional investor expectations and regulatory requirements.",
      category: "Financial Reporting",
      date: "November 10, 2025",
      readTime: "9 min read",
      image: "📈"
    },
    {
      id: 6,
      title: "Corporate Governance Best Practices for Growing Companies",
      excerpt: "Essential governance frameworks and internal controls that protect stakeholder interests and ensure operational integrity.",
      category: "Governance",
      date: "November 8, 2025",
      readTime: "8 min read",
      image: "🛡️"
    },
    {
      id: 7,
      title: "Tax Planning Strategies for Multi-Jurisdiction Businesses",
      excerpt: "Navigate complex international tax regulations with strategic planning for transfer pricing, withholding taxes, and compliance.",
      category: "Taxation",
      date: "November 5, 2025",
      readTime: "11 min read",
      image: "📋"
    },
    {
      id: 8,
      title: "Digital Transformation in Finance: Tools and Technologies",
      excerpt: "How modern financial systems, automation, and analytics tools are revolutionizing finance operations and decision-making.",
      category: "Technology",
      date: "November 3, 2025",
      readTime: "7 min read",
      image: "💻"
    },
    {
      id: 9,
      title: "KPI Dashboards: Turning Data into Actionable Business Insights",
      excerpt: "Design effective KPI dashboards that provide real-time visibility into business performance and drive strategic decisions.",
      category: "Analytics",
      date: "November 1, 2025",
      readTime: "6 min read",
      image: "📉"
    }
  ];

  return (
    <>
      <SEO 
        title="Articles & Insights - Phorus Advisory"
        description="Expert insights on financial advisory, transaction advisory, FP&A, valuation, corporate governance, and strategic finance from Phorus Advisory."
        keywords="financial advisory articles, FP&A insights, M&A guidance, valuation methods, corporate governance, CFO services, business strategy"
        url="https://phorusadvisory.com/articles"
      />
      <div className="articles-page">
        <section className="articles-hero">
          <div className="articles-hero-content">
            <h1 className="animate-fadeInUp">Articles & Insights</h1>
            <p className="articles-subtitle animate-fadeInUp animate-delay-2">
              Expert perspectives on financial advisory, strategic finance, and business growth
            </p>
          </div>
        </section>

        <section className="articles-content">
          <div className="articles-container">
            <div className="articles-grid">
              {articles.map((article, index) => (
                <article 
                  key={article.id} 
                  className={`article-card animate-on-scroll animate-fadeInUp animate-delay-${(index % 3) + 1}`}
                >
                  <div className="article-icon">{article.image}</div>
                  <div className="article-meta">
                    <span className="article-category">{article.category}</span>
                    <span className="article-date">{article.date}</span>
                  </div>
                  <h2 className="article-title">{article.title}</h2>
                  <p className="article-excerpt">{article.excerpt}</p>
                  <div className="article-footer">
                    <span className="read-time">{article.readTime}</span>
                    <Link to={`/articles/${article.id}`} className="read-more">
                      Read Article →
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="articles-cta animate-on-scroll animate-fadeInUp">
              <h2>Need Expert Financial Advice?</h2>
              <p>Our team is ready to help you navigate complex financial challenges.</p>
              <Link to="/contact" className="cta-button">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Articles;
