import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services - Web Development, SEO & Digital Marketing | Webdesino",
  description: "Comprehensive web development, SEO, digital marketing, content writing, and graphic design services in Delhi NCR. Custom solutions for businesses to grow online.",
};

import { Globe, PenTool, Search as SearchIcon, BarChart2 } from "lucide-react";

const services = [
  {
    category: "Website Solutions",
    icon: Globe,
    services: [
      { name: "Web Development", description: "Custom website development with modern technologies and frameworks" },
      { name: "Web Design", description: "User-friendly, responsive designs that convert visitors to customers" },
      { name: "Web Optimisation", description: "Speed optimization, performance tuning, and Core Web Vitals improvement" },
      { name: "Website Maintenance", description: "24/7 monitoring, updates, backups, and technical support" },
      { name: "Website Security", description: "SSL certificates, malware protection, and security hardening" },
      { name: "E-commerce Development", description: "Complete online stores with payment integration and inventory management" },
    ],
  },
  {
    category: "Content Writing",
    icon: PenTool,
    services: [
      { name: "Website Content", description: "SEO-optimized website copy that engages and converts" },
      { name: "SEO Blog Writing", description: "Keyword-rich blog posts that rank and drive organic traffic" },
      { name: "Social Media Content", description: "Engaging posts for Facebook, Instagram, LinkedIn, and Twitter" },
      { name: "Email Newsletters", description: "Compelling email campaigns that boost engagement and sales" },
      { name: "Case Studies Writing", description: "Professional case studies showcasing your success stories" },
      { name: "Product Descriptions", description: "Persuasive product copy that increases conversions" },
      { name: "Editing & Proofreading", description: "Polish your content with professional editing services" },
    ],
  },
  {
    category: "SEO Services",
    icon: SearchIcon,
    services: [
      { name: "Keyword Research", description: "In-depth keyword analysis to target high-value search terms" },
      { name: "On-Page SEO", description: "Optimize meta tags, headers, content, and internal linking" },
      { name: "Off-Page SEO", description: "Link building, citations, and authority building strategies" },
      { name: "Technical SEO", description: "Site speed, mobile optimization, schema markup, and crawlability" },
      { name: "Local SEO", description: "Google My Business optimization for Delhi NCR local searches" },
      { name: "Link Building", description: "Quality backlinks from authoritative websites in your niche" },
      { name: "SEO Audits", description: "Comprehensive website analysis with actionable recommendations" },
      { name: "SEO Reporting", description: "Monthly performance reports with rankings and traffic insights" },
      { name: "GPT Search Optimization", description: "Optimize for AI search engines and voice search queries" },
    ],
  },
  {
    category: "Digital Marketing",
    icon: BarChart2,
    services: [
      { name: "Social Media Marketing", description: "Strategic campaigns across all major social platforms" },
      { name: "Content Marketing", description: "Content strategy and distribution for brand awareness" },
      { name: "Influencer Marketing", description: "Connect with influencers to expand your reach" },
      { name: "Online Reputation Management", description: "Monitor and improve your online brand reputation" },
      { name: "Marketing Automation", description: "Automated email and social media campaigns" },
      { name: "Google & Meta Ads", description: "PPC campaigns on Google Ads and Facebook/Instagram Ads" },
    ],
  },
];

const features = [
  "SEO-Optimized from Day One",
  "Mobile-First Responsive Design",
  "Fast Loading Speed",
  "24/7 Support & Maintenance",
  "Affordable Packages",
  "Proven Results with 100+ Projects",
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cream via-white to-cream py-16 lg:py-24 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-teal mb-6 animate-fade-in">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Comprehensive web development, SEO, and digital marketing solutions for businesses in Delhi NCR
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-2 px-4 py-2 glass rounded-full animate-fade-in"
                  style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
                >
                  <Check className="text-orange" size={16} />
                  <span className="text-sm font-medium text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-orange text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 hover-lift animate-fade-in"
              style={{ animationDelay: '0.8s' }}
            >
              Get Free Consultation
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((category, catIdx) => {
              const IconComponent = category.icon;
              return (
                <div key={catIdx} className="animate-fade-in" style={{ animationDelay: `${catIdx * 0.1}s` }}>
                  <div className="flex items-center gap-4 mb-8">
                    <IconComponent className="text-orange" size={48} />
                    <h2 className="text-3xl lg:text-4xl font-bold text-teal">
                      {category.category}
                    </h2>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service, idx) => (
                      <div
                        key={idx}
                        className="p-6 rounded-2xl glass hover:glass-strong transition-all duration-300 hover-lift"
                      >
                        <h3 className="text-xl font-bold text-teal mb-3">
                          {service.name}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center p-12 rounded-3xl bg-gradient-to-br from-teal to-teal/90 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Grow Your Business Online?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your project and create a strategy that delivers results
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-teal px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 hover-lift"
              >
                Start Your Project
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-teal transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
