'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { testimonialsData } from '@/lib/data';

export const Testimonials = () => {
  const { ref } = useSectionInView('Testimonials');
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <section
      ref={ref}
      id="testimonials"
      className="my-10 scroll-mt-28 md:mb-20"
    >
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(testimonialsStructuredData),
        }}
      />
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
          heading="Testimonials"
          content="What clients and colleagues say about my work"
        />
      </motion.div>

      <div className="relative mx-auto max-w-4xl">
        {/* Carousel Container */}
        <div className="overflow-hidden rounded-lg">
          <motion.div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.name} className="w-full shrink-0 px-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-card text-card-foreground group rounded-lg border p-8 shadow-sm transition-all hover:shadow-lg"
                >
                  {/* Rating Stars */}
                  <div className="mb-6 flex justify-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icons.star
                        key={i}
                        className="size-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="mb-8 text-center text-lg leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex flex-col items-center">
                    {testimonial.avatar && (
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="border-muted mb-4 size-16 rounded-full border-4 object-cover"
                      />
                    )}
                    <div className="text-center">
                      <div className="text-foreground text-xl font-semibold">
                        {testimonial.name}
                      </div>
                      <div className="text-muted-foreground">
                        {testimonial.position}
                      </div>
                      <div className="text-muted-foreground text-sm">
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
          className="bg-background/80 hover:bg-background absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-2 shadow-lg transition-all hover:shadow-xl"
          aria-label="Previous testimonial"
        >
          <Icons.arrowRight className="size-5 rotate-180" />
        </button>
        <button
          onClick={nextTestimonial}
          className="bg-background/80 hover:bg-background absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-2 shadow-lg transition-all hover:shadow-xl"
          aria-label="Next testimonial"
        >
          <Icons.arrowRight className="size-5" />
        </button>

        {/* Dots Indicator */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`size-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-primary'
                  : 'bg-muted hover:bg-muted/80'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
