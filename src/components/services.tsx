'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Code2,
  Database,
  Gauge,
  Globe,
  LayoutTemplate,
  Layers,
  PenTool,
  Search,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/card';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { Link } from '@/i18n/routing';
import type { ServiceKey } from '@/lib/data';
import { servicesData } from '@/lib/data';
import { cn } from '@/lib/utils';

const serviceIcons: Record<
  ServiceKey,
  React.ComponentType<{ className?: string }>
> = {
  frontend: Code2,
  fullstack: Layers,
  database: Database,
  performance: Gauge,
  architecture: LayoutTemplate,
  productUi: PenTool,
  seoAeo: Search,
  googleBusiness: Globe,
};

export const Services = () => {
  const { ref } = useSectionInView('Services', 0.3);
  const t = useTranslations('services');
  const prefersReducedMotion = useReducedMotion();

  const initial = prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 40 };
  const transition = prefersReducedMotion ? { duration: 0 } : { delay: 0.1 };

  return (
    <motion.section
      ref={ref}
      id="services"
      className="my-10 scroll-mt-28 md:mb-20"
      initial={initial}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={transition}
    >
      <SectionHeading heading={t('heading')} content={t('content')} />
      <p className="text-muted-foreground mx-auto mt-2 max-w-2xl text-center text-sm">
        {t('seoLine')}
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {servicesData.map(
          ({ key, technologies, primaryCount = 0, highlight }, index) => {
            const Icon = serviceIcons[key];

            const isMostPopular = highlight === 'mostPopular';

            return (
              <motion.div
                key={key}
                initial={initial}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: index * 0.08 }}
                className={cn(isMostPopular && 'group relative')}
              >
                {isMostPopular && (
                  <div
                    className="pointer-events-none absolute -inset-[2px] -z-10 overflow-hidden rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden
                  >
                    <div
                      className={cn(
                        'absolute left-1/2 top-1/2 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2',
                        !prefersReducedMotion && 'group-hover:animate-card-border-spin'
                      )}
                      style={{
                        background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 250deg, #F9F295 280deg, #E0AA3E 315deg, #B88A44 350deg, transparent 360deg)`,
                      }}
                    />
                  </div>
                )}
                <Card
                  className={cn(
                    'relative h-full transition-all duration-300',
                    isMostPopular
                      ? 'border-border/80 bg-card hover:border-primary/20 hover:shadow-md group-hover:shadow-[0_0_20px_rgba(224,170,62,0.15)]'
                      : 'border-border/80 bg-card/50 hover:border-primary/20 hover:shadow-md'
                  )}
                >
                  {highlight === 'mostPopular' && (
                    <span
                      className="absolute right-3 top-3 isolate overflow-hidden rounded-md border border-[#B88A44]/50 bg-gradient-to-r from-[#F9F295] via-[#E0AA3E] to-[#B88A44] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#5C4517] shadow-[0_0_16px_rgba(224,170,62,0.5)]"
                      aria-label={t('badgeMostPopular')}
                    >
                      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-badge-shimmer" aria-hidden />
                      {t('badgeMostPopular')}
                    </span>
                  )}
                  <CardHeader className="pb-1">
                    <div className="bg-primary/10 text-primary mb-3 flex size-11 items-center justify-center rounded-lg">
                      <Icon className="size-5" aria-hidden />
                    </div>
                    <CardTitle className="text-lg font-semibold">
                      {t(`items.${key}.title`)}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mt-2 leading-relaxed text-sm">
                      {t(`items.${key}.description`)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-muted-foreground mb-2.5 text-[11px] font-medium uppercase tracking-wider">
                      {t('technologiesLabel')}
                    </p>
                    <ul className="flex flex-wrap gap-1.5">
                      {technologies.map((tech, i) => (
                        <li
                          key={tech}
                          className={cn(
                            'rounded-full border px-2.5 py-0.5 text-xs',
                            i < primaryCount
                              ? 'border-primary/25 bg-primary/5 font-medium text-foreground'
                              : 'border-border/80 bg-muted/40 text-muted-foreground'
                          )}
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="default"
                      size="default"
                      className="mt-5 w-full gap-2 rounded-full text-sm font-medium shadow-sm transition-all hover:shadow"
                      asChild
                    >
                      <Link href={`/?service=${key}#contact`}>
                        {t('bookService')}
                        <ArrowRight className="size-3.5" aria-hidden />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          }
        )}
      </div>
    </motion.section>
  );
};
