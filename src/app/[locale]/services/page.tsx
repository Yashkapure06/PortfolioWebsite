'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { Breadcrumb } from '@/components/breadcrumb';
import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { Link } from '@/i18n/routing';
import { Services } from '@/components/services';

export default function ServicesPage() {
  const tPage = useTranslations('servicesPage');
  const prefersReducedMotion = useReducedMotion();

  const initial = prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 };
  const transition = prefersReducedMotion ? { duration: 0 } : { duration: 0.4 };

  return (
    <main id="main-content" className="container mx-auto px-4 py-16">
      <Breadcrumb />
      <div className="w-full">
        <Services />
      </div>

      <motion.div
        initial={initial}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.2 }}
        className="mt-16 rounded-lg border bg-muted/30 p-8 text-center"
      >
        <h2 className="mb-2 text-xl font-semibold">{tPage('whyMe')}</h2>
        <p className="text-muted-foreground mx-auto mb-6 max-w-2xl">
          {tPage('whyMeContent')}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/hire">{tPage('hireCta')}</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">{tPage('viewProjects')}</Link>
          </Button>
        </div>
      </motion.div>
    </main>
  );
}
