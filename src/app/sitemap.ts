import type { MetadataRoute } from 'next';

import { locales } from '@/i18n/config';
import { getLocalizedUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const localizedRoutes = locales.flatMap((locale) => [
    {
      url: getLocalizedUrl(locale, '/'),
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: getLocalizedUrl(locale, '/projects'),
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]);

  return localizedRoutes;
}
