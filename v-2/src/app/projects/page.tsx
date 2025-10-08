'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { Breadcrumb } from '@/components/breadcrumb';
import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { projectsData } from '@/lib/data';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Breadcrumb />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Button variant="outline" asChild className="mb-8">
          <Link href="/">
            <Icons.arrowRight className="mr-2 size-4 rotate-180" />
            Back to Home
          </Link>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-12 text-center"
      >
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          My Projects
        </h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
          A collection of projects I&apos;ve worked on, showcasing my skills in
          frontend and full-stack development.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.1 * index,
            }}
            className="bg-card text-card-foreground group overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-lg"
          >
            <div className="overflow-hidden">
              {project.image.startsWith('http') ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                />
              ) : (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={192}
                  className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                />
              )}
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                {project.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border px-2 py-1 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icons.github className="mr-2 size-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="default" size="sm" asChild className="flex-1">
                  <a
                    href={project.links.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icons.preview className="mr-2 size-4" />
                    Live Visit
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
