"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/data";

interface ServicesPillsProps {
  services: Service[];
}

// Success stories categories for horizontal ticker
const categories = [
  "eCommerce",
  "Web Solutions",
  "Mobile Apps",
  "ERP/CRM",
  "Digital Marketing",
];

export default function ServicesPills({ services }: ServicesPillsProps) {
  if (services.length === 0) return null;

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-white via-cream/30 to-white relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Horizontal scrolling ticker */}
        <div className="mb-12 overflow-hidden">
          <div className="flex gap-8 animate-scroll-horizontal-fast">
            {[...categories, ...categories, ...categories, ...categories].map((category, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 px-6 py-3 bg-white rounded-full shadow-md text-teal font-bold text-lg whitespace-nowrap hover-lift cursor-pointer"
              >
                {category}
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-6 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <span className="gradient-text">What do you want to achieve?</span>
        </h2>

        <div className="space-y-3 max-w-5xl mx-auto">
          {services.map((service, idx) => (
            <Link
              key={idx}
              href={service.href}
              className="group relative flex items-center justify-between w-full bg-gradient-orange text-white px-8 py-5 lg:py-6 rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] hover-lift animate-fade-in overflow-hidden"
              style={{ animationDelay: `${idx * 0.1}s` }}
              aria-label={`${service.title} - Web Development Services Delhi`}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal via-teal/80 to-teal opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <span className="text-lg lg:text-xl font-semibold relative z-10">{service.title}</span>
              <ArrowRight
                size={24}
                className="group-hover:translate-x-2 transition-transform flex-shrink-0 relative z-10"
              />
            </Link>
          ))}
        </div>

        {/* Additional decorative element */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="inline-flex items-center gap-3 px-6 py-3 glass-strong rounded-full">
            <div className="w-3 h-3 bg-orange rounded-full animate-pulse-glow" />
            <span className="text-gray-700 font-medium">100+ Projects Delivered Successfully</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-horizontal-fast {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }
        .animate-scroll-horizontal-fast {
          animation: scroll-horizontal-fast 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
