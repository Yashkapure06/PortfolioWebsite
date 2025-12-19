'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { Project } from '@/components/project';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { Link } from '@/i18n/routing';
import { projectsData } from '@/lib/data';

export const Projects = () => {
  const { ref } = useSectionInView('Projects', 0.3);
  const t = useTranslations('projects');
  const prefersReducedMotion = useReducedMotion();
  const headingInitial = prefersReducedMotion
    ? { opacity: 1 }
    : { opacity: 0, y: 100 };
  const headingTransition = prefersReducedMotion
    ? { duration: 0 }
    : { delay: 0.175 };
  const ctaInitial = prefersReducedMotion
    ? { opacity: 1 }
    : { opacity: 0, y: 20 };
  const ctaTransition = prefersReducedMotion ? { duration: 0 } : { delay: 0.3 };

  // Show only first 2 projects
  const featuredProjects = projectsData.slice(0, 4);

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
    <section id="projects" className="my-10 scroll-mt-28 md:mb-20">
      <div ref={ref}>
        <motion.div
          initial={headingInitial}
          whileInView={{ opacity: 1, y: 0 }}
          transition={headingTransition}
          viewport={{ once: true }}
        >
          <SectionHeading heading={t('heading')} content={t('content')} />
        </motion.div>
      </div>
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
        {featuredProjects.map((project, index) => {
          const projectKey = projectKeyMap[project.title];
          const translatedTitle = projectKey
            ? t(`items.${projectKey}.title`)
            : project.title;
          const translatedDescription = projectKey
            ? t(`items.${projectKey}.description`)
            : project.description;

          return (
            <Project
              key={project.title}
              project={project}
              index={index}
              translatedTitle={translatedTitle}
              translatedDescription={translatedDescription}
            />
          );
        })}
      </div>
      <motion.div
        initial={ctaInitial}
        whileInView={{ opacity: 1, y: 0 }}
        transition={ctaTransition}
        viewport={{ once: true }}
        className="mt-8 flex justify-center"
      >
        <Button variant="outline" asChild>
          <Link href="/projects">
            {t('viewMore')}{' '}
            <Icons.arrowRight aria-hidden="true" className="ml-2 size-4" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
};
