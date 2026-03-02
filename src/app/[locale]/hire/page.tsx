'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Check, Clock, DollarSign, Mail, MessageSquare, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Breadcrumb } from '@/components/breadcrumb';
import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { Link } from '@/i18n/routing';

const processSteps = [
  { icon: MessageSquare, key: 'step1' },
  { icon: Clock, key: 'step2' },
  { icon: Zap, key: 'step3' },
  { icon: Check, key: 'step4' },
] as const;

export default function HirePage() {
  const t = useTranslations('hire');
  const prefersReducedMotion = useReducedMotion();

  const initial = prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 };
  const transition = prefersReducedMotion ? { duration: 0 } : { duration: 0.4 };

  return (
    <main id="main-content" className="container mx-auto px-4 py-16">
      <Breadcrumb />
      <motion.div
        initial={initial}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
        className="mb-16 text-center"
      >
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          {t('heading')}
        </h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
          {t('content')}
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-4xl gap-12">
        {/* Availability & Response */}
        <motion.section
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.05 }}
          className="grid gap-6 sm:grid-cols-2"
        >
          <div className="flex gap-4 rounded-lg border bg-card p-6">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Zap className="size-6 text-primary" />
            </div>
            <div>
              <h2 className="font-semibold">{t('availabilityTitle')}</h2>
              <p className="text-muted-foreground text-sm">{t('availability')}</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-lg border bg-card p-6">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Clock className="size-6 text-primary" />
            </div>
            <div>
              <h2 className="font-semibold">{t('responseTitle')}</h2>
              <p className="text-muted-foreground text-sm">{t('responseTime')}</p>
            </div>
          </div>
        </motion.section>

        {/* Rates */}
        <motion.section
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.1 }}
          className="rounded-lg border bg-card p-6 sm:p-8"
        >
          <div className="mb-4 flex items-center gap-2">
            <DollarSign className="size-5 text-primary" />
            <h2 className="text-xl font-semibold">{t('ratesTitle')}</h2>
          </div>
          <p className="text-muted-foreground mb-4">{t('ratesContent')}</p>
          <p className="text-foreground font-medium">{t('ratesRange')}</p>
        </motion.section>

        {/* Process */}
        <motion.section
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.15 }}
        >
          <h2 className="mb-6 text-xl font-semibold">{t('processTitle')}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {processSteps.map(({ icon: Icon, key }, index) => (
              <div
                key={key}
                className="flex gap-4 rounded-lg border bg-card p-4"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-medium">{t(`${key}Title`)}</h3>
                  <p className="text-muted-foreground text-sm">{t(`${key}Content`)}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.2 }}
          className="rounded-lg border bg-primary/5 p-8 text-center"
        >
          <div className="mb-4 flex justify-center">
            <Mail className="size-12 text-primary" />
          </div>
          <h2 className="mb-2 text-xl font-semibold">{t('ctaTitle')}</h2>
          <p className="text-muted-foreground mb-6">{t('ctaContent')}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/#contact">{t('ctaButton')}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="mailto:yashkapure06@gmail.com">{t('emailDirect')}</a>
            </Button>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
