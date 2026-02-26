'use client';

import { useCallback, useEffect, useRef } from 'react';

import confetti from 'canvas-confetti';
import { useReducedMotion } from 'framer-motion';
import { gsap } from 'gsap';

const TARGET_USERS = 80000;
const SCHOOL_PRIDE_COLORS = ['#bb0000', '#ffffff'];

export const MilestoneStat = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const shineRef = useRef<HTMLSpanElement>(null);
  const confettiFrameRef = useRef<number | null>(null);
  const confettiEndAtRef = useRef(0);
  const prefersReducedMotion = useReducedMotion();

  const stopConfettiStream = useCallback(() => {
    if (confettiFrameRef.current !== null) {
      window.cancelAnimationFrame(confettiFrameRef.current);
      confettiFrameRef.current = null;
    }
  }, []);

  const handleCelebrateHover = useCallback(() => {
    if (prefersReducedMotion) {
      return;
    }

    const container = containerRef.current;
    const shineNode = shineRef.current;

    if (!container || !shineNode) {
      return;
    }

    gsap.killTweensOf([container, shineNode]);

    const burstTimeline = gsap.timeline({
      defaults: { overwrite: 'auto' },
    });

    burstTimeline.fromTo(
      container,
      { scale: 1 },
      {
        scale: 1.02,
        duration: 0.28,
        repeat: 1,
        yoyo: true,
        ease: 'power1.out',
      },
      0,
    );

    burstTimeline.fromTo(
      shineNode,
      { xPercent: -165, opacity: 0 },
      { xPercent: 185, opacity: 0.95, duration: 1.25, ease: 'power2.inOut' },
      0,
    );
    burstTimeline.to(shineNode, { opacity: 0, duration: 0.28 }, 1.05);

    if (confettiFrameRef.current !== null) {
      confettiEndAtRef.current = Date.now() + 15000;
      return;
    }

    confettiEndAtRef.current = Date.now() + 15000;

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: SCHOOL_PRIDE_COLORS,
        zIndex: 1200,
      });

      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: SCHOOL_PRIDE_COLORS,
        zIndex: 1200,
      });

      if (Date.now() < confettiEndAtRef.current) {
        confettiFrameRef.current = window.requestAnimationFrame(frame);
        return;
      }

      stopConfettiStream();
    };

    frame();
  }, [prefersReducedMotion, stopConfettiStream]);

  useEffect(() => {
    const container = containerRef.current;
    const numberNode = numberRef.current;
    const shineNode = shineRef.current;

    if (!container || !numberNode || !shineNode) {
      return;
    }

    const formatter = new Intl.NumberFormat('en-US');
    const renderNumber = (value: number) => {
      numberNode.textContent = `${formatter.format(Math.round(value))}+`;
    };

    renderNumber(prefersReducedMotion ? TARGET_USERS : 0);

    if (prefersReducedMotion) {
      gsap.set(container, { autoAlpha: 1, y: 0, scale: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (!entry?.isIntersecting) {
            return;
          }

          observer.disconnect();
          const counter = { value: 0 };

          const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
          timeline.fromTo(
            container,
            { autoAlpha: 0, y: 18, scale: 0.98 },
            { autoAlpha: 1, y: 0, scale: 1, duration: 0.9 },
          );

          timeline.to(
            counter,
            {
              value: TARGET_USERS,
              duration: 2.1,
              ease: 'steps(72)',
              snap: { value: 1 },
              onUpdate: () => renderNumber(counter.value),
              onComplete: () => {
                gsap.fromTo(
                  numberNode,
                  { scale: 1 },
                  {
                    scale: 1.025,
                    duration: 0.22,
                    yoyo: true,
                    repeat: 1,
                    ease: 'power2.out',
                  },
                );
              },
            },
            0.15,
          );

          timeline.fromTo(
            shineNode,
            { xPercent: -165, opacity: 0 },
            { xPercent: 185, opacity: 0.9, duration: 1.4, ease: 'power2.inOut' },
            0.45,
          );

          timeline.to(shineNode, { opacity: 0, duration: 0.3 }, '>-0.08');
        },
        { threshold: 0.55 },
      );

      observer.observe(container);
    }, container);

    return () => {
      ctx.revert();
      stopConfettiStream();
    };
  }, [prefersReducedMotion, stopConfettiStream]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleCelebrateHover}
      onMouseLeave={stopConfettiStream}
      className="relative mt-4 inline-flex flex-col items-center overflow-hidden rounded-2xl border border-slate-300/20 bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-slate-900/70 px-5 py-3 text-center shadow-[0_10px_30px_-15px_rgba(100,116,139,0.85)] backdrop-blur-sm"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(226,232,240,0.15),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/20" />
      <div className="pointer-events-none absolute inset-[1px] rounded-2xl border border-white/5" />
      <div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-white/65 to-transparent" />
      <span
        ref={numberRef}
        className="relative z-10 tabular-nums bg-gradient-to-r from-slate-100 via-slate-300 to-slate-100 bg-[length:200%_100%] bg-clip-text text-3xl font-extrabold tracking-tight text-transparent md:text-4xl"
      >
        80,000+
      </span>
      <span className="relative z-10 mt-1 text-xs uppercase tracking-[0.18em] text-slate-300/90">
        Portfolio visits in the last 12 months
      </span>
      <span className="relative z-10 mt-1 text-[10px] uppercase tracking-[0.16em] text-slate-400/80">
        Updated weekly
      </span>
      <span
        ref={shineRef}
        className="pointer-events-none absolute inset-y-[-15%] left-[-60%] w-[70%] -skew-x-12 bg-gradient-to-r from-transparent via-white/95 to-transparent opacity-0 blur-[1px]"
      />
    </div>
  );
};
