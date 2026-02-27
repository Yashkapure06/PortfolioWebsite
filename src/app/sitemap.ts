import type { MetadataRoute } from 'next';

import { locales } from '@/i18n/config';
import { siteConfig } from '@/lib/site-config';
import { getLocalizedUrl } from '@/lib/seo';

/** Base URL for www variant (e.g. https://www.yashkapure.com) */
const getWwwBaseUrl = () => {
  const base = siteConfig.url;
  if (base.includes('://www.')) return base;
  return base.replace(/^(https?:\/\/)(?!www\.)/i, '$1www.');
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const wwwBase = getWwwBaseUrl();

  const pathConfigs: Array<{ path: string; priority: number }> = [
    { path: '/', priority: 1 },
    { path: '/projects', priority: 0.8 },
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const { path, priority } of pathConfigs) {
    for (const locale of locales) {
      const pathname = path === '/' ? '' : path;
      entries.push(
        {
          url: getLocalizedUrl(locale, path),
          lastModified,
          changeFrequency: 'weekly' as const,
          priority,
        },
        {
          url: `${wwwBase}/${locale}${pathname}`,
          lastModified,
          changeFrequency: 'weekly' as const,
          priority,
        }
      );
    }
  }

  return entries;
}
