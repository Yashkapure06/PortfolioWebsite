import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { defaultLocale, type Locale, locales } from '@/i18n/config';
import { getLocalizedAlternates, getLocalizedCanonical } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';

interface ProjectsLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ProjectsLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = locales.includes(locale as Locale)
    ? (locale as Locale)
    : defaultLocale;

  const t = await getTranslations({ locale: safeLocale, namespace: 'projects' });
  const title = t('heading');
  const description = `${t('content')} 80,000+ portfolio visits in the last 12 months.`;
  const canonical = getLocalizedCanonical(safeLocale, '/projects');

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: getLocalizedAlternates('/projects'),
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
          alt: 'Yash Kapure projects portfolio',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${siteConfig.url}/images/metaimg.png`],
      creator: '@KapureYash',
    },
  };
}

export default function ProjectsLayout({ children }: ProjectsLayoutProps) {
  return children;
}
