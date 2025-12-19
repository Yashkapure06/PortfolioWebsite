import { PropsWithChildren } from 'react';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { ActiveSectionProvider } from '@/components/active-section-provider';
import { Chatbot } from '@/components/chatbot';
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
          {children}
          <Toaster position="bottom-left" />
          <Chatbot />
        </ActiveSectionProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
};

export default LocaleLayout;
