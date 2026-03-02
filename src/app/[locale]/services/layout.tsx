import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { defaultLocale, type Locale, locales } from '@/i18n/config';
import { getLocalizedAlternates, getLocalizedCanonical } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';

interface ServicesLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ServicesLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = locales.includes(locale as Locale)
    ? (locale as Locale)
    : defaultLocale;

  const t = await getTranslations({
    locale: safeLocale,
    namespace: 'servicesPage',
  });
  const title = t('metaTitle');
  const description = t('metaDescription');
  const canonical = getLocalizedCanonical(safeLocale, '/services');

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: getLocalizedAlternates('/services'),
    },
    openGraph: {
      type: 'website',
      url: canonical,
      title,
      description,
      siteName: 'Yash Kapure Portfolio',
      images: [
        {
          url: `${siteConfig.url}/images/metaimg.png`,
          width: 1200,
          height: 630,
          alt: 'Yash Kapure Services - React & Next.js Development',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@KapureYash',
    },
  };
}

export default function ServicesLayout({ children }: ServicesLayoutProps) {
  return children;
}
