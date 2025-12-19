'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Breadcrumb } from '@/components/breadcrumb';
import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { Link } from '@/i18n/routing';
import { projectsData } from '@/lib/data';

export default function ProjectsPage() {
  const t = useTranslations('projects');

  // Map project titles to translation keys
  const projectKeyMap: Record<string, string> = {
    'Calm Llama - AI Chatbot': 'calmLlama',
    'Mini Otio - AI Research Assistant': 'miniOtio',
    'EC2 Cloud Cost Analyzer': 'ec2Analyzer',
    'Online Interview Assessment System (OIAS)': 'oias',
    'Dragon Sino Group': 'dragonSino',
    'Netflix Clone using ReactJs': 'netflixClone',
    'Shangrila Petition Platform': 'shangrila',
    'Earthly Internship': 'earthly',
    'The Kolorado Paints': 'kolorado',
    TechnoKraft: 'technokraft',
    'BEST GST Course': 'bestGst',
    'Affinix Digital': 'affinix',
    'Octane Apps': 'octaneApps',
    "Dr. Manisha's Yoga Institute": 'yogaInstitute',
    'Anandlok Ayurveda': 'anandlok',
    'News-o-Pedia': 'newspedia',
    'Select Text to Speech Chrome extention': 'textToSpeech',
    'Restro - A Restaurent Website': 'restro',
    'OpenSource Contribution in Chakra-UI': 'chakraUI',
    'YouTube Clone using ReactJs': 'youtubeClone',
    'Blogging Website': 'blogging',
    'Personal Portfolio': 'portfolio1',
    'Space Talks ✨': 'spaceTalks',
    'Movie WebApp': 'movieApp',
    'Complete React Website': 'reactWebsite',
    'Wedding Invitation Website': 'wedding',
  };
  return (
    <main id="main-content" className="container mx-auto px-4 py-16">
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
          {t('heading')}
        </h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
          {t('content')}
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => {
          const projectKey = projectKeyMap[project.title];
          const translatedTitle = projectKey
            ? t(`items.${projectKey}.title`)
            : project.title;
          const translatedDescription = projectKey
            ? t(`items.${projectKey}.description`)
            : project.description;

          return (
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
                    alt={translatedTitle}
                    className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                  />
                ) : (
                  <Image
                    src={project.image}
                    alt={translatedTitle}
                    width={400}
                    height={192}
                    className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">
                  {translatedTitle}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {translatedDescription}
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
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1"
                  >
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icons.github className="mr-2 size-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    asChild
                    className="flex-1"
                  >
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
          );
        })}
      </div>
    </main>
  );
}
