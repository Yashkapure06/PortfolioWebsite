'use client';

import { motion, useReducedMotion } from 'framer-motion';

import { skillsData } from '@/lib/data';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export const Skills = () => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <div className="mt-10 flex w-full flex-wrap justify-between gap-10 px-5 sm:justify-center sm:px-0 md:mt-14 lg:justify-between">
      {skillsData.map(({ icon }, index) => (
        <motion.div
          key={index}
          variants={prefersReducedMotion ? undefined : fadeInAnimationVariants}
          initial={prefersReducedMotion ? undefined : 'initial'}
          whileInView={prefersReducedMotion ? undefined : 'animate'}
          viewport={{ once: true }}
          custom={index}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
};
