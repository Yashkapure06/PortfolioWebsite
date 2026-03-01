'use client';

import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { toast } from 'sonner';

import { env } from '@/env.mjs';

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

// Currency with symbol and flag for combined budget UI
const CURRENCIES = [
  { value: 'USD', label: 'USD', symbol: '$', flag: '🇺🇸' },
  { value: 'EUR', label: 'EUR', symbol: '€', flag: '🇪🇺' },
  { value: 'GBP', label: 'GBP', symbol: '£', flag: '🇬🇧' },
  { value: 'INR', label: 'INR', symbol: '₹', flag: '🇮🇳' },
  { value: 'CAD', label: 'CAD', symbol: 'C$', flag: '🇨🇦' },
  { value: 'AUD', label: 'AUD', symbol: 'A$', flag: '🇦🇺' },
  { value: 'CHF', label: 'CHF', symbol: 'Fr', flag: '🇨🇭' },
  { value: 'JPY', label: 'JPY', symbol: '¥', flag: '🇯🇵' },
  { value: 'PLN', label: 'PLN', symbol: 'zł', flag: '🇵🇱' },
  { value: 'SEK', label: 'SEK', symbol: 'kr', flag: '🇸🇪' },
  { value: 'NOK', label: 'NOK', symbol: 'kr', flag: '🇳🇴' },
  { value: 'DKK', label: 'DKK', symbol: 'kr', flag: '🇩🇰' },
  { value: 'BRL', label: 'BRL', symbol: 'R$', flag: '🇧🇷' },
  { value: 'MXN', label: 'MXN', symbol: '$', flag: '🇲🇽' },
  { value: 'AED', label: 'AED', symbol: 'د.إ', flag: '🇦🇪' },
  { value: 'PKR', label: 'PKR', symbol: '₨', flag: '🇵🇰' },
  { value: 'BDT', label: 'BDT', symbol: '৳', flag: '🇧🇩' },
  { value: 'LKR', label: 'LKR', symbol: 'Rs', flag: '🇱🇰' },
  { value: 'EGP', label: 'EGP', symbol: 'E£', flag: '🇪🇬' },
  { value: 'ZAR', label: 'ZAR', symbol: 'R', flag: '🇿🇦' },
  { value: 'NGN', label: 'NGN', symbol: '₦', flag: '🇳🇬' },
  { value: 'SGD', label: 'SGD', symbol: 'S$', flag: '🇸🇬' },
  { value: 'MYR', label: 'MYR', symbol: 'RM', flag: '🇲🇾' },
  { value: 'PHP', label: 'PHP', symbol: '₱', flag: '🇵🇭' },
  { value: 'THB', label: 'THB', symbol: '฿', flag: '🇹🇭' },
  { value: 'IDR', label: 'IDR', symbol: 'Rp', flag: '🇮🇩' },
  { value: 'TRY', label: 'TRY', symbol: '₺', flag: '🇹🇷' },
  { value: 'CNY', label: 'CNY', symbol: '¥', flag: '🇨🇳' },
  { value: 'KRW', label: 'KRW', symbol: '₩', flag: '🇰🇷' },
  { value: 'NZD', label: 'NZD', symbol: 'NZ$', flag: '🇳🇿' },
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
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [touched, setTouched] = useState<{
    name?: boolean;
    email?: boolean;
    message?: boolean;
  }>({});
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<(typeof CURRENCIES)[number]>(CURRENCIES[0]);
  const currencyDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (currencyDropdownRef.current && !currencyDropdownRef.current.contains(e.target as Node)) {
        setCurrencyOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (succeeded) {
      setShowSuccessMessage(true);
      setSelectedCurrency(CURRENCIES[0]);
      toast.success(t('successToast'));
      const form = document.querySelector('form');
      if (form) (form as HTMLFormElement).reset();
    }
    if (submitError) {
      toast.error(t('error'));
    }
  }, [succeeded, submitError, t]);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    setSubmitError(null);

    const publicKey = env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const serviceId = env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

    if (!publicKey || !serviceId || !templateId) {
      toast.error(t('error'));
      setSubmitError('EmailJS is not configured. Add NEXT_PUBLIC_EMAILJS_* to .env.local');
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    const fromName = String(formData.get('name') ?? '').trim();
    const fromEmail = String(formData.get('email') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    if (!fromName || !fromEmail || !message) {
      toast.error(t('error'));
      setSubmitting(false);
      return;
    }

    setSubmitting(true);

    // Support both from_* and user_* (EmailJS default contact template uses user_name, user_email)
    const templateParams: Record<string, string> = {
      from_name: fromName,
      from_email: fromEmail,
      user_name: fromName,
      user_email: fromEmail,
      message,
      reply_to: fromEmail,
    };
    const optional = {
      service: String(formData.get('service') ?? ''),
      currency: String(formData.get('currency') ?? ''),
      budget: String(formData.get('budget') ?? ''),
      timeline: String(formData.get('timeline') ?? ''),
    };
    Object.entries(optional).forEach(([k, v]) => {
      if (v.trim()) templateParams[k] = v;
    });

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setSucceeded(true);
    } catch (err) {
      console.error('EmailJS error:', err);
      setSubmitError('send_failed');
      setSucceeded(false);
    } finally {
      setSubmitting(false);
    }
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

          {/* Single combined field: currency first (flag + symbol), then amount */}
          <div>
            <label htmlFor="contact-budget" className={labelClassName}>
              {t('budgetLabel')}
            </label>
            <div
              className="border-input bg-background ring-offset-background focus-within:ring-ring mt-2 flex h-11 w-full items-stretch rounded-md border focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2"
              ref={currencyDropdownRef}
            >
              <input type="hidden" name="currency" value={selectedCurrency.value} />
              {/* Currency selector (left) */}
              <div className="relative flex-shrink-0">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrencyOpen((o) => !o);
                  }}
                  aria-haspopup="listbox"
                  aria-expanded={currencyOpen}
                  aria-label={t('currencyLabel')}
                  className="border-input flex h-full min-w-[8rem] items-center justify-between gap-1.5 rounded-l-[6px] border-0 border-r bg-muted/40 px-3 py-2 text-sm transition-colors hover:bg-muted/60 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary/30"
                >
                  <span className="flex items-center gap-1.5 truncate">
                    <span className="text-base leading-none" aria-hidden>
                      {selectedCurrency.flag}
                    </span>
                    <span className="font-medium">{selectedCurrency.label}</span>
                    <span className="text-muted-foreground text-xs">({selectedCurrency.symbol})</span>
                  </span>
                  <ChevronDown
                    className={`text-muted-foreground size-4 shrink-0 transition-transform ${currencyOpen ? 'rotate-180' : ''}`}
                    aria-hidden
                  />
                </button>
                {currencyOpen && (
                  <ul
                    role="listbox"
                    aria-label={t('currencyLabel')}
                    className="border-input bg-background absolute left-0 top-full z-50 mt-1 max-h-60 w-64 overflow-auto rounded-md border py-1 shadow-lg"
                  >
                    {CURRENCIES.map((curr) => (
                      <li
                        key={curr.value}
                        role="option"
                        aria-selected={selectedCurrency.value === curr.value}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          setSelectedCurrency(curr);
                          setCurrencyOpen(false);
                        }}
                        className="hover:bg-muted/50 flex cursor-pointer items-center gap-2 px-3 py-2 text-sm"
                      >
                        <span className="text-base" aria-hidden>
                          {curr.flag}
                        </span>
                        <span className="font-medium">{curr.label}</span>
                        <span className="text-muted-foreground text-xs">({curr.symbol})</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {/* Amount input (right) */}
              <input
                type="number"
                id="contact-budget"
                name="budget"
                min={0}
                step={1}
                placeholder={t('budgetPlaceholder')}
                inputMode="decimal"
                aria-label={t('budgetLabel')}
                className="placeholder:text-muted-foreground border-0 bg-transparent px-3 py-2 text-sm outline-none focus:ring-0 min-w-0 flex-1 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-timeline" className={labelClassName}>
              {t('timeline')}
            </label>
            <input
              type="text"
              id="contact-timeline"
              name="timeline"
              placeholder={t('timelinePlaceholder')}
              aria-label={t('timeline')}
              className={inputClassName}
            />
          </div>

          <div className="flex flex-col items-center gap-2 pt-2">
            <Button type="submit" size="lg" disabled={submitting}>
              {submitting ? t('sending') : t('submit')}{' '}
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
