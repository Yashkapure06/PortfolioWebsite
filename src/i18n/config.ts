export const locales = [
  'en',
  'es',
  'fr',
  'de',
  'it',
  'pt',
  'nl',
  'hi',
  'zh',
  'ja',
] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<
  Locale,
  { name: string; flag: string; nativeName: string }
> = {
  en: { name: 'English', flag: '🇬🇧', nativeName: 'English' },
  es: { name: 'Spanish', flag: '🇪🇸', nativeName: 'Español' },
  fr: { name: 'French', flag: '🇫🇷', nativeName: 'Français' },
  de: { name: 'German', flag: '🇩🇪', nativeName: 'Deutsch' },
  it: { name: 'Italian', flag: '🇮🇹', nativeName: 'Italiano' },
  pt: { name: 'Portuguese', flag: '🇵🇹', nativeName: 'Português' },
  nl: { name: 'Dutch', flag: '🇳🇱', nativeName: 'Nederlands' },
  hi: { name: 'Hindi', flag: '🇮🇳', nativeName: 'हिन्दी' },
  zh: { name: 'Chinese', flag: '🇨🇳', nativeName: '中文' },
  ja: { name: 'Japanese', flag: '🇯🇵', nativeName: '日本語' },
};
