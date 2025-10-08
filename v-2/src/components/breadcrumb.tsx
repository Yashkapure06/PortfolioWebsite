'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Icons } from './icons';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const pathname = usePathname();

  // Generate breadcrumb items from pathname if not provided
  const breadcrumbItems =
    items ||
    (() => {
      const pathSegments = pathname.split('/').filter(Boolean);
      const items: BreadcrumbItem[] = [{ name: 'Home', href: '/' }];

      let currentPath = '';
      pathSegments.forEach((segment) => {
        currentPath += `/${segment}`;
        const name = segment.charAt(0).toUpperCase() + segment.slice(1);
        items.push({ name, href: currentPath });
      });

      return items;
    })();

  // Structured data for breadcrumbs
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, position) => ({
      '@type': 'ListItem',
      position: position + 1,
      name: item.name,
      item: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://yashkapure.dev'}${item.href}`,
    })),
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />

      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground"
      >
        {breadcrumbItems.map((item, index) => (
          <div key={item.href} className="flex items-center">
            {index > 0 && <Icons.chevronRight className="mx-1 size-4" />}
            {index === breadcrumbItems.length - 1 ? (
              <span className="font-medium text-foreground">{item.name}</span>
            ) : (
              <Link
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}
