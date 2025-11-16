

import type { Feature } from "@/lib/data";
import { GoalIcon, Target } from "lucide-react";

interface WhyChooseUsProps {
  features: Feature[];
}

export default function WhyChooseUs({ features }: WhyChooseUsProps) {
  if (features.length === 0) return null;

  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Column - 3 items */}
          <div className="space-y-6 lg:space-y-8">
            {features.slice(0, 3).map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-6 lg:p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-5xl lg:text-6xl font-bold text-orange leading-none">
                    {feature.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-teal mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center - Graphic/3D Element */}
          <div className="flex flex-col items-center justify-center">
            <div className="text-2xl lg:text-3xl font-bold text-teal mb-6">
              Vision Webdesino
            </div>
            <div className="w-full h-[400px] lg:h-[500px] bg-gradient-to-br from-orange/20 to-teal/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
              {/* Placeholder for 3D graphic - replace with actual 3D element or iframe */}
              <div className="w-48 h-48 bg-gradient-to-br from-orange to-teal rounded-full opacity-30 animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center">
                <GoalIcon className="text-6xl text-white" />
              </div>
            </div>
          </div>

          {/* Right Column - 3 items */}
          <div className="space-y-6 lg:space-y-8">
            {features.slice(3, 6).map((feature, idx) => (
              <div
                key={idx + 3}
                className="bg-white p-6 lg:p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${(idx + 3) * 0.15}s` }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-5xl lg:text-6xl font-bold text-orange leading-none">
                    {feature.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-teal mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
