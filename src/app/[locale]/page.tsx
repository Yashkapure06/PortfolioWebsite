import Script from 'next/script';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Experience } from '@/components/experience';
import { FAQ } from '@/components/faq';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Intro } from '@/components/intro';
import { LanguageSwitcher } from '@/components/language-switcher';
import { Projects } from '@/components/projects';
import { SectionDivider } from '@/components/section-divider';
import { Services } from '@/components/services';
import { Testimonials } from '@/components/testimonials';
import { ThemeToggle } from '@/components/theme-toggle';
import { defaultLocale, type Locale, locales } from '@/i18n/config';
import {
  generateQAPageStructuredData,
  generateServicesQAPageStructuredData,
} from '@/lib/aeo';
import { getLocalizedAlternates, getLocalizedCanonical } from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = locales.includes(locale as Locale)
    ? (locale as Locale)
    : defaultLocale;

  const tIntro = await getTranslations({ locale: safeLocale, namespace: 'intro' });
  const title = `${tIntro('name')} - ${tIntro('title')}`;
  const description = `${tIntro('description')} Hire for US, UK, and EU.`;
  const canonical = getLocalizedCanonical(safeLocale, '/');

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: getLocalizedAlternates('/'),
    },
    openGraph: {
      type: 'website',
      url: canonical,
      siteName: 'Yash Kapure Portfolio',
      title,
      description,
      images: [
        {
          url: `${siteConfig.url}/images/metaimg.png`,
          width: 1200,
          height: 630,
          alt: 'Yash Kapure - Hire Frontend Developer',
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

const HomePage = async () => {
  // AEO: QAPage schemas are only included on the homepage.
  const qaPageStructuredData = generateQAPageStructuredData();
  const servicesQaPageStructuredData = generateServicesQAPageStructuredData();

  return (
    <>
      {/* AEO: QAPage structured data for AI-powered question answering */}
      <Script
        id="qa-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(qaPageStructuredData),
        }}
      />
      <Script
        id="qa-services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesQaPageStructuredData),
        }}
      />
      <main id="main-content" className="container flex flex-col items-center">
        <Header />
        <Intro />
        <SectionDivider />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </main>
      <div className="bg-background/80 border-border/50 fixed right-3 top-3 z-30 flex items-center gap-2 rounded-lg border p-1 backdrop-blur-sm sm:right-6 sm:top-6 sm:border-0 sm:p-0">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </>
  );
};

export default HomePage;
