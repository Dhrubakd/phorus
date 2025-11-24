import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'Phorus Advisory - Transaction Advisory & Financial Consulting Services',
  description = 'Leading financial advisory firm in Nepal offering strategic corporate finance, transaction advisory, valuation services, FP&A, and CFO services for growth-stage companies.',
  keywords = 'financial advisory Nepal, transaction advisory, valuation services, CFO services, FP&A, corporate finance, business consulting Kathmandu, M&A advisory, financial reporting',
  author = 'Phorus Advisory',
  ogImage = '/phorusimg.jpg',
  url = 'https://phorusadvisory.com'
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Phorus Advisory" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#667eea" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
