'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { useSectionInView } from '@/hooks/use-section-in-view';
import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';

const PILL_KEYS = ['fullTime', 'freelance', 'contract', 'remoteOnsite'] as const;

export const OpenTo = () => {
  const { ref } = useSectionInView('Home');
  const t = useTranslations('openTo');
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      ref={ref}
      aria-label={t('heading')}
      className="flex flex-col items-center gap-4 py-6 text-center sm:py-8"
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <p className="text-muted-foreground max-w-xl text-sm">
        {t('description')}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {PILL_KEYS.map((key) => (
          <span
            key={key}
            className={cn(
              'rounded-full border border-border/80 bg-muted/50 px-3 py-1.5 text-xs font-medium',
              'text-foreground/90'
            )}
          >
            {t(`types.${key}`)}
          </span>
        ))}
      </div>
      <Link
        href="#contact"
        className="text-primary hover:underline text-xs font-medium"
      >
        {t('cta')}
      </Link>
    </motion.section>
  );
};
