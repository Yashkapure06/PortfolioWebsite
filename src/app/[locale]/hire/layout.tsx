import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { defaultLocale, type Locale, locales } from '@/i18n/config';
import { getLocalizedAlternates, getLocalizedCanonical } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';

interface HireLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: HireLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = locales.includes(locale as Locale)
    ? (locale as Locale)
    : defaultLocale;

  const t = await getTranslations({ locale: safeLocale, namespace: 'hire' });
  const title = t('metaTitle');
  const description = t('metaDescription');
  const canonical = getLocalizedCanonical(safeLocale, '/hire');

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: getLocalizedAlternates('/hire'),
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
          alt: 'Hire Yash Kapure - React & Next.js Developer',
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

export default function HireLayout({ children }: HireLayoutProps) {
  return children;
}
