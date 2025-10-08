import '@/styles/globals.css';

import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';

import { ActiveSectionProvider } from '@/components/active-section-provider';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/toaster';
import { fonts } from '@/lib/fonts';
import { siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  verification: {
    google: siteConfig.googleSiteVerificationId,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: 'Yash Kapure Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    creator: '@KapureYash',
  },
  authors: [{ name: 'Yash Kapure', url: 'https://github.com/Yashkapure06' }],
  creator: 'Yash Kapure',
  publisher: 'Yash Kapure',
  alternates: {
    canonical: siteConfig.url,
  },
};

const RootLayout = ({ children }: PropsWithChildren) => {
  // Structured Data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Yash Kapure',
    jobTitle: 'Frontend Engineer & Full Stack Developer',
    description:
      'Full Stack Developer with 3.5+ years of experience in React.js, Next.js, Node.js, and MERN/MEVN stack. Specializing in creating interactive and beautiful user interfaces with modern web technologies.',
    url: siteConfig.url,
    image: `${siteConfig.url}/images/profile.jpg`,
    sameAs: [
      'https://github.com/Yashkapure06',
      'https://linkedin.com/in/yash-kapure',
      'https://twitter.com/KapureYash',
      'https://www.instagram.com/_yashkapure_',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'United Kingdom',
    },
    alumniOf: [
      {
        '@type': 'Organization',
        name: 'Impact Academies',
      },
    ],
    worksFor: [
      {
        '@type': 'Organization',
        name: 'Impact Academies',
        jobTitle: 'IT Tutor',
      },
      {
        '@type': 'Organization',
        name: 'Dragon Sino Group',
        jobTitle: 'Full Stack Developer',
      },
    ],
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
    ],
    offers: {
      '@type': 'Service',
      name: 'Web Development Services',
      description:
        'Professional web development services including React.js, Next.js, Node.js, and full-stack development',
      provider: {
        '@type': 'Person',
        name: 'Yash Kapure',
      },
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {/* Preload critical resources */}
        <link rel="preload" href="/images/profile.jpg" as="image" />
        <link
          rel="preload"
          href="/_next/static/css/app/layout.css"
          as="style"
        />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//linkedin.com" />
      </head>
      <body className={cn('min-h-screen font-sans', fonts)}>
        {/* Microsoft Clarity */}
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "oi5p8b8wvn");
            `,
          }}
        />
        <ThemeProvider attribute="class">
          <ActiveSectionProvider>
            {children}
            <Toaster position="bottom-left" />
          </ActiveSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
