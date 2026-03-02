'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { useActiveSection } from '@/components/active-section-provider';
import { Button } from '@/components/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/dialog';
import { Icons } from '@/components/icons';
import { Link, usePathname } from '@/i18n/routing';
import { links } from '@/lib/data';
import type { SectionName } from '@/lib/types';

function getActiveSectionFromPathname(pathname: string): SectionName | null {
  if (pathname.includes('/services')) return 'Services';
  if (pathname.includes('/projects')) return 'Projects';
  if (pathname.includes('/hire')) return 'Hire';
  return null;
}

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('common');
  const tNav = useTranslations('nav');
  const pathname = usePathname();
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();

  const effectiveActiveSection = useMemo(() => {
    const fromPath = getActiveSectionFromPathname(pathname);
    return fromPath ?? activeSection;
  }, [pathname, activeSection]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="lg:bg-background/80 flex w-fit min-w-0 items-center justify-center gap-2 overflow-hidden rounded-full lg:border lg:px-2 lg:py-3 lg:backdrop-blur-sm"
    >
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="lg"
            className="bg-background/80 backdrop-blur-sm lg:hidden"
          >
            Menu <Icons.chevronDown className="ml-2 size-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="text-muted-foreground max-h-screen w-[90%] rounded">
          <DialogHeader>
            <DialogTitle className="text-md self-start font-medium">
              {t('navigation')}
            </DialogTitle>
          </DialogHeader>
          <nav>
            <ul>
              {links.map(({ name, hash }) => (
                <li
                  onClick={() => setIsOpen(false)}
                  key={name}
                  className="border-muted-foreground/10 py-3 text-sm [&:not(:last-child)]:border-b"
                >
                  <Link
                    href={hash}
                    className={`block ${
                      name === 'Hire'
                        ? 'bg-gradient-to-r from-[#F9F295] via-[#E0AA3E] to-[#B88A44] py-2 px-3 -mx-3 rounded-lg font-semibold text-[#5C4517]'
                        : ''
                    }`}
                  >
                    {tNav(
                      name.toLowerCase() as
                        | 'home'
                        | 'about'
                        | 'services'
                        | 'experience'
                        | 'projects'
                        | 'testimonials'
                        | 'contact'
                        | 'hire'
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </DialogContent>
      </Dialog>
      <nav className="text-muted-foreground hidden lg:block">
        <ul className="flex justify-center gap-3 lg:gap-5">
          {links.map(({ name, hash }) => {
            const isHire = name === 'Hire';
            const isActive = name === effectiveActiveSection;

            return (
              <li key={name}>
                <Link
                  href={hash}
                  className={`relative px-4 py-2 transition-all duration-200 ${
                    isHire
                      ? 'font-semibold text-[#5C4517] hover:text-[#4a3812]'
                      : 'hover:text-foreground'
                  }`}
                  onClick={() => {
                    setActiveSection(name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {isHire ? (
                    <>
                      {isActive ? (
                        <motion.span
                          className="absolute inset-0 -z-10 overflow-hidden rounded-full bg-gradient-to-r from-[#F9F295] via-[#E0AA3E] to-[#B88A44] shadow-[0_0_12px_rgba(224,170,62,0.4)]"
                          layoutId="activeSection"
                          transition={{
                            type: 'spring',
                            stiffness: 380,
                            damping: 30,
                          }}
                        >
                          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-badge-shimmer" aria-hidden />
                        </motion.span>
                      ) : (
                        <span className="absolute inset-0 -z-10 overflow-hidden rounded-full bg-gradient-to-r from-[#F9F295] via-[#E0AA3E] to-[#B88A44] shadow-[0_0_10px_rgba(224,170,62,0.35)] transition-shadow duration-200 hover:shadow-[0_0_16px_rgba(224,170,62,0.5)]">
                          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-badge-shimmer" aria-hidden />
                        </span>
                      )}
                      <span className="relative z-0">
                        {tNav(
                          name.toLowerCase() as
                            | 'home'
                            | 'about'
                            | 'services'
                            | 'experience'
                            | 'projects'
                            | 'testimonials'
                            | 'contact'
                            | 'hire'
                        )}
                      </span>
                    </>
                  ) : (
                    <>
                      {tNav(
                        name.toLowerCase() as
                          | 'home'
                          | 'about'
                          | 'services'
                          | 'experience'
                          | 'projects'
                          | 'testimonials'
                          | 'contact'
                          | 'hire'
                      )}
                      {isActive && (
                        <motion.span
                          className="bg-muted absolute inset-0 -z-10 rounded-full"
                          layoutId="activeSection"
                          transition={{
                            type: 'spring',
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                    </>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </motion.header>
  );
};
