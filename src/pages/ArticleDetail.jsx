import { useParams, Link, Navigate } from 'react-router-dom';
import './ArticleDetail.css';
import SEO from '../components/SEO';
import useScrollAnimation from '../hooks/useScrollAnimation';

const ArticleDetail = () => {
  useScrollAnimation();
  const { id } = useParams();

  const articles = {
    1: {
      title: "Understanding Financial Planning & Analysis (FP&A) in Modern Businesses",
      category: "Financial Planning",
      date: "November 20, 2025",
      readTime: "8 min read",
      image: "📊",
      author: "Phorus Advisory Team",
      content: [
        {
          type: "intro",
          text: "Financial Planning & Analysis (FP&A) has evolved from a traditional budgeting function into a strategic powerhouse that drives business decisions and creates competitive advantages. In today's fast-paced business environment, effective FP&A transforms raw financial data into actionable insights that fuel growth and innovation."
        },
        {
          type: "heading",
          text: "What is FP&A?"
        },
        {
          type: "paragraph",
          text: "FP&A encompasses the processes of budgeting, forecasting, analysis, and reporting that enable organizations to plan for the future and make informed strategic decisions. It serves as the bridge between raw financial data and strategic business intelligence."
        },
        {
          type: "heading",
          text: "Core Components of Modern FP&A"
        },
        {
          type: "list",
          items: [
            "Strategic Planning: Long-term financial roadmaps aligned with business objectives",
            "Budgeting & Forecasting: Rolling forecasts and scenario planning for agility",
            "Variance Analysis: Understanding the 'why' behind the numbers",
            "Performance Management: KPI tracking and dashboard reporting",
            "Business Partnering: Collaborating with operations to drive value"
          ]
        },
        {
          type: "heading",
          text: "The Strategic Value of FP&A"
        },
        {
          type: "paragraph",
          text: "Organizations with mature FP&A functions experience 20-30% faster decision-making cycles and significantly improved profitability. By providing forward-looking insights rather than just historical reporting, FP&A teams enable executives to anticipate challenges and capitalize on opportunities."
        },
        {
          type: "heading",
          text: "Building an Effective FP&A Function"
        },
        {
          type: "paragraph",
          text: "Successful FP&A requires the right combination of technology, processes, and talent. Modern FP&A leverages cloud-based planning platforms, advanced analytics, and automation to deliver real-time insights. The focus has shifted from data collection to strategic analysis and storytelling."
        },
        {
          type: "heading",
          text: "Common FP&A Challenges"
        },
        {
          type: "list",
          items: [
            "Data Quality & Integration: Ensuring accuracy across multiple systems",
            "Manual Processes: Time-consuming consolidation and reporting",
            "Limited Scenario Planning: Inability to model 'what-if' scenarios effectively",
            "Lack of Business Context: Financial data disconnected from operational drivers",
            "Resource Constraints: Small teams handling growing complexity"
          ]
        },
        {
          type: "heading",
          text: "The Future of FP&A"
        },
        {
          type: "paragraph",
          text: "Artificial intelligence, machine learning, and predictive analytics are transforming FP&A from a reactive function to a proactive strategic advisor. Forward-thinking organizations are investing in FP&A capabilities to gain competitive advantages in their markets."
        },
        {
          type: "conclusion",
          text: "Whether you're building an FP&A function from scratch or enhancing an existing team, partnering with experienced advisors can accelerate your journey to financial excellence. Contact Phorus Advisory to learn how we can help transform your financial planning and analysis capabilities."
        }
      ]
    },
    2: {
      title: "The Role of a Fractional CFO in Scaling Startups",
      category: "Leadership",
      date: "November 18, 2025",
      readTime: "6 min read",
      image: "👔",
      author: "Phorus Advisory Team",
      content: [
        {
          type: "intro",
          text: "As startups scale from seed stage to Series A and beyond, the need for senior financial leadership becomes critical. However, hiring a full-time CFO may not be financially viable or strategically necessary. Enter the Fractional CFO—a flexible solution that provides strategic financial expertise without the full-time commitment."
        },
        {
          type: "heading",
          text: "What is a Fractional CFO?"
        },
        {
          type: "paragraph",
          text: "A Fractional CFO is a senior financial executive who works with multiple companies on a part-time or project basis. They bring CFO-level expertise in strategic planning, fundraising, financial operations, and investor relations at a fraction of the cost of a full-time hire."
        },
        {
          type: "heading",
          text: "When Do You Need a Fractional CFO?"
        },
        {
          type: "list",
          items: [
            "Preparing for fundraising (Series A/B/C)",
            "Rapid growth requiring financial infrastructure",
            "Board-level financial reporting and governance",
            "M&A transactions or strategic partnerships",
            "Financial modeling and scenario planning",
            "Building finance team capabilities"
          ]
        },
        {
          type: "heading",
          text: "Key Responsibilities"
        },
        {
          type: "paragraph",
          text: "Fractional CFOs take ownership of strategic financial initiatives while building sustainable processes. They develop investor presentations, create financial models for fundraising, implement reporting systems, and provide strategic guidance to the CEO and board."
        },
        {
          type: "heading",
          text: "Benefits Over Full-Time Hiring"
        },
        {
          type: "list",
          items: [
            "Cost Efficiency: 60-70% cost savings compared to full-time CFO",
            "Immediate Impact: No ramp-up time, immediate value delivery",
            "Flexibility: Scale engagement up or down based on needs",
            "Diverse Experience: Exposure to multiple industries and growth stages",
            "Objective Perspective: Unbiased strategic advice"
          ]
        },
        {
          type: "heading",
          text: "Real-World Impact"
        },
        {
          type: "paragraph",
          text: "Companies working with Fractional CFOs typically see 30-40% improvement in cash runway visibility, faster fundraising cycles, and significantly improved investor confidence. The strategic insights and best practices they bring can accelerate growth while maintaining financial discipline."
        },
        {
          type: "conclusion",
          text: "If your startup is scaling rapidly, preparing for fundraising, or needs strategic financial leadership, a Fractional CFO might be the perfect solution. Phorus Advisory offers Fractional CFO services tailored to growth-stage companies in Nepal and beyond."
        }
      ]
    },
    3: {
      title: "Transaction Advisory: Navigating M&A Due Diligence Successfully",
      category: "M&A Advisory",
      date: "November 15, 2025",
      readTime: "10 min read",
      image: "🤝",
      author: "Phorus Advisory Team",
      content: [
        {
          type: "intro",
          text: "Mergers and acquisitions represent significant strategic decisions that can create tremendous value—or substantial risk. Due diligence is the critical process that separates successful deals from costly mistakes. Understanding how to navigate M&A due diligence effectively can mean the difference between a transformative acquisition and a strategic misstep."
        },
        {
          type: "heading",
          text: "What is M&A Due Diligence?"
        },
        {
          type: "paragraph",
          text: "Due diligence is the comprehensive investigation and analysis conducted by a potential buyer to evaluate a target company before completing a transaction. It encompasses financial, legal, operational, commercial, and strategic assessments to identify risks, validate assumptions, and inform deal terms."
        },
        {
          type: "heading",
          text: "Types of Due Diligence"
        },
        {
          type: "list",
          items: [
            "Financial Due Diligence: Quality of earnings, working capital, debt, off-balance sheet items",
            "Commercial Due Diligence: Market position, customer concentration, growth prospects",
            "Operational Due Diligence: Supply chain, technology systems, organizational structure",
            "Legal Due Diligence: Contracts, litigation, regulatory compliance, intellectual property",
            "Tax Due Diligence: Tax positions, exposures, structuring opportunities"
          ]
        },
        {
          type: "heading",
          text: "The Due Diligence Process"
        },
        {
          type: "paragraph",
          text: "A typical due diligence process spans 4-8 weeks and involves document review, management interviews, site visits, and independent verification. The process should be systematic, thorough, and focused on deal-critical issues. Early identification of red flags allows for renegotiation or deal termination before significant costs are incurred."
        },
        {
          type: "heading",
          text: "Key Focus Areas in Financial Due Diligence"
        },
        {
          type: "list",
          items: [
            "Quality of Earnings: Normalizing EBITDA, identifying non-recurring items",
            "Working Capital Analysis: Trends, adequacy, and transaction adjustments",
            "Revenue Recognition: Compliance with accounting standards and sustainability",
            "Debt and Liabilities: All obligations including contingent liabilities",
            "Financial Projections: Reasonableness of management forecasts"
          ]
        },
        {
          type: "heading",
          text: "Common Due Diligence Red Flags"
        },
        {
          type: "paragraph",
          text: "Warning signs include declining margins, customer concentration, management turnover, pending litigation, aggressive accounting policies, and gaps in documentation. Experienced advisors know how to identify and quantify these risks to inform negotiation strategy."
        },
        {
          type: "heading",
          text: "Post-Deal Integration Planning"
        },
        {
          type: "paragraph",
          text: "Due diligence should inform integration planning. Understanding systems, processes, and cultural differences during due diligence enables smoother post-close integration. The best deals have integration plans developed before closing."
        },
        {
          type: "conclusion",
          text: "Whether you're acquiring a company, preparing for sale, or advising on a transaction, professional due diligence is essential. Phorus Advisory provides comprehensive transaction advisory services including buy-side and sell-side due diligence, valuation, and deal structuring."
        }
      ]
    },
    4: {
      title: "Business Valuation Methods: Which Approach is Right for Your Company?",
      category: "Valuation",
      date: "November 12, 2025",
      readTime: "7 min read",
      image: "💰",
      author: "Phorus Advisory Team",
      content: [
        {
          type: "intro",
          text: "Business valuation is both an art and a science. Whether you're raising capital, selling your business, or planning for succession, understanding valuation methods is crucial. Different approaches yield different results, and choosing the right methodology can significantly impact the outcome."
        },
        {
          type: "heading",
          text: "Three Primary Valuation Approaches"
        },
        {
          type: "paragraph",
          text: "Professional valuations typically employ one or more of three approaches: Income-based (DCF), Market-based (Comparables), and Asset-based methods. The appropriate approach depends on your industry, stage of development, and purpose of valuation."
        },
        {
          type: "heading",
          text: "1. Discounted Cash Flow (DCF) Method"
        },
        {
          type: "paragraph",
          text: "DCF values a business based on projected future cash flows discounted to present value. It's most appropriate for mature businesses with predictable cash flows. The method requires detailed financial projections and determination of an appropriate discount rate (WACC)."
        },
        {
          type: "list",
          items: [
            "Best for: Mature companies with stable cash flows",
            "Advantages: Based on fundamental value drivers, forward-looking",
            "Challenges: Highly sensitive to assumptions, requires detailed forecasts",
            "Key inputs: Revenue growth, margins, CAPEX, working capital, terminal value"
          ]
        },
        {
          type: "heading",
          text: "2. Market Multiples (Comparable Company Analysis)"
        },
        {
          type: "paragraph",
          text: "This approach values a company based on multiples paid for similar businesses. Common multiples include EV/EBITDA, EV/Revenue, and P/E ratios. The method provides market-based validation but requires truly comparable companies."
        },
        {
          type: "list",
          items: [
            "Best for: Companies in established industries with trading comparables",
            "Advantages: Market-based, easy to communicate",
            "Challenges: Finding truly comparable companies, adjusting for differences",
            "Common multiples: EV/EBITDA, EV/Revenue, Price/Earnings"
          ]
        },
        {
          type: "heading",
          text: "3. Asset-Based Valuation"
        },
        {
          type: "paragraph",
          text: "This method values a company based on net asset value—the fair market value of assets minus liabilities. It's most relevant for asset-heavy businesses or liquidation scenarios. Less common for operating companies as it ignores going-concern value."
        },
        {
          type: "heading",
          text: "Industry-Specific Considerations"
        },
        {
          type: "paragraph",
          text: "Different industries have preferred valuation methods. Technology companies often trade on revenue multiples, manufacturing on EBITDA multiples, real estate on net asset value, and professional services on revenue or client-based metrics."
        },
        {
          type: "heading",
          text: "Factors Affecting Valuation"
        },
        {
          type: "list",
          items: [
            "Growth rate and scalability",
            "Profitability and margins",
            "Customer diversification and retention",
            "Competitive position and moat",
            "Management team quality",
            "Market conditions and investor sentiment"
          ]
        },
        {
          type: "conclusion",
          text: "Professional valuations consider multiple methodologies and triangulate to a reasonable range. Whether you need a valuation for fundraising, transaction, or strategic planning, Phorus Advisory provides rigorous, defensible business valuations aligned with industry standards."
        }
      ]
    },
    5: {
      title: "Building Investor-Grade Financial Reporting Systems",
      category: "Financial Reporting",
      date: "November 10, 2025",
      readTime: "9 min read",
      image: "📈",
      author: "Phorus Advisory Team",
      content: [
        {
          type: "intro",
          text: "Investor-grade financial reporting isn't just about compliance—it's about building credibility, enabling faster decision-making, and commanding premium valuations. Companies with institutional-quality reporting systems attract better investors, secure more favorable terms, and execute transactions more efficiently."
        },
        {
          type: "heading",
          text: "What Makes Reporting 'Investor-Grade'?"
        },
        {
          type: "paragraph",
          text: "Investor-grade reporting combines technical accuracy, timely delivery, meaningful analysis, and forward-looking insights. It meets the standards expected by sophisticated investors, lenders, and board members—going beyond statutory requirements to provide strategic clarity."
        },
        {
          type: "heading",
          text: "Core Components"
        },
        {
          type: "list",
          items: [
            "Audited Financial Statements: Clean opinions from reputable firms",
            "Management Reporting Package: Monthly/quarterly KPIs and variance analysis",
            "Board Reporting: Executive summary with strategic insights",
            "Rolling Forecasts: 12-18 month forward-looking projections",
            "Cash Flow Reporting: Detailed sources and uses of cash",
            "Segment Reporting: Performance by product, geography, or business unit"
          ]
        },
        {
          type: "heading",
          text: "Technical Standards and Best Practices"
        },
        {
          type: "paragraph",
          text: "Investor-grade reporting adheres to GAAP or IFRS, maintains strong internal controls, and provides clear revenue recognition policies. Documentation is comprehensive, audit trails are clear, and reconciliations are performed rigorously."
        },
        {
          type: "heading",
          text: "Building the Infrastructure"
        },
        {
          type: "list",
          items: [
            "Chart of Accounts: Structured for meaningful analysis and reporting",
            "Close Process: Documented procedures with defined timelines",
            "Systems Architecture: Integrated ERP and reporting tools",
            "Internal Controls: SOX-compliant controls environment",
            "Documentation: Accounting policies, procedures, and technical memos"
          ]
        },
        {
          type: "heading",
          text: "The Technology Stack"
        },
        {
          type: "paragraph",
          text: "Modern reporting leverages cloud-based ERP systems, consolidation tools, and BI platforms. Automation reduces close cycles from weeks to days while improving accuracy. Real-time dashboards provide continuous visibility into business performance."
        },
        {
          type: "heading",
          text: "Timeline and Resources"
        },
        {
          type: "paragraph",
          text: "Building investor-grade reporting typically requires 6-12 months and investment in systems, processes, and people. However, the payoff is substantial: faster fundraising, better terms, lower cost of capital, and premium exit valuations."
        },
        {
          type: "conclusion",
          text: "Whether you're preparing for Series A, planning an exit, or professionalizing finance operations, investor-grade reporting is essential. Phorus Advisory helps companies build and optimize financial reporting systems that meet institutional standards and drive strategic value."
        }
      ]
    },
    6: {
      title: "Corporate Governance Best Practices for Growing Companies",
      category: "Governance",
      date: "November 8, 2025",
      readTime: "8 min read",
      image: "🛡️",
      author: "Phorus Advisory Team",
      content: [
        {
          type: "intro",
          text: "Strong corporate governance isn't just for public companies—it's essential for any organization seeking to scale sustainably, attract institutional capital, or prepare for exit. Good governance protects stakeholder interests, ensures operational integrity, and creates long-term value."
        },
        {
          type: "heading",
          text: "What is Corporate Governance?"
        },
        {
          type: "paragraph",
          text: "Corporate governance is the system of rules, practices, and processes by which a company is directed and controlled. It encompasses the mechanisms through which companies are held accountable to shareholders and stakeholders, balancing competing interests while pursuing sustainable growth."
        },
        {
          type: "heading",
          text: "Core Pillars of Good Governance"
        },
        {
          type: "list",
          items: [
            "Board Structure: Independent directors, clear roles and responsibilities",
            "Internal Controls: SOX-compliant controls over financial reporting",
            "Risk Management: Enterprise risk framework and oversight",
            "Ethics and Compliance: Code of conduct and whistleblower mechanisms",
            "Transparency: Accurate and timely disclosure to stakeholders",
            "Stakeholder Rights: Protection of minority shareholders and investors"
          ]
        },
        {
          type: "heading",
          text: "Building an Effective Board"
        },
        {
          type: "paragraph",
          text: "Board composition should balance industry expertise, functional skills, and independence. Effective boards have clear charters, regular meetings, committee structures (audit, compensation, governance), and formal evaluation processes. Independent directors bring objectivity and accountability."
        },
        {
          type: "heading",
          text: "Internal Controls Framework"
        },
        {
          type: "paragraph",
          text: "Robust internal controls prevent fraud, ensure accuracy of financial reporting, and promote operational efficiency. Key elements include segregation of duties, authorization controls, reconciliations, physical controls, and IT controls. SOX compliance is increasingly expected even for private companies."
        },
        {
          type: "heading",
          text: "Risk Management"
        },
        {
          type: "list",
          items: [
            "Enterprise Risk Assessment: Identify and prioritize key risks",
            "Risk Appetite Framework: Define acceptable risk levels",
            "Mitigation Strategies: Controls and procedures to manage risks",
            "Monitoring and Reporting: Regular risk reviews with board",
            "Crisis Management: Preparedness for adverse events"
          ]
        },
        {
          type: "heading",
          text: "Governance Maturity Stages"
        },
        {
          type: "paragraph",
          text: "Companies typically evolve through governance stages: founder-led (informal), professional management (structured), institutional governance (board-led), and public company governance (fully compliant). Each stage requires different structures, processes, and capabilities."
        },
        {
          type: "heading",
          text: "Governance and Valuation"
        },
        {
          type: "paragraph",
          text: "Strong governance commands premium valuations. Institutional investors discount valuations by 15-30% for companies with weak governance. Conversely, best-practice governance reduces perceived risk, accelerates due diligence, and attracts quality investors."
        },
        {
          type: "conclusion",
          text: "Whether you're preparing for institutional investment, planning succession, or building for long-term sustainability, strong governance is foundational. Phorus Advisory helps companies design and implement governance frameworks appropriate for their stage and objectives."
        }
      ]
    }
  };

  const article = articles[id];

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  return (
    <>
      <SEO 
        title={`${article.title} - Phorus Advisory`}
        description={article.content[0].text.substring(0, 160)}
        keywords={`${article.category}, financial advisory, business insights, phorus advisory`}
        url={`https://phorusadvisory.com/articles/${id}`}
      />
      <div className="article-detail-page">
        <article className="article-detail">
          <div className="article-header">
            <Link to="/articles" className="back-link">
              ← Back to Articles
            </Link>
            <div className="article-header-content animate-fadeInUp">
              <div className="article-icon-large">{article.image}</div>
              <span className="article-category-badge">{article.category}</span>
              <h1>{article.title}</h1>
              <div className="article-meta-info">
                <span className="author">By {article.author}</span>
                <span className="separator">•</span>
                <span className="date">{article.date}</span>
                <span className="separator">•</span>
                <span className="read-time">{article.readTime}</span>
              </div>
            </div>
          </div>

          <div className="article-body">
            <div className="article-layout">
              <div className="article-content-wrapper">
                {article.content.map((section, index) => {
                  if (section.type === 'intro' || section.type === 'paragraph') {
                    return (
                      <p key={index} className={`article-${section.type} animate-on-scroll animate-fadeInUp`}>
                        {section.text}
                      </p>
                    );
                  }
                  if (section.type === 'heading') {
                    return (
                      <h2 key={index} className="article-heading animate-on-scroll animate-fadeInUp">
                        {section.text}
                      </h2>
                    );
                  }
                  if (section.type === 'list') {
                    return (
                      <ul key={index} className="article-list animate-on-scroll animate-fadeInUp">
                        {section.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    );
                  }
                  if (section.type === 'conclusion') {
                    return (
                      <div key={index} className="article-conclusion animate-on-scroll animate-fadeInUp">
                        <p>{section.text}</p>
                      </div>
                    );
                  }
                  return null;
                })}

                <div className="article-footer-cta">
                  <div className="cta-box animate-on-scroll animate-scaleIn">
                    <h3>Need Expert Advice?</h3>
                    <p>Our team can help you implement these strategies in your business.</p>
                    <Link to="/contact" className="cta-button">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>

              <aside className="article-sidebar">
                <div className="sidebar-sticky">
                  <h3 className="sidebar-title">Related Articles</h3>
                  <div className="related-articles">
                    {Object.entries(articles)
                      .filter(([key]) => key !== id)
                      .slice(0, 5)
                      .map(([key, relatedArticle]) => (
                        <Link 
                          key={key} 
                          to={`/articles/${key}`} 
                          className="related-article-card"
                        >
                          <div className="related-icon">{relatedArticle.image}</div>
                          <div className="related-content">
                            <span className="related-category">{relatedArticle.category}</span>
                            <h4 className="related-title">{relatedArticle.title}</h4>
                            <span className="related-read-time">{relatedArticle.readTime}</span>
                          </div>
                        </Link>
                      ))}
                  </div>
                  <Link to="/articles" className="view-all-link">
                    View All Articles →
                  </Link>
                </div>
              </aside>
            </div>
          </div>

          <div className="article-navigation">
            <Link to="/articles" className="nav-button">
              ← View All Articles
            </Link>
            <Link to="/services" className="nav-button">
              Our Services →
            </Link>
          </div>
        </article>
      </div>
    </>
  );
};

export default ArticleDetail;
