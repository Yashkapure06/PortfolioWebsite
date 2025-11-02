'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const Intro = () => {
  const { ref } = useSectionInView('Home');
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      ref={ref}
      id="home"
      className="my-10 flex scroll-mt-96 flex-col items-center gap-5 text-center sm:mt-28"
    >
      <motion.div
        initial={
          prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0 }
        }
        animate={
          prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }
        }
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { type: 'tween', duration: 0.2 }
        }
        className="mb-8"
      >
        <img
          src="/images/profile.jpg"
          alt="Yash Kapure Profile"
          className="size-36 rounded-full object-cover grayscale ring-2 ring-yellow-400 shadow-xl shadow-yellow-400/40 transition-all duration-300 hover:scale-105 hover:grayscale-0"
        />
      </motion.div>
      <motion.div
        initial={
          prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0 }
        }
        animate={
          prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }
        }
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { type: 'tween', duration: 0.2 }
        }
      >
        <Link
          href="#contact"
          className="flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 backdrop-blur transition-colors hover:bg-background/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <span className="relative flex size-2">
            <span className="absolute flex size-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative flex size-2 rounded-full bg-green-400"></span>
          </span>
          <span className="font-mono text-sm">Available for work!</span>
        </Link>
      </motion.div>
      <motion.p
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { delay: 0.05, duration: 0.2, type: 'tween' }
        }
        className="mt-2 text-xs text-muted-foreground"
      >
        Currently based in United Kingdom — open to relocate
      </motion.p>
      <motion.h1
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: prefersReducedMotion ? 0 : 0 }}
        className="font-heading max-w-3xl text-4xl font-extrabold md:text-5xl"
      >
        Hi I&#39;m
        <span className="bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent">
          Yash Kapure
        </span>
        - Frontend Engineer with Full-Stack Expertise.
      </motion.h1>
      <motion.p
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: prefersReducedMotion ? 0 : 0 }}
        transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.1 }}
        className="text-muted-foreground max-w-xl"
      >
        I build fast, accessible, and SEO-friendly web applications using
        React.js, Next.js, Tailwind CSS, and shadcn/ui. With 3.5+ years of
        experience and strong full-stack skills in JavaScript and TypeScript, I
        am passionate about creating smooth user interfaces, maintaining
        excellent UI/UX, and writing clean, maintainable code. I craft modern
        user experiences while also delivering scalable backend integrations
        when needed.
      </motion.p>
      <motion.div
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: prefersReducedMotion ? 0 : 0 }}
        transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.1 }}
        // Responsive: stack vertically on small screens, row wrap on larger screens
        className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center"
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-2 flex-1">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="#contact">
              Get in touch{' '}
              <Icons.arrowRight aria-hidden="true" className="ml-2 size-4" />
            </Link>
          </Button>
          <Button
            variant="secondary"
            size="lg"
            asChild
            className="w-full sm:w-auto"
          >
            <Link href="#projects">
              View projects{' '}
              <Icons.arrowRight aria-hidden="true" className="ml-2 size-4" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto hidden sm:flex"
            asChild
          >
            <a
              href="/cv/Yash Kapure CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV{' '}
              <Icons.download aria-hidden="true" className="ml-2 size-4" />
            </a>
          </Button>
        </div>
        <div className="flex flex-row gap-2 justify-center sm:justify-start flex-wrap">
          <Button variant="outline" size="icon" asChild>
            <Link
              href="https://linkedin.com/in/yash-kapure"
              aria-label="Linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.linkedin className="size-5" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link
              href="https://github.com/Yashkapure06"
              aria-label="Github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.github className="size-5" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link
              href="https://www.instagram.com/_yashkapure_"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.instagram className="size-5" />
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link
              href="https://twitter.com/KapureYash"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.twitter className="size-5" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};
