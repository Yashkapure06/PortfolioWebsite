import { PropsWithChildren } from 'react';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { ActiveSectionProvider } from '@/components/active-section-provider';
import { Chatbot } from '@/components/chatbot';
import { Header } from '@/components/header';
import { LocaleLangUpdater } from '@/components/locale-lang-updater';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/toaster';
import { type Locale, locales } from '@/i18n/config';

interface LocaleLayoutProps extends PropsWithChildren {
  params: Promise<{ locale: string }>;
}

const LocaleLayout = async ({ children, params }: LocaleLayoutProps) => {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <LocaleLangUpdater />
      <ThemeProvider attribute="class">
        <ActiveSectionProvider>
          <div className="fixed left-0 right-0 top-0 z-20 flex justify-center px-4 pt-5 sm:px-6 lg:pt-10">
            <Header />
          </div>
          <div className="pt-24">
            {children}
          </div>
          <Toaster position="bottom-left" />
          <Chatbot />
        </ActiveSectionProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
};

export default LocaleLayout;
