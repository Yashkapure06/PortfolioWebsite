'use client';

import { motion } from 'framer-motion';

import { Project } from '@/components/project';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { projectsData } from '@/lib/data';

export const Projects = () => {
  const { ref } = useSectionInView('Projects');

  // Show only first 2 projects
  const featuredProjects = projectsData.slice(0, 2);

  return (
    <section ref={ref} id="projects" className="my-10 scroll-mt-28 md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.175,
        }}
        viewport={{
          once: true,
        }}
      >
        <SectionHeading
          heading="My Projects"
          content="Projects I worked on. Each of them containing its own case study."
        />
      </motion.div>
      <div className="flex flex-col gap-7 md:flex-row">
        {featuredProjects.map((project, index) => (
          <Project key={project.title} project={project} index={index} />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.3,
        }}
        viewport={{
          once: true,
        }}
        className="mt-8 flex justify-center"
      >
        To see all projects, Please contact me. Thank you.
      </motion.div>
    </section>
  );
};
