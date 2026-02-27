import type { MetadataRoute } from 'next';

import { locales } from '@/i18n/config';
import { siteConfig } from '@/lib/site-config';
import { getLocalizedUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const canonicalBase = siteConfig.url.replace(/\/$/, '');

  const pathConfigs: Array<{ path: string; priority: number }> = [
    { path: '/', priority: 1 },
    { path: '/projects', priority: 0.8 },
  ];

  const entries: MetadataRoute.Sitemap = [];

  // Include root host URLs in addition to locale-prefixed paths.
  entries.push(
    {
      url: `${canonicalBase}/`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 1,
    }
  );

  for (const { path, priority } of pathConfigs) {
    for (const locale of locales) {
      const pathname = path === '/' ? '' : path;
      entries.push(
        {
          url: getLocalizedUrl(locale, path),
          lastModified,
          changeFrequency: 'weekly' as const,
          priority,
        }
      );
    }
  }

  return entries;
}
