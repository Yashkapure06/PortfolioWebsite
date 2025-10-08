'use client';

import { useState } from 'react';

import { Icons } from './icons';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items?: FAQItem[];
}

const defaultFAQItems: FAQItem[] = [
  {
    question: 'What services do you offer?',
    answer:
      'I offer full-stack web development services including React.js, Next.js, Node.js, and MERN/MEVN stack development. I specialize in creating interactive and beautiful user interfaces with modern web technologies.',
  },
  {
    question: 'How much experience do you have?',
    answer:
      'I have 3.5+ years of real-world experience in web development, working with various technologies including React.js, Next.js, Node.js, MongoDB, Express.js, and Vue.js.',
  },
  {
    question: 'What is your hourly rate?',
    answer:
      "My freelance rate is $57/hour, though this may vary depending on the project scope and requirements. I'm flexible with working hours and available for both short-term and long-term projects.",
  },
  {
    question: 'Do you work remotely?',
    answer:
      "Yes, I work remotely and have experience collaborating with teams across different time zones. I'm based in the United Kingdom and available for remote work opportunities.",
  },
  {
    question: 'What technologies do you specialize in?',
    answer:
      'I specialize in React.js, Next.js, Node.js, TypeScript, JavaScript, MERN/MEVN stack, Tailwind CSS, ShadCN UI, MongoDB, Express.js, Vue.js, and various other modern web technologies.',
  },
  {
    question: 'Can you help with existing projects?',
    answer:
      'Absolutely! I can help with maintaining, updating, and enhancing existing web applications. I have experience working with legacy codebases and can help modernize older applications.',
  },
];

export function FAQ({ items = defaultFAQItems }: FAQProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // Structured data for FAQ
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

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
          <h2 className="mb-4 font-heading text-3xl font-semibold">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Get answers to common questions about my services and expertise
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          {items.map((item, index) => (
            <div key={index} className="border-b border-border last:border-b-0">
              <button
                className="flex w-full items-center justify-between py-6 text-left transition-colors hover:bg-muted/50"
                onClick={() => toggleItem(index)}
                aria-expanded={openItems.includes(index)}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="pr-4 text-lg font-semibold">{item.question}</h3>
                <Icons.chevronDown
                  className={`size-5 transition-transform ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openItems.includes(index)
                    ? 'max-h-96 opacity-100 pb-6'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className="leading-relaxed text-muted-foreground">
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
