'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const Intro = () => {
  const { ref } = useSectionInView('Home');

  return (
    <section
      ref={ref}
      id="home"
      className="my-10 flex scroll-mt-96 flex-col items-center gap-5 text-center sm:mt-28"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'tween',
          duration: 0.2,
        }}
        className="mb-8"
      >
        <img
          src="/images/profile.jpg"
          alt="Yash Kapure Profile"
          className="size-36 rounded-full object-cover grayscale transition-all duration-300 hover:scale-105 hover:grayscale-0"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'tween',
          duration: 0.2,
        }}
      >
        <Link
          href="#contact"
          className="flex items-center gap-3 rounded border px-3 py-1"
        >
          <span className="relative flex size-2">
            <span className="absolute flex size-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative flex size-2 rounded-full bg-green-400"></span>
          </span>
          <span className="font-mono text-sm">Available for work!</span>
        </Link>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-heading max-w-3xl text-4xl font-extrabold md:text-5xl"
      >
        Hi I&#39;m
        <span className="bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent">
          Yash Kapure
        </span>
        - Frontend Engineer with Full-Stack Expertise.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
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
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-row gap-2"
      >
        <Button asChild size="lg">
          <Link href="#contact">
            Get in touch <Icons.arrowRight className="ml-2 size-4" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" className="hidden sm:flex" asChild>
          <a
            href="https://drive.google.com/file/d/1D2gsimV47zEsubjK2urHGWpY_h-iLyBB/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV <Icons.download className="ml-2 size-4" />
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <Link
            href="https://linkedin.com/in/yash-kapure"
            aria-label="Linkedin"
            target="_blank"
          >
            <Icons.linkedin className="size-5" />
          </Link>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <Link
            href="https://github.com/Yashkapure06"
            aria-label="Github"
            target="_blank"
          >
            <Icons.github className="size-5" />
          </Link>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <Link
            href="https://www.instagram.com/_yashkapure_"
            aria-label="Instagram"
            target="_blank"
          >
            <Icons.instagram className="size-5" />
          </Link>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <Link
            href="https://twitter.com/KapureYash"
            aria-label="Twitter"
            target="_blank"
          >
            <Icons.twitter className="size-5" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
};
