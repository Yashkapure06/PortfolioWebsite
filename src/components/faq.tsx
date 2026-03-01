'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { generateFAQStructuredData } from '@/lib/aeo';

import { Icons } from './icons';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items?: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  const t = useTranslations('faq');

  // Use translations if items are not provided
  const faqItems: FAQItem[] = items || [
    {
      question: t('items.services.question'),
      answer: t('items.services.answer'),
    },
    {
      question: t('items.experience.question'),
      answer: t('items.experience.answer'),
    },
    {
      question: t('items.remote.question'),
      answer: t('items.remote.answer'),
    },
    {
      question: t('items.usClients.question'),
      answer: t('items.usClients.answer'),
    },
    {
      question: t('items.technologies.question'),
      answer: t('items.technologies.answer'),
    },
    {
      question: t('items.existing.question'),
      answer: t('items.existing.answer'),
    },
    {
      question: t('items.hire.question'),
      answer: t('items.hire.answer'),
    },
  ];
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // AEO-optimized FAQ structured data for AI search engines and voice assistants
  const faqStructuredData = generateFAQStructuredData(faqItems);

  return (
    <section className="py-16">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />

      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="font-heading mb-4 text-3xl font-semibold">
            {t('heading')}
          </h2>
          <p className="text-muted-foreground text-lg">{t('subheading')}</p>
        </div>

        <div className="mx-auto max-w-3xl">
          {faqItems.map((item, index) => (
            <div key={index} className="border-border border-b last:border-b-0">
              <button
                className="hover:bg-muted/50 flex w-full items-center justify-between py-6 text-left transition-colors"
                onClick={() => toggleItem(index)}
                aria-expanded={openItems.includes(index)}
                aria-controls={`faq-answer-${index}`}
              >
                <h3
                  className="pr-4 text-lg font-semibold"
                  id={`faq-question-${index}`}
                >
                  {item.question}
                </h3>
                <Icons.chevronDown
                  aria-hidden="true"
                  className={`size-5 transition-transform ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openItems.includes(index)
                    ? 'max-h-96 pb-6 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
