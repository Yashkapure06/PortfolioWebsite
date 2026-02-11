'use client';

import { useEffect, useState } from 'react';
import { useForm } from '@formspree/react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { toast } from 'sonner';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { Link } from '@/i18n/routing';
import type { ServiceKey } from '@/lib/data';

const inputClassName =
  'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring mt-2 flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';
const textareaClassName =
  'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring mt-2 flex w-full resize-y rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[8rem]';
const labelClassName =
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70';

const CURRENCIES = [
  { value: 'USD', label: 'USD' },
  { value: 'EUR', label: 'EUR' },
  { value: 'GBP', label: 'GBP' },
  { value: 'INR', label: 'INR' },
  { value: 'CAD', label: 'CAD' },
  { value: 'AUD', label: 'AUD' },
  { value: 'CHF', label: 'CHF' },
  { value: 'JPY', label: 'JPY' },
  { value: 'PLN', label: 'PLN' },
  { value: 'SEK', label: 'SEK' },
  { value: 'NOK', label: 'NOK' },
  { value: 'DKK', label: 'DKK' },
  { value: 'BRL', label: 'BRL' },
  { value: 'MXN', label: 'MXN' },
  { value: 'AED', label: 'AED' },
  { value: 'PKR', label: 'PKR' },
  { value: 'BDT', label: 'BDT' },
  { value: 'LKR', label: 'LKR' },
  { value: 'EGP', label: 'EGP' },
  { value: 'ZAR', label: 'ZAR' },
  { value: 'NGN', label: 'NGN' },
  { value: 'SGD', label: 'SGD' },
  { value: 'MYR', label: 'MYR' },
  { value: 'PHP', label: 'PHP' },
  { value: 'THB', label: 'THB' },
  { value: 'IDR', label: 'IDR' },
  { value: 'TRY', label: 'TRY' },
  { value: 'CNY', label: 'CNY' },
  { value: 'KRW', label: 'KRW' },
  { value: 'NZD', label: 'NZD' },
] as const;

const serviceKeys: ServiceKey[] = [
  'frontend',
  'fullstack',
  'database',
  'performance',
  'architecture',
  'productUi',
  'seoAeo',
];

export const Contact = () => {
  const { ref } = useSectionInView('Contact');
  const t = useTranslations('contact');
  const tServices = useTranslations('services');
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get('service') as ServiceKey | null;
  const serviceKey =
    serviceParam && serviceKeys.includes(serviceParam) ? serviceParam : null;
  const serviceTitle = serviceKey
    ? tServices(`items.${serviceKey}.title`)
    : null;
  const [state, handleSubmit] = useForm('mbjervyr');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [touched, setTouched] = useState<{
    name?: boolean;
    email?: boolean;
    message?: boolean;
  }>({});

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccessMessage(true);
      toast.success(t('successToast'));
      const form = document.querySelector('form');
      if (form) form.reset();
    }
    if (state.errors && Object.keys(state.errors).length > 0) {
      toast.error(t('error'));
    }
  }, [state.succeeded, state.errors, t]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setTouched({ name: true, email: true, message: true });
    handleSubmit(e);
  };

  if (showSuccessMessage) {
    return (
      <motion.section
        ref={ref}
        id="contact"
        className="my-10 w-full scroll-mt-28 md:mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto flex max-w-xl flex-col items-center px-4">
          <SectionHeading heading={t('heading')} />
          <p className="text-muted-foreground mt-4 text-center text-sm leading-relaxed">
            {t('success')}
          </p>
          <div className="mt-6">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setShowSuccessMessage(false)}
            >
              {t('sendAnother')}
            </Button>
          </div>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="my-10 w-full scroll-mt-28 md:mb-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto flex max-w-xl flex-col items-center px-4">
        <SectionHeading
          heading={t('heading')}
          content={
            <>
              {t('description')}{' '}
              <Button
                variant="link"
                className="text-muted-foreground hover:text-foreground h-fit p-0 font-medium underline transition-colors"
                asChild
              >
                <Link href="mailto:yashkapure06@gmail.com">
                  yashkapure06@gmail.com
                </Link>
              </Button>{' '}
              {t('or')}
            </>
          }
        />
        <p className="text-muted-foreground mt-1 text-center text-sm">
          {t('openToRoles')}
        </p>
        <p className="text-muted-foreground mt-4 text-center text-sm leading-relaxed">
          {t('introExpectations')}
        </p>

        <form
          onSubmit={handleFormSubmit}
          className="mt-8 w-full space-y-5"
        >
          {serviceTitle && (
            <input type="hidden" name="service" value={serviceTitle} />
          )}
          {serviceTitle && (
            <p className="text-muted-foreground text-sm">
              {t('requestingService')}:{' '}
              <strong className="text-foreground">{serviceTitle}</strong>
            </p>
          )}

          <div>
            <label htmlFor="contact-name" className={labelClassName}>
              {t('name')} <span className="text-destructive" aria-hidden>*</span>
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              placeholder={t('namePlaceholder')}
              required
              aria-required="true"
              onBlur={() => setTouched((p) => ({ ...p, name: true }))}
              className={inputClassName}
            />
          </div>

          <div>
            <label htmlFor="contact-email" className={labelClassName}>
              {t('email')} <span className="text-destructive" aria-hidden>*</span>
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              placeholder={t('emailPlaceholder')}
              required
              aria-required="true"
              onBlur={() => setTouched((p) => ({ ...p, email: true }))}
              className={inputClassName}
            />
          </div>

          <div>
            <label htmlFor="contact-message" className={labelClassName}>
              {t('projectDescription')}{' '}
              <span className="text-destructive" aria-hidden>*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder={t('projectDescriptionPlaceholder')}
              required
              rows={6}
              aria-required="true"
              onBlur={() => setTouched((p) => ({ ...p, message: true }))}
              className={textareaClassName}
            />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-budget" className={labelClassName}>
                {t('budgetLabel')}
              </label>
              <select
                id="contact-budget"
                name="budget"
                aria-label={t('budgetLabel')}
                className={inputClassName}
              >
                <option value="">{t('budgetNotSure')}</option>
                <option value="under-2k">{t('budgetUnder2k')}</option>
                <option value="2k-5k">{t('budget2k5k')}</option>
                <option value="5k-10k">{t('budget5k10k')}</option>
                <option value="10k-plus">{t('budget10kPlus')}</option>
              </select>
            </div>
            <div>
              <label htmlFor="contact-currency" className={labelClassName}>
                {t('currency')}
              </label>
              <select
                id="contact-currency"
                name="currency"
                aria-label={t('currencyLabel')}
                className={inputClassName}
              >
                {CURRENCIES.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="contact-timeline" className={labelClassName}>
              {t('timeline')}
            </label>
            <select
              id="contact-timeline"
              name="timeline"
              aria-label={t('timeline')}
              className={inputClassName}
            >
              <option value="">—</option>
              <option value="asap">{t('timelineASAP')}</option>
              <option value="1-2-weeks">{t('timeline1to2')}</option>
              <option value="1-month">{t('timeline1month')}</option>
              <option value="flexible">{t('timelineFlexible')}</option>
            </select>
          </div>

          <div className="flex flex-col items-center gap-2 pt-2">
            <Button type="submit" size="lg" disabled={state.submitting}>
              {state.submitting ? t('sending') : t('submit')}{' '}
              <Icons.arrowRight className="ml-2 size-4" />
            </Button>
            <p className="text-muted-foreground text-center text-xs">
              {t('trustMicrocopy')}
            </p>
          </div>
        </form>
      </div>
    </motion.section>
  );
};
