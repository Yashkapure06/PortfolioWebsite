'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Code2,
  Database,
  Gauge,
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
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {servicesData.map(({ key, technologies, primaryCount = 0, highlight }, index) => {
          const Icon = serviceIcons[key];

          return (
            <motion.div
              key={key}
              initial={initial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: index * 0.08 }}
            >
              <Card
                className={cn(
                  'border-border/80 bg-card/50 relative h-full transition-all duration-300',
                  'hover:border-primary/20 hover:shadow-md'
                )}
              >
                {highlight === 'mostPopular' && (
                  <span
                    className="text-muted-foreground border-border bg-muted/80 absolute right-3 top-3 rounded px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider"
                    aria-label={t('badgeMostPopular')}
                  >
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
        })}
      </div>
    </motion.section>
  );
};
