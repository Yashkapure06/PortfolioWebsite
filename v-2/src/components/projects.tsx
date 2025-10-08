'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { Project } from '@/components/project';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { projectsData } from '@/lib/data';

export const Projects = () => {
  const { ref } = useSectionInView('Projects');

  // Show only first 2 projects
  const featuredProjects = projectsData.slice(0, 4);

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
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
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
        <Button variant="outline" asChild>
          <Link href="/projects">
            View More Projects
            <Icons.arrowRight className="ml-2 size-4" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
};
