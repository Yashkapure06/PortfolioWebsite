import Script from 'next/script';

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
import { Testimonials } from '@/components/testimonials';
import { ThemeToggle } from '@/components/theme-toggle';
import { generateQAPageStructuredData } from '@/lib/aeo';

const HomePage = async () => {
  // AEO: QAPage schema for chat/QA functionality
  const qaPageStructuredData = generateQAPageStructuredData();

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
      <main id="main-content" className="container flex flex-col items-center">
        <Header />
        <Intro />
        <SectionDivider />
        <About />
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
