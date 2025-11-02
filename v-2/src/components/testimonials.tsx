'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { testimonialsData } from '@/lib/data';

export const Testimonials = () => {
  const { ref } = useSectionInView('Testimonials');
  const prefersReducedMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  // Simple touch swipe handling
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.changedTouches[0].clientX);
  };
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(e.changedTouches[0].clientX);
  };
  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const delta = touchEndX - touchStartX;
    const threshold = 50; // px
    if (delta > threshold) {
      prevTestimonial();
    } else if (delta < -threshold) {
      nextTestimonial();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  // Structured data for testimonials
  const testimonialsStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Yash Kapure Portfolio',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: testimonialsData.length,
    },
    review: testimonialsData.map((testimonial) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: testimonial.name,
      },
      reviewBody: testimonial.content,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
      },
    })),
  };

  const headerInitial = prefersReducedMotion
    ? { opacity: 1 }
    : { opacity: 0, y: 100 };
  const headerTransition = prefersReducedMotion
    ? { duration: 0 }
    : { delay: 0.175 };

  const cardInitial = prefersReducedMotion
    ? { opacity: 1 }
    : { opacity: 0, y: 12 };
  const cardTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.3 };

  return (
    <section
      ref={ref}
      id="testimonials"
      className="my-8 sm:my-10 md:my-16 scroll-mt-28 overflow-x-hidden"
    >
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(testimonialsStructuredData),
        }}
      />
      <motion.div
        initial={headerInitial}
        whileInView={{ opacity: 1, y: 0 }}
        transition={headerTransition}
        viewport={{ once: true }}
      >
        <SectionHeading
          heading="Testimonials"
          content="What clients and colleagues say about my work"
        />
      </motion.div>

      <div
        className="relative mx-auto w-full max-w-sm sm:max-w-sm md:max-w-3xl lg:max-w-4xl px-2 sm:px-4"
        role="region"
        aria-label="Testimonials carousel"
      >
        {/* Carousel Container */}
        <div
          className="w-full overflow-hidden rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') prevTestimonial();
            if (e.key === 'ArrowRight') nextTestimonial();
          }}
          aria-roledescription="carousel"
          aria-live="polite"
        >
          <motion.div
            id="testimonials-track"
            className="flex transition-transform duration-400 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            transition={prefersReducedMotion ? { duration: 0 } : undefined}
          >
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.name} className="w-full shrink-0">
                <motion.div
                  initial={cardInitial}
                  animate={{ opacity: 1, y: 0 }}
                  transition={cardTransition}
                  className="bg-card text-card-foreground group rounded-lg border p-4 sm:p-6 md:p-8 lg:p-10 shadow-sm transition-all hover:shadow-md min-h-[320px] sm:min-h-[340px] md:min-h-[320px]"
                >
                  {/* Rating Stars */}
                  <div className="mb-6 flex justify-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icons.star
                        key={i}
                        aria-hidden="true"
                        className="size-4 sm:size-5 md:size-6 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <span className="sr-only">{`${testimonial.rating} out of 5`}</span>
                  </div>

                  {/* Testimonial Content */}
                  <blockquote
                    className="mb-6 sm:mb-8 text-center text-sm sm:text-sm md:text-lg lg:text-xl leading-relaxed italic break-words"
                    dangerouslySetInnerHTML={{
                      __html: `&ldquo;${testimonial.content}&rdquo;`,
                    }}
                  />

                  {/* Author Info */}
                  <div className="flex flex-col items-center">
                    {testimonial.avatar && (
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="border-muted mb-4 size-12 sm:size-16 md:size-20 rounded-full border-4 object-cover"
                      />
                    )}
                    <div className="text-center">
                      <div className="text-foreground text-base sm:text-lg md:text-xl font-semibold">
                        {testimonial.name}
                      </div>
                      <div className="text-muted-foreground text-xs sm:text-sm">
                        {testimonial.position}
                      </div>
                      <div className="text-muted-foreground text-xs sm:text-sm">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevTestimonial}
          className="hidden sm:inline-flex bg-background/80 hover:bg-background absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-1.5 sm:p-2 md:p-3 shadow-lg transition-all hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Previous testimonial"
          aria-controls="testimonials-track"
        >
          <Icons.arrowRight
            aria-hidden="true"
            className="size-4 sm:size-5 md:size-6 rotate-180"
          />
        </button>
        <button
          onClick={nextTestimonial}
          className="hidden sm:inline-flex bg-background/80 hover:bg-background absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1.5 sm:p-2 md:p-3 shadow-lg transition-all hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Next testimonial"
          aria-controls="testimonials-track"
        >
          <Icons.arrowRight
            aria-hidden="true"
            className="size-4 sm:size-5 md:size-6"
          />
        </button>

        {/* Dots Indicator */}
        <div className="mt-8 flex justify-center gap-2 px-2">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`size-2.5 sm:size-3 md:size-3.5 lg:size-4 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                index === currentIndex
                  ? 'bg-primary'
                  : 'bg-muted hover:bg-muted/80'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === currentIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
