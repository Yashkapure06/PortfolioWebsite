import { siteConfig } from './site-config';

/**
 * GEO (Generative Engine Optimization) Utilities
 *
 * Optimizes content for citation by generative AI (ChatGPT, Perplexity, Claude,
 * Google AI Overviews). Focus: retrieval-ready, citation-worthy, provenance-verifiable
 * content rather than traditional search rankings.
 *
 * @see https://schema.org/WebPage
 * @see https://schema.org/ProfilePage
 */

/** Default dates for provenance; update when content is meaningfully updated */
const GEO_DATES = {
  datePublished: '2024-01-01',
  dateModified: new Date().toISOString().slice(0, 10), // today in YYYY-MM-DD
} as const;

/**
 * WebPage schema with GEO-focused provenance (author, dates).
 * Helps generative engines cite the site with clear authorship and freshness.
 */
export function generateGeoWebPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${siteConfig.url}/#webpage`,
    url: siteConfig.url,
    name: siteConfig.title,
    description: siteConfig.description,
    datePublished: GEO_DATES.datePublished,
    dateModified: GEO_DATES.dateModified,
    inLanguage: 'en',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
      name: 'Yash Kapure Portfolio',
      url: siteConfig.url,
    },
    about: {
      '@type': 'Person',
      name: 'Yash Kapure',
      jobTitle: 'Frontend Engineer & Full Stack Developer',
      url: siteConfig.url,
    },
    author: {
      '@type': 'Person',
      name: 'Yash Kapure',
      url: 'https://github.com/Yashkapure06',
      sameAs: [
        'https://github.com/Yashkapure06',
        'https://linkedin.com/in/yash-kapure',
        'https://twitter.com/KapureYash',
      ],
    },
    publisher: {
      '@type': 'Person',
      name: 'Yash Kapure',
      url: siteConfig.url,
    },
    mainEntity: {
      '@type': 'Person',
      name: 'Yash Kapure',
      jobTitle: 'Frontend Engineer & Full Stack Developer',
      description: siteConfig.description,
      url: siteConfig.url,
    },
  };
}

/**
 * ProfilePage schema for the portfolio homepage.
 * Signals to AI engines that this is an authoritative profile page.
 */
export function generateGeoProfilePageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${siteConfig.url}/#profilepage`,
    url: siteConfig.url,
    name: siteConfig.title,
    description: siteConfig.description,
    datePublished: GEO_DATES.datePublished,
    dateModified: GEO_DATES.dateModified,
    mainEntity: {
      '@type': 'Person',
      name: 'Yash Kapure',
      alternateName: 'Yash Vinod Kapure',
      jobTitle: 'Frontend Engineer & Full Stack Developer',
      description: siteConfig.description,
      url: siteConfig.url,
      image: `${siteConfig.url}/images/profile.jpg`,
      email: 'yashkapure06@gmail.com',
      sameAs: [
        'https://github.com/Yashkapure06',
        'https://linkedin.com/in/yash-kapure',
        'https://twitter.com/KapureYash',
        'https://www.instagram.com/_yashkapure_',
      ],
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'GB',
        addressRegion: 'Europe',
        addressLocality: 'United Kingdom',
      },
    },
    author: {
      '@type': 'Person',
      name: 'Yash Kapure',
      url: 'https://github.com/Yashkapure06',
    },
  };
}

/**
 * All GEO structured data for the root layout.
 * Use alongside AEO schemas for full AI visibility.
 */
export function generateGeoStructuredData() {
  return [
    generateGeoWebPageSchema(),
    generateGeoProfilePageSchema(),
  ];
}

/**
 * Content guidelines for GEO (citation-worthiness).
 * Use when writing or editing copy: direct answers, fact density, clear structure.
 */
export const GEO_CONTENT_GUIDELINES = {
  /** Place the primary answer in the first 40–60 words (first paragraph). */
  firstParagraphWordCount: { min: 40, max: 60 },
  /** Aim for a statistic or verifiable fact every N words. */
  factDensityWords: 150,
  /** Prefer H2 → H3 → bullets for extractable structure. */
  headingHierarchy: true,
} as const;
