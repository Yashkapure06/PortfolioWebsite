'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');
  const t = useTranslations('about');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading={t('heading')} />
      <div className="-mt-5 max-w-3xl text-center leading-7">
        <p className="mb-4">{t('paragraph1')}</p>
        <p className="mb-4">{t('paragraph2')}</p>
        <p className="mb-4">{t('paragraph3')}</p>
        <p>{t('paragraph4')}</p>
      </div>
      <Skills />
    </motion.section>
  );
};
