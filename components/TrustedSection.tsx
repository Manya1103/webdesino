"use client";

import Link from "next/link";
import { Award, Users, Briefcase, Shield } from "lucide-react";
import React from 'react';

const stats = [
  { icon: Users, label: "Happy Clients", value: "50+" },
  { icon: Briefcase, label: "Projects Delivered", value: "100+" },
  { icon: Shield, label: "Global Certifications", value: "10+" },
];

const certifications = [
  { name: "Google Certified Partner Delhi NCR", logo: "/google.jpg", link: "https://www.google.com/partners/" },
  { name: "WordPress Certified Agency Delhi NCR", logo: "⚡", link: "https://wordpress.org/" },
  { name: "Shopify Partner Web Development Delhi NCR", logo: "🛍️", link: "https://www.shopify.com/partners" },
  { name: "SEMRush Certified Digital Marketing Delhi NCR", logo: "📊", link: "https://www.semrush.com/" },
  { name: "DesignRush Accredited Web Development Company Delhi NCR", logo: "🏆", link: "https://designrush.com/" },
];

const logos = [
  { src: "/path/to/logo1.png", alt: "Company Logo 1" },
  { src: "/path/to/logo2.png", alt: "Company Logo 2" },
  { src: "/path/to/logo3.png", alt: "Company Logo 3" },
  // Add more logos as needed
];

export default function TrustedSection() {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-10 right-10 w-72 h-72 bg-orange/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-teal mb-6 animate-fade-in">
            Trusted Web Development Company in Delhi NCR
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
            At WebDesino, we are trusted by 50+ clients across Delhi NCR for delivering modern websites, SEO strategies, and digital marketing solutions. Recognized by global leaders like{" "}
            <Link href="https://www.google.com/partners/" target="_blank" rel="noopener noreferrer" className="text-orange font-semibold hover:underline">
              Google
            </Link>
            ,{" "}
            <Link href="https://wordpress.org/" target="_blank" rel="noopener noreferrer" className="text-orange font-semibold hover:underline">
              WordPress
            </Link>
            ,{" "}
            <Link href="https://www.shopify.com/partners" target="_blank" rel="noopener noreferrer" className="text-orange font-semibold hover:underline">
              Shopify
            </Link>
            ,{" "}
            <Link href="https://www.semrush.com/" target="_blank" rel="noopener noreferrer" className="text-orange font-semibold hover:underline">
              SEMRush
            </Link>
            , and{" "}
            <Link href="https://www.designrush.com/" target="_blank" rel="noopener noreferrer" className="text-orange font-semibold hover:underline">
              DesignRush
            </Link>
            , we ensure every project is SEO-optimized, professional, and result-driven.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto mb-12">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl glass-strong text-center hover-lift transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
              >
                <Icon className="mx-auto mb-4 text-orange" size={48} />
                <div className="text-4xl font-bold text-teal mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {certifications.map((cert, idx) => (
              <Link
                key={idx}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl glass hover:glass-strong text-center transition-all duration-300 hover-lift animate-fade-in"
                style={{ animationDelay: `${idx * 0.1 + 0.5}s` }}
                aria-label={cert.name}
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                  {cert.logo}
                </div>
                <div className="text-xs text-gray-600 group-hover:text-teal transition-colors font-medium">
                  {cert.name.replace(" Delhi NCR", "")}
                </div>
              </Link>
            ))}
          </div>

          {/* Optimize Your Marketing Badge */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass-strong animate-fade-in" style={{ animationDelay: '1s' }}>
              <Award className="text-orange" size={24} />
              <span className="text-sm font-bold text-teal uppercase tracking-wider">
                Optimize Your Marketing
              </span>
            </div>
          </div>
        </div>

        {/* Trusted by Companies Worldwide Banner */}
        <div className="bg-gray-50 dark:bg-gray-800 py-12 md:py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
              Trusted by Companies Worldwide
            </h2>
            <div className="relative overflow-hidden">
              <div className="flex animate-infinite-scroll">
                {logos.map((logo, index) => (
                  <div key={index} className="flex-shrink-0 w-48 mx-6">
                    <img
                      className="h-12 mx-auto"
                      src={logo.src}
                      alt={logo.alt}
                    />
                  </div>
                ))}
                {logos.map((logo, index) => (
                  <div key={`duplicate-${index}`} className="flex-shrink-0 w-48 mx-6">
                    <img
                      className="h-12 mx-auto"
                      src={logo.src}
                      alt={logo.alt}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}