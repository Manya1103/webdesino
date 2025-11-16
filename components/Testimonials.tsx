"use client";

import { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/lib/data";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  if (testimonials.length === 0) return null;

  return (
    <section className="py-16 lg:py-24 bg-cream" itemScope itemType="https://schema.org/Review">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl font-bold text-center text-teal mb-12 lg:mb-16">
          What Our Clients Say
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-lg relative">
            <Quote className="text-orange w-12 h-12 mb-4" />
            <p className="text-xl text-gray-700 mb-6 italic" itemProp="reviewBody">
              "{testimonials[currentIndex].text}"
            </p>
            <p className="text-lg font-semibold text-teal" itemProp="author" itemScope itemType="https://schema.org/Person">
              <span itemProp="name">— {testimonials[currentIndex].name}</span>
              {testimonials[currentIndex].company && (
                <span className="text-gray-600 text-base font-normal">, {testimonials[currentIndex].company}</span>
              )}
            </p>

            {/* Navigation Dots */}
            {testimonials.length > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-3 h-3 rounded-full transition ${
                      currentIndex === idx ? "bg-orange" : "bg-gray-300"
                    }`}
                    aria-label={`View testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
