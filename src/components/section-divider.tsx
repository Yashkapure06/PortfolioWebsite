'use client';

import { motion, useReducedMotion } from 'framer-motion';

export const SectionDivider = () => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.125 }}
      className="bg-muted my-5 h-16 w-1 rounded-full sm:my-20"
    ></motion.div>
  );
};
