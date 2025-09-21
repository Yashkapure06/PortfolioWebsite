'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-3xl text-center leading-7">
        <p className="mb-4">
          My name is Yash Kapure, and I am a Frontend Engineer with 3.5+ years
          of real-world experience designing fast, usable, and SEO-friendly web
          applications. My specialty is crafting smooth-looking UIs with
          React.js, Next.js, Tailwind CSS, and shadcn/ui and bringing things to
          life with Framer Motion.
        </p>
        <p className="mb-4">
          Alongside my frontend experience, I possess good full-stack skills in
          JavaScript and TypeScript, and familiar experience in Node.js,
          Express, and databases like MongoDB and MySQL. This allows me to
          manage projects from start-to-finish, from designing smooth UIs
          through connecting scalable backends.
        </p>
        <p className="mb-4">
          I have built software for product companies, clinics, and start-ups,
          delivering maximum performance, engagement, and lead capture through
          precise engineering. Writing elegant, up-to-date code and discovering
          new tools and trends thrills me.
        </p>
        <p>
          Outside of work, I enjoy cricket and a good cup of tea. I&apos;m
          always up for learning, experimenting, and growing and looking for
          opportunities wherein I can bring value toward impactful products and
          inventive teams.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
