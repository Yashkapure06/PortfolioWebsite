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
  keywords: siteConfig.keywords.join(', '),
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
    images: [
      {
        url: `${siteConfig.url}/images/metaimg.png`,
        width: 1200,
        height: 630,
        alt: 'Yash Kapure - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    creator: '@KapureYash',
    images: [`${siteConfig.url}/images/metaimg.png`],
  },
  authors: [{ name: 'Yash Kapure', url: 'https://github.com/Yashkapure06' }],
  creator: 'Yash Kapure',
  publisher: 'Yash Kapure',
  alternates: {
    canonical: siteConfig.url,
  },
  other: {
    author: 'Yash Kapure',
    email: 'yashkapure06@gmail.com',
    copyright: 'Yash Kapure 2023',
  },
};

const RootLayout = ({ children }: PropsWithChildren) => {
  // Structured Data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Yash Kapure',
    alternateName: 'Yash Vinod Kapure',
    jobTitle: 'Frontend Engineer & Full Stack Developer',
    description:
      'Hi there! My name is Yash and I am a programmer with a passion for learning and exploring new technologies. With a strong background in full-stack development, I have a well-rounded skill set and am always looking to expand my knowledge and take on new challenges. As a dedicated and driven individual, I am constantly seeking out opportunities to grow and improve as a programmer.',
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
      'React-Native Development',
      'Freelance Development',
      'Online Interview Assessment System',
      "Dr. Manisha's Yoga Institute",
      'Anandlok Ayurveda',
    ],
    offers: {
      '@type': 'Service',
      name: 'Web Development Services',
      description:
        'Professional web development services including React.js, Next.js, Node.js, React-Native, and full-stack development. Best Freelancer Near me, Affordable Freelancer Near me, Hourly based paid freelancer near me.',
      provider: {
        '@type': 'Person',
        name: 'Yash Kapure',
      },
      areaServed: 'United Kingdom',
      serviceType: 'Web Development',
    },
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Full Stack Web Developer',
      description:
        'Frontend Engineer & Full Stack Developer specializing in React.js, Next.js, Node.js, and MERN/MEVN stack',
      occupationLocation: {
        '@type': 'Country',
        name: 'United Kingdom',
      },
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PDKQ7JZ');
            `,
          }}
        />

        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5126308192729168"
          crossOrigin="anonymous"
        />

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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PDKQ7JZ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

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
