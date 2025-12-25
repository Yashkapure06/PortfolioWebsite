'use client';

import { useReducedMotion } from 'framer-motion';

import { skillsData } from '@/lib/data';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/tooltip';

export const Skills = () => {
  const prefersReducedMotion = useReducedMotion();

  // Duplicate the skills array for seamless infinite scroll
  const duplicatedSkills = [...skillsData, ...skillsData];

  return (
    <TooltipProvider delayDuration={200}>
      <div className="mt-10 w-full overflow-hidden px-5 sm:px-0 md:mt-14">
        <div className="relative flex min-h-[120px] items-center pt-8">
          {/* Slider container */}
          <div
            className={`flex gap-10 ${
              prefersReducedMotion ? '' : 'animate-skills-scroll'
            }`}
          >
            {duplicatedSkills.map(({ name, icon }, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <div className="flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-110">
                    {icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>

          {/* Gradient overlays for fade effect */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </TooltipProvider>
  );
};
