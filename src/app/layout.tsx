import '@/styles/globals.css';

import { ReactNode } from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { env } from '@/env.mjs';
import { defaultLocale } from '@/i18n/config';
import { generateAEOStructuredData } from '@/lib/aeo';
import { generateGeoStructuredData } from '@/lib/geo';
import { fonts } from '@/lib/fonts';
import { getLocalizedAlternates, getLocalizedCanonical } from '@/lib/seo';
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
  alternates: {
    canonical: getLocalizedCanonical(defaultLocale, '/'),
    languages: getLocalizedAlternates('/'),
  },
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
};

// Root layout with required html/body tags
// The [locale] layout will handle locale-specific content
export default function RootLayout({ children }: { children: ReactNode }) {
  // AEO (Answer Engine Optimization) Structured Data
  const aeoStructuredData = generateAEOStructuredData();
  // GEO (Generative Engine Optimization) – provenance & citation signals for AI (ChatGPT, Perplexity, Claude)
  const geoStructuredData = generateGeoStructuredData();

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
              })(window,document,'script','dataLayer','${env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}');
            `,
          }}
        />
        {/* Google AdSense */}
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID}`}
          crossOrigin="anonymous"
        />
        {/* AEO Structured Data - Optimized for AI search engines and voice assistants */}
        {aeoStructuredData.map((schema, index) => (
          <script
            key={`aeo-schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
        ))}
        {/* GEO Structured Data - Provenance (author, dates) for generative engine citations */}
        {geoStructuredData.map((schema, index) => (
          <script
            key={`geo-schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
        ))}
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
          className="focus:bg-primary focus:text-primary-foreground sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`}
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
              })(window, document, "clarity", "script", "${env.NEXT_PUBLIC_MICROSOFT_CLARITY_ID}");
            `,
          }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
