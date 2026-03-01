import { siteConfig } from './site-config';

/**
 * AEO (Answer Engine Optimization) Utilities
 *
 * This file contains structured data schemas optimized for AI search engines,
 * voice assistants, and featured snippets. AEO complements SEO by ensuring
 * content provides direct, authoritative answers to user queries.
 */

/**
 * Generate comprehensive FAQ structured data for Answer Engine Optimization
 * This helps AI assistants and voice search provide direct answers
 */
export function generateFAQStructuredData(
  faqItems: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    about: {
      '@type': 'Thing',
      name: 'Yash Kapure Portfolio',
      url: siteConfig.url,
    },
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

/**
 * Generate QAPage structured data for chat/QA functionality
 * Optimizes content for AI-powered question answering systems
 */
export function generateQAPageStructuredData() {
  const publishedDate = '2024-01-01T00:00:00+00:00';

  return {
    '@context': 'https://schema.org',
    '@type': 'QAPage',
    mainEntity: {
      '@type': 'Question',
      name: 'Who is Yash Kapure and what services does he offer?',
      text: 'Yash Kapure is a frontend engineer; his services and how to hire him for US, UK, and EU projects.',
      answerCount: 1,
      datePublished: publishedDate,
      author: {
        '@type': 'Person',
        name: 'Yash Kapure',
        url: siteConfig.url,
      },
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yash Kapure is a frontend engineer with 4+ years of experience. He builds production UIs and full-stack apps with React, Next.js, and TypeScript. Available for hire for US, UK, and EU clients, freelance and contract at $25-57/hour. He usually responds within 24-48 hours. 7 five-star testimonials.',
        author: {
          '@type': 'Person',
          name: 'Yash Kapure',
          url: siteConfig.url,
        },
        url: siteConfig.url,
        datePublished: publishedDate,
        upvoteCount: 1,
      },
    },
    about: {
      '@type': 'Person',
      name: 'Yash Kapure',
      jobTitle: 'Hire Frontend Developer | React & Next.js',
      url: siteConfig.url,
    },
  };
}

/**
 * Generate HowTo structured data for common development processes
 * Helps AI assistants provide step-by-step guidance
 */
export function generateHowToStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Hire Yash Kapure for React and Next.js Development',
    description:
      'Steps to hire Yash Kapure for remote React, Next.js, and full-stack development.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Review Portfolio',
        text: "Review Yash's portfolio for React, Next.js, and MERN/MEVN projects and case studies.",
        url: `${siteConfig.url}/projects`,
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Check Availability',
        text: 'Yash is currently available for work and based in the United Kingdom. He works remotely and is flexible with working hours.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Contact',
        text: 'Reach out via email at yashkapure06@gmail.com or through the contact form on the website. You can also connect via LinkedIn, GitHub, or Twitter.',
        url: `${siteConfig.url}/#contact`,
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Discuss Project Requirements',
        text: 'Discuss your project scope, timeline, and budget. Yash offers flexible rates ($25-57/hour) and can work on both short-term and long-term projects.',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Get Started',
        text: 'Once requirements are aligned, Yash will begin development using modern web technologies, including SEO, AEO, and GEO when needed, to deliver fast, accessible, and production-ready web applications.',
      },
    ],
    totalTime: 'PT1H',
  };
}

/**
 * Generate Person schema with enhanced answer-focused content
 * Optimized for voice search and AI queries
 */
export function generateEnhancedPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Yash Kapure',
    alternateName: 'Yash Vinod Kapure',
    jobTitle: 'Hire Frontend Developer | React & Next.js',
    description:
      'Yash Kapure is a frontend engineer with 4+ years of experience. React, Next.js, and full-stack. Available for hire for US, UK, and EU, freelance and contract at $25-57/hour.',
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
    // Answer-focused properties for AI queries (aligned with services: frontend, fullstack, database, performance, architecture, productUi, seoAeo)
    knowsAbout: [
      'React.js',
      'Next.js',
      'Node.js',
      'TypeScript',
      'JavaScript',
      'MERN Stack',
      'MEVN Stack',
      'Tailwind CSS',
      'MongoDB',
      'Express.js',
      'Vue.js',
      'Web Development',
      'Frontend Development',
      'Full Stack Development',
      'React-Native Development',
      'Freelance Development',
      'SEO',
      'AEO',
      'GEO',
      'Google Business Profile',
      'Structured Data',
      'JSON-LD',
      'Open Graph',
      'Production Readiness',
      'UI/UX Design',
      'Responsive Design',
    ],
    // Common questions answered directly
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Hourly Rate',
        value: '$25-57/hour',
      },
      {
        '@type': 'PropertyValue',
        name: 'Experience',
        value: '4+ years',
      },
      {
        '@type': 'PropertyValue',
        name: 'Location',
        value: 'United Kingdom (Remote)',
      },
      {
        '@type': 'PropertyValue',
        name: 'Availability',
        value: 'Available for work',
      },
      {
        '@type': 'PropertyValue',
        name: 'Specialization',
        value: 'React, Next.js, full-stack, performance',
      },
      {
        '@type': 'PropertyValue',
        name: 'Portfolio Traction',
        value: '80,000+ portfolio visits in the last 12 months',
      },
    ],
  };
}

/**
 * Generate Service schema with answer-focused descriptions
 * Helps AI assistants provide direct service information
 */
