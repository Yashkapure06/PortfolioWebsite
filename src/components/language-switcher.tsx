'use client';

import { useEffect, useRef, useState, useTransition } from 'react';
import { useLocale } from 'next-intl';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { type Locale, localeNames, locales } from '@/i18n/config';
import { usePathname, useRouter } from '@/i18n/routing';
import { cn } from '@/lib/utils';

export const LanguageSwitcher = ({ className }: { className?: string }) => {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLocale = localeNames[locale];

  const handleLanguageChange = (newLocale: Locale) => {
    // Don't change language if it's already the current locale
    if (newLocale === locale) {
      setIsOpen(false);
      return;
    }

    startTransition(() => {
      // Preserve the current route when changing language
      // pathname from usePathname() returns the path without locale (e.g., '/projects' or '/')
      // router.replace will navigate to the same path with the new locale (e.g., '/fr/projects')
      router.replace(pathname, { locale: newLocale });
      setIsOpen(false);
    });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className="relative">
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'bg-background/80 size-9 gap-1 rounded-lg backdrop-blur-sm sm:h-11 sm:w-auto sm:gap-2 sm:px-3',
          className
        )}
        aria-label="Change language"
        aria-expanded={isOpen}
        disabled={isPending}
      >
        <span
          className="shrink-0 text-base sm:text-lg"
          role="img"
          aria-hidden="true"
        >
          {currentLocale.flag}
        </span>
        <span className="hidden text-sm font-medium sm:inline">
          {currentLocale.nativeName}
        </span>
        <Icons.chevronDown
          className={cn(
            'hidden size-3 shrink-0 transition-transform sm:block sm:size-4',
            isOpen && 'rotate-180'
          )}
        />
      </Button>

      {isOpen && (
        <div className="bg-background border-border absolute right-0 top-full z-50 mt-2 max-h-[calc(100vh-8rem)] w-52 overflow-hidden overflow-y-auto rounded-lg border shadow-lg sm:w-56">
          <ul className="py-1">
            {locales.map((loc) => {
              const localeInfo = localeNames[loc];
              const isActive = loc === locale;
              return (
                <li key={loc}>
                  <button
                    onClick={() => handleLanguageChange(loc)}
                    className={cn(
                      'hover:bg-muted/50 flex w-full items-center gap-2 px-3 py-2 text-left transition-colors sm:gap-3 sm:px-4 sm:py-2.5',
                      isActive && 'bg-muted'
                    )}
                  >
                    <span
                      className="shrink-0 text-lg sm:text-xl"
                      role="img"
                      aria-hidden="true"
                    >
                      {localeInfo.flag}
                    </span>
                    <div className="flex min-w-0 flex-1 flex-col">
                      <span className="text-foreground text-xs font-medium sm:text-sm">
                        {localeInfo.nativeName}
                      </span>
                      <span className="text-muted-foreground text-[10px] sm:text-xs">
                        {localeInfo.name}
                      </span>
                    </div>
                    {isActive && (
                      <Icons.check className="text-primary ml-auto size-3 shrink-0 sm:size-4" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
