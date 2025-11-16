"use client";

import Link from "next/link";
import { TrendingUp, ArrowUpRight } from "lucide-react";
import type { Result } from "@/lib/data";

interface ResultsSectionProps {
  results: Result[];
}

export default function ResultsSection({ results }: ResultsSectionProps) {
  if (results.length === 0) return null;

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-white via-cream/30 to-white relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-orange/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-6 animate-scale-in">
              <div className="w-16 h-1 bg-gradient-orange rounded-full" />
              <span className="text-sm font-bold text-orange uppercase tracking-wider">Success Stories</span>
              <div className="w-16 h-1 bg-gradient-teal rounded-full" />
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <span className="gradient-text">Remarkable Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Discover the most iconic travel locations with real-time growth indicators. See how we've helped Delhi NCR businesses achieve 100%+ growth in traffic, leads, and sales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {results.map((result, idx) => {
              const content = (
                <div
                  className="group relative glass-strong rounded-3xl overflow-hidden hover-lift cursor-pointer transition-all duration-500 animate-scale-in"
                  style={{ animationDelay: `${0.4 + idx * 0.1}s` }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange/0 via-orange/0 to-teal/0 group-hover:from-orange/10 group-hover:via-orange/5 group-hover:to-teal/10 transition-all duration-500" />
                  
                  <div className="aspect-video bg-gradient-to-br from-orange/20 to-teal/20 relative overflow-hidden">
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent animate-gradient" />
                    </div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <TrendingUp className="w-24 h-24 text-orange group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    
                    {/* Industry Badge */}
                    <div className="absolute top-4 left-4 px-4 py-2 glass-strong backdrop-blur-xl rounded-full text-sm font-bold text-teal border border-white/20">
                      {result.industry}
                    </div>

                    {/* Growth Badge */}
                    <div className="absolute top-4 right-4 px-4 py-2 bg-gradient-orange backdrop-blur-xl rounded-full text-sm font-bold text-white shadow-lg flex items-center gap-2 animate-pulse-glow">
                      <TrendingUp size={16} />
                      {result.growth}
                    </div>
                  </div>

                  <div className="p-8 relative z-10">
                    <h3 className="text-2xl font-bold text-teal mb-3 group-hover:text-orange transition-colors">{result.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{result.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-orange flex items-center justify-center text-white font-bold shadow-lg">
                          {result.growth}
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Growth Rate</div>
                          <div className="font-bold text-orange">Verified Results</div>
                        </div>
                      </div>
                      <ArrowUpRight className="text-teal group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={24} />
                    </div>
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute bottom-4 right-4 w-3 h-3 bg-orange rounded-full opacity-0 group-hover:opacity-100 animate-pulse-glow transition-opacity" />
                </div>
              );

              return result.slug ? (
                <Link key={idx} href={`/portfolio/${result.slug}`}>
                  {content}
                </Link>
              ) : (
                <div key={idx}>{content}</div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center glass-strong rounded-3xl p-8 lg:p-12 animate-fade-in" style={{ animationDelay: '1s' }}>
            <h3 className="text-2xl lg:text-3xl font-bold gradient-text mb-4">Ready to Achieve Similar Results?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Join 100+ businesses in Delhi NCR that have transformed their digital presence with WebDesino</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-orange text-white rounded-full font-semibold hover-lift hover-glow transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Start Your Success Story
                <ArrowUpRight size={18} />
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 glass border-2 border-teal text-teal rounded-full font-semibold hover:bg-teal hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                View All Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
