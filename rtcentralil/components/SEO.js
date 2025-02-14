// components/SEO.js
import Head from 'next/head';

const DEFAULT_SITE_NAME = 'RoboThink Central Illinois';
const DEFAULT_BASE_URL = 'https://www.robothinkcil.com/';
const DEFAULT_DESCRIPTION =
  'Inspiring young minds through Robotics, Engineering, and Coding. RoboThink is a leading STEM, coding, robotics, and engineering program nurturing geniuses across 23 countries to thousands of students every day.';
const DEFAULT_OG_IMAGE = `${DEFAULT_BASE_URL}images/logo.png`; // Using your logo

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,         // e.g., "https://www.robothinkcil.com/current-page"
  siteName = DEFAULT_SITE_NAME,
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  // Exclude twitter handle since you're not using Twitter actively
  twitterCard = 'summary_large_image',
  jsonLd,            // Optional JSON object for structured data
}) {
  const pageCanonical = canonical || DEFAULT_BASE_URL;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Canonical URL */}
      <link rel="canonical" href={pageCanonical} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} key="og:title" />
      <meta property="og:description" content={description} key="og:description" />
      <meta property="og:url" content={pageCanonical} key="og:url" />
      <meta property="og:type" content={ogType} key="og:type" />
      <meta property="og:site_name" content={siteName} key="og:site_name" />
      {ogImage && <meta property="og:image" content={ogImage} key="og:image" />}

      {/* Twitter Card Meta Tags - Only include if a Twitter handle is provided */}
      {/* Since you don't currently have a Twitter handle, these tags will be omitted */}
      {/* 
      <meta name="twitter:card" content={twitterCard} key="twitter:card" />
      {twitterSite && (
        <meta name="twitter:site" content={twitterSite} key="twitter:site" />
      )}
      <meta name="twitter:title" content={title} key="twitter:title" />
      <meta name="twitter:description" content={description} key="twitter:description" />
      {ogImage && (
        <meta name="twitter:image" content={ogImage} key="twitter:image" />
      )}
      */}

      {/* Structured Data (JSON-LD) */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          key="json-ld"
        />
      )}

      {/* Favicon */}
      <link rel="shortcut icon" href="/favicon.ico" key="favicon" />
    </Head>
  );
}