export function generateServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Yash Kapure Web Development Services',
    serviceType: 'Web Development Services',
    url: siteConfig.url,
    provider: {
      '@type': 'Person',
      name: 'Yash Kapure',
      email: 'yashkapure06@gmail.com',
      url: siteConfig.url,
    },
    areaServed: [
      'US', // United States – primary focus for client acquisition
      'GB',
      'IE',
      'DE',
      'FR',
      'ES',
      'IT',
      'NL',
      'BE',
      'AT',
      'CH',
      'SE',
      'NO',
      'DK',
      'PL',
      'PT',
      'EU',
      'Worldwide',
    ],
    offers: {
      '@type': 'Offer',
      price: '25-57',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '25-57',
        priceCurrency: 'USD',
        unitText: 'hour',
      },
      availability: 'https://schema.org/InStock',
      description:
        'React, Next.js, and full-stack development. US, UK, and EU. Remote, flexible hours, USD.',
    },
    description:
      'Hire frontend developer for React and Next.js. Full-stack for US, UK, and EU. $25–57/hour.',
  };
}

/**
 * Service names and short descriptions for ItemList and AI/Google answers.
 * Kept in sync with portfolio services (en) for rich results and "what services does Yash Kapure offer".
 */
const SERVICES_LIST = [
  { name: 'Frontend Development', description: 'Production UIs in React, Next.js, or Vue- third-party and payment integrations. Built for real traffic.' },
  { name: 'Full Stack Development', description: 'End-to-end apps: MERN, React+Node, or MEVN. Auth, role-based access, real-time.' },
  { name: 'Database & Backend', description: 'PostgreSQL, MongoDB, Supabase, Prisma. Schemas, queries, real-time when you need it.' },
  { name: 'Performance & Frontend Optimization', description: 'Core Web Vitals, Lighthouse, bundle size, runtime. Predictable load times at scale.' },
  { name: 'Frontend Architecture & System Design', description: 'Clear boundaries, state strategy, API contracts. New features land cleanly.' },
  { name: 'Product-Focused UI Engineering', description: 'Figma to production. Accessible components, design-system alignment, WCAG.' },
  { name: 'SEO, AEO, GEO & Production Readiness', description: 'Metadata, structured data, JSON-LD, Open Graph, sitemaps, analytics, monitoring.' },
  { name: 'Google Business Profile Setup', description: 'Set up and optimize your Google Business Profile for local search (NAP, categories, posts, reviews).' },
] as const;

/**
 * ItemList schema: explicit list of services for Google list results and AI answers.
 * Enables "Services provided by Yash Kapure" to surface as a list in search and AI.
 */
export function generateServicesItemListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Services provided by Yash Kapure',
    description: 'React, Next.js, and full-stack. Hire for US, UK, and EU.',
    numberOfItems: SERVICES_LIST.length,
    itemListElement: SERVICES_LIST.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: service.name,
      description: service.description,
    })),
    author: {
      '@type': 'Person',
      name: 'Yash Kapure',
      url: siteConfig.url,
    },
  };
}

/**
 * QAPage schema specifically for "What are the services provided by Yash Kapure?"
 * Gives Google and AI a direct, list-style answer for featured snippets and AI overviews.
 */
export function generateServicesQAPageStructuredData() {
  const publishedDate = '2024-01-01T00:00:00+00:00';

  return {
    '@context': 'https://schema.org',
    '@type': 'QAPage',
    mainEntity: {
      '@type': 'Question',
      name: 'What are the services provided by Yash Kapure?',
      text: 'List of development services Yash Kapure offers: React, Next.js, full-stack, and related work.',
      answerCount: 1,
      datePublished: publishedDate,
      author: {
        '@type': 'Person',
        name: 'Yash Kapure',
        url: siteConfig.url,
      },
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Services: ${SERVICES_LIST.map((s) => s.name).join('; ')}. Hire for US, UK, EU. Contact: ${siteConfig.url}/#contact or yashkapure06@gmail.com.`,
        author: {
          '@type': 'Person',
          name: 'Yash Kapure',
          url: siteConfig.url,
        },
        url: `${siteConfig.url}/#services`,
        datePublished: publishedDate,
        upvoteCount: 1,
      },
    },
    about: { '@type': 'Person', name: 'Yash Kapure', url: siteConfig.url },
  };
}

/**
 * Generate comprehensive AEO structured data bundle
 * Combines all schemas for maximum AI search engine visibility
 */
export function generateAEOStructuredData(
  faqItems?: Array<{ question: string; answer: string }>
) {
  // Use a flexible type to accommodate different schema shapes
  const schemas: Array<Record<string, any>> = [
    generateEnhancedPersonSchema(),
    generateServiceSchema(),
    generateServicesItemListSchema(),
    generateHowToStructuredData(),
  ];

  // Add FAQ schema if items provided
  if (faqItems && faqItems.length > 0) {
    schemas.push(generateFAQStructuredData(faqItems));
  }

  return schemas;
}

/**
 * Common voice search and AI query patterns
 * These help optimize content for natural language queries
 */
export const voiceSearchQueries = [
  'hire frontend developer',
  'react developer for hire',
  'next.js developer for hire',
  'freelance frontend developer',
  'Who is Yash Kapure?',
  'What services does Yash Kapure offer?',
  'Hire React developer US UK EU',
  'How do I hire Yash Kapure?',
  'Is Yash Kapure available for hire?',
  'Yash Kapure hourly rate',
  'freelance React developer UK',
  'hire Next.js developer',
];
