'use client';

import { useState, useTransition, useEffect, useRef } from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { locales, localeNames, type Locale } from '@/i18n/config';
import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
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
    startTransition(() => {
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
          'bg-background/80 backdrop-blur-sm h-9 w-9 sm:h-11 sm:w-auto sm:px-3 gap-1 sm:gap-2 rounded-lg',
          className
        )}
        aria-label="Change language"
        aria-expanded={isOpen}
        disabled={isPending}
      >
        <span
          className="text-base sm:text-lg shrink-0"
          role="img"
          aria-hidden="true"
        >
          {currentLocale.flag}
        </span>
        <span className="hidden sm:inline text-sm font-medium">
          {currentLocale.nativeName}
        </span>
        <Icons.chevronDown
          className={cn(
            'size-3 sm:size-4 transition-transform shrink-0 hidden sm:block',
            isOpen && 'rotate-180'
          )}
        />
      </Button>

      {isOpen && (
        <div className="bg-background border-border absolute right-0 top-full z-50 mt-2 w-52 sm:w-56 rounded-lg border shadow-lg overflow-hidden max-h-[calc(100vh-8rem)] overflow-y-auto">
          <ul className="py-1">
            {locales.map((loc) => {
              const localeInfo = localeNames[loc];
              const isActive = loc === locale;
              return (
                <li key={loc}>
                  <button
                    onClick={() => handleLanguageChange(loc)}
                    className={cn(
                      'hover:bg-muted/50 flex w-full items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 text-left transition-colors',
                      isActive && 'bg-muted'
                    )}
                  >
                    <span
                      className="text-lg sm:text-xl shrink-0"
                      role="img"
                      aria-hidden="true"
                    >
                      {localeInfo.flag}
                    </span>
                    <div className="flex flex-col flex-1 min-w-0">
                      <span className="font-medium text-foreground text-xs sm:text-sm">
                        {localeInfo.nativeName}
                      </span>
                      <span className="text-[10px] sm:text-xs text-muted-foreground">
                        {localeInfo.name}
                      </span>
                    </div>
                    {isActive && (
                      <Icons.check className="ml-auto size-3 sm:size-4 text-primary shrink-0" />
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
