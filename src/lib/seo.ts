import { defaultLocale, locales, type Locale } from '@/i18n/config';
import { siteConfig } from '@/lib/site-config';

const normalizePath = (path: string) => {
  if (!path || path === '/') {
    return '';
  }

  return path.startsWith('/') ? path : `/${path}`;
};

export const getLocalizedUrl = (locale: Locale, path = '/') => {
  const pathname = normalizePath(path);
  return `${siteConfig.url}/${locale}${pathname}`;
};

export const getLocalizedCanonical = (locale: Locale, path = '/') =>
  getLocalizedUrl(locale, path);

export const getLocalizedAlternates = (path = '/') => {
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, getLocalizedUrl(locale, path)]),
  );

  return {
    ...languages,
    'x-default': getLocalizedUrl(defaultLocale, path),
  };
};
