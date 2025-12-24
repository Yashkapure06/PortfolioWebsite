'use client';

import { useEffect } from 'react';
import { useLocale } from 'next-intl';

// Component to update html lang attribute based on locale
export const LocaleLangUpdater = () => {
  const locale = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
};

