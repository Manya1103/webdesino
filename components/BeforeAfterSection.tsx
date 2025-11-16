"use client";

import { useState } from "react";
import { getIndustries } from "@/lib/data";
import { ArrowRight, TrendingUp, Users, DollarSign, BarChart, Rocket } from "lucide-react";

interface BeforeAfterSectionProps {
  industries?: string[];
}

export default function BeforeAfterSection({ industries: propIndustries }: BeforeAfterSectionProps = { industries: undefined }) {
  const industries = propIndustries || getIndustries();
  const [activeFilter, setActiveFilter] = useState("All");
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-cream via-white to-cream relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-orange/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Animated scrolling ticker */}
        <div className="mb-12 overflow-hidden">
          <div className="flex gap-8 animate-scroll-horizontal-fast">
            {["eCommerce", "Web Solutions", "Mobile Apps", "ERP/CRM", "Digital Marketing", "eCommerce", "Web Solutions", "Mobile Apps"].map((category, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 px-6 py-3 glass-strong rounded-full text-teal font-bold text-lg whitespace-nowrap hover-lift cursor-pointer"
              >
                {category}
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-4xl lg:text-6xl font-bold text-center mb-4 animate-scale-in">
          <span className="gradient-text">Before and After</span>
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          See the transformation from outdated to outstanding
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => setActiveFilter(industry)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover-lift ${
                activeFilter === industry
                  ? "bg-gradient-orange text-white shadow-lg"
                  : "glass-strong text-gray-700 hover:scale-105"
              }`}
            >
              {industry}
            </button>
          ))}
        </div>

        {/* Before/After Comparison with Slider */}
        <div className="max-w-6xl mx-auto mb-16 animate-scale-in" style={{ animationDelay: '0.6s' }}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            {/* Before Image */}
            <div className="aspect-video bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 relative">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                <BarChart className="text-8xl mb-4 opacity-50" />
                <h3 className="text-3xl font-bold mb-4">Before</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="glass p-4 rounded-xl">
                    <div className="text-2xl font-bold text-red-400">↓ 70%</div>
                    <div className="text-sm">Traffic</div>
                  </div>
                  <div className="glass p-4 rounded-xl">
                    <div className="text-2xl font-bold text-red-400">₹30K</div>
                    <div className="text-sm">Revenue</div>
                  </div>
                  <div className="glass p-4 rounded-xl">
                    <div className="text-2xl font-bold text-red-400">2.1%</div>
                    <div className="text-sm">Conversion</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* After Image - Overlay */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-orange via-orange/90 to-teal"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                <Rocket className="text-8xl mb-4" />
                <h3 className="text-3xl font-bold mb-4">After</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="glass-strong p-4 rounded-xl">
                    <div className="text-2xl font-bold text-green-300">↑ 532%</div>
                    <div className="text-sm">Traffic</div>
                  </div>
                  <div className="glass-strong p-4 rounded-xl">
                    <div className="text-2xl font-bold text-green-300">₹6L+</div>
                    <div className="text-sm">Revenue</div>
                  </div>
                  <div className="glass-strong p-4 rounded-xl">
                    <div className="text-2xl font-bold text-green-300">8.5%</div>
                    <div className="text-sm">Conversion</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize group-hover:w-2 transition-all z-20"
              style={{ left: `${sliderPosition}%` }}
              onMouseDown={(e) => {
                const rect = e.currentTarget.parentElement!.getBoundingClientRect();
                const handleMove = (moveEvent: MouseEvent) => {
                  const x = moveEvent.clientX - rect.left;
                  const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
                  setSliderPosition(percent);
                };
                const handleUp = () => {
                  document.removeEventListener('mousemove', handleMove);
                  document.removeEventListener('mouseup', handleUp);
                };
                document.addEventListener('mousemove', handleMove);
                document.addEventListener('mouseup', handleUp);
              }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                <ArrowRight className="text-teal" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="glass-strong p-8 rounded-3xl text-center hover-lift">
            <TrendingUp className="w-12 h-12 mx-auto mb-4 text-orange" />
            <div className="text-4xl font-bold gradient-text mb-2">532%</div>
            <div className="text-gray-600 font-medium">Average Growth Rate</div>
          </div>
          <div className="glass-strong p-8 rounded-3xl text-center hover-lift">
            <Users className="w-12 h-12 mx-auto mb-4 text-teal" />
            <div className="text-4xl font-bold gradient-text mb-2">50+</div>
            <div className="text-gray-600 font-medium">Successful Transformations</div>
          </div>
          <div className="glass-strong p-8 rounded-3xl text-center hover-lift">
            <DollarSign className="w-12 h-12 mx-auto mb-4 text-orange" />
            <div className="text-4xl font-bold gradient-text mb-2">₹6.3 Cr+</div>
            <div className="text-gray-600 font-medium">Revenue Generated</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-horizontal-fast {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-horizontal-fast {
          animation: scroll-horizontal-fast 20s linear infinite;
        }
      `}</style>
    </section>
  );
}

