'use client';

import { useEffect } from 'react';
import { useForm } from '@formspree/react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { toast } from 'sonner';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const Contact = () => {
  const { ref } = useSectionInView('Contact');
  const t = useTranslations('contact');
  const [state, handleSubmit] = useForm('mbjervyr');

  useEffect(() => {
    if (state.succeeded) {
      toast.success(t('success'));
      // Clear the form after successful submission
      const form = document.querySelector('form');
      if (form) {
        form.reset();
      }
    }
    if (state.errors && Object.keys(state.errors).length > 0) {
      toast.error(t('error'));
    }
  }, [state.succeeded, state.errors, t]);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="my-10 w-full scroll-mt-28 md:mb-20"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
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
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-5"
      >
        <div className="w-full max-w-xl">
          <label
            htmlFor="name"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {t('name')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={t('namePlaceholder')}
            required
            className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring mt-2 flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <div className="w-full max-w-xl">
          <label
            htmlFor="email"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {t('email')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={t('emailPlaceholder')}
            required
            className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring mt-2 flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <div className="w-full max-w-xl">
          <label
            htmlFor="message"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {t('message')}
          </label>
          <textarea
            id="message"
            name="message"
            placeholder={t('messagePlaceholder')}
            required
            className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring mt-2 flex h-60 w-full resize-none rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          ></textarea>
        </div>
        <Button type="submit" size="lg" disabled={state.submitting}>
          {state.submitting ? t('sending') : t('submit')}{' '}
          <Icons.arrowRight className="ml-2 size-4" />
        </Button>
      </form>
    </motion.section>
  );
};
