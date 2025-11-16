"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, ChevronDown, Menu, X } from "lucide-react";

// Services dropdown content
const servicesDropdown = {
  "Website Solutions": [
    { name: "Web Development", href: "/services" },
    { name: "Web Design", href: "/services" },
    { name: "Web Optimisation", href: "/services" },
    { name: "Website Maintenance Services", href: "/services" },
    { name: "Website Security Services", href: "/services" },
    { name: "E-commerce Development", href: "/services" },
  ],
  "Content Writing": [
    { name: "Website Content", href: "/services" },
    { name: "SEO Blog Writing", href: "/services" },
    { name: "Social Media Content", href: "/services" },
    { name: "Email Newsletters", href: "/services" },
    { name: "Case Studies Writing", href: "/services" },
    { name: "Product Descriptions", href: "/services" },
    { name: "Editing and Proofreading", href: "/services" },
  ],
  "SEO": [
    { name: "Keyword Research", href: "/services" },
    { name: "On-Page SEO", href: "/services" },
    { name: "Off-Page SEO", href: "/services" },
    { name: "Technical SEO", href: "/services" },
    { name: "Local SEO", href: "/services" },
    { name: "Outreach & Link Building", href: "/services" },
    { name: "SEO Audits", href: "/services" },
    { name: "SEO Reporting and Analysis", href: "/services" },
    { name: "GPT Search Optimization", href: "/services" },
  ],
  "Digital Marketing": [
    { name: "Social Media Marketing", href: "/services" },
    { name: "Content Marketing", href: "/services" },
    { name: "Influencer Marketing", href: "/services" },
    { name: "Online Reputation Management", href: "/services" },
    { name: "Marketing Automation", href: "/services" },
    { name: "Google & Meta Ads", href: "/services" },
  ],
};

// Work dropdown content
const workDropdown = [
  { emoji: "📚", name: "BookBuzzz", href: "/case-studies/bookbuzzz" },
  { emoji: "💊", name: "LuckyNutra", href: "/case-studies/luckynutra" },
  { emoji: "🥜", name: "BuyKhariBauli", href: "/case-studies/buykharibauli" },
  { emoji: "🎓", name: "Meritshot", href: "/case-studies/meritshot" },
];

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Our Services", href: "/services", hasDropdown: true },
  { label: "Our Work", href: "/portfolio", hasDropdown: true },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function BottomNav() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null);

  return (

    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-teal rounded-full shadow-2xl px-4 py-3 flex items-center gap-2">
          {navItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 rounded-full text-white hover:bg-white/20 transition-all duration-200 font-medium text-sm whitespace-nowrap"
                  aria-label={item.label}
                >
                  {Icon && <Icon size={20} />}
                  {item.label && <span>{item.label}</span>}
                  {item.hasDropdown && (
                    <ChevronDown
                      size={14}
                      className="transition-transform duration-200"
                      style={{ transform: hoveredItem === item.label ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    />
                  )}
                </Link>

                {/* Services Dropdown */}
                {item.label === "Our Services" && hoveredItem === item.label && (
                  <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-2xl p-6 w-[720px] border border-gray-100">
                    <div className="grid grid-cols-3 gap-6">
                      {Object.entries(servicesDropdown).map(([category, services]) => (
                        <div key={category}>
                          <h3 className="font-bold text-teal mb-3 text-sm uppercase tracking-wide">
                            {category}
                          </h3>
                          <ul className="space-y-2">
                            {services.map((service) => (
                              <li key={service.name}>
                                <Link
                                  href={service.href}
                                  className="text-gray-700 hover:text-teal transition-colors text-sm block py-1 hover:translate-x-1 transform duration-200"
                                >
                                  {service.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Work Dropdown */}
                {item.label === "Our Work" && hoveredItem === item.label && (
                  <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-2xl p-5 w-[280px] border border-gray-100">
                    <h3 className="font-bold text-teal mb-3 text-sm uppercase tracking-wide">
                      Featured Projects
                    </h3>
                    <ul className="space-y-2">
                      {workDropdown.map((project) => (
                        <li key={project.name}>
                          <Link
                            href={project.href}
                            className="flex items-center gap-3 text-gray-700 hover:text-teal hover:bg-gray-50 transition-all text-sm p-2 rounded-lg group"
                          >
                            <span className="text-xl group-hover:scale-110 transition-transform">
                              {project.emoji}
                            </span>
                            <span className="font-medium">{project.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/case-studies"
                      className="mt-4 block text-center text-teal text-sm font-semibold hover:underline"
                    >
                      View All Projects →
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="w-14 h-14 bg-teal text-white rounded-full shadow-2xl flex items-center justify-center hover-lift hover-glow transition-all"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
        )}

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className="fixed bottom-24 right-6 left-6 bg-white rounded-3xl shadow-2xl p-6 max-h-[70vh] overflow-y-auto border border-white/20 animate-scale-in">
            <div className="space-y-2">
              {navItems.map((item, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-orange/10 hover:text-orange transition-all font-medium flex-1"
                      onClick={() => !item.hasDropdown && setMobileMenuOpen(false)}
                    >
                      {item.icon && <item.icon size={20} />}
                      <span>{item.label}</span>
                    </Link>
                    {item.hasDropdown && (
                      <button
                        onClick={() => setMobileExpandedItem(mobileExpandedItem === item.label ? null : item.label)}
                        className="p-3 rounded-xl hover:bg-orange/10 transition-all"
                      >
                        <ChevronDown
                          size={20}
                          className={`transition-transform ${mobileExpandedItem === item.label ? 'rotate-180' : ''}`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Mobile Services Dropdown */}
                  {item.label === "Our Services" && mobileExpandedItem === item.label && (
                    <div className="ml-4 mt-2 space-y-4 pl-4 border-l-2 border-orange/20">
                      {Object.entries(servicesDropdown).map(([category, services]) => (
                        <div key={category}>
                          <h4 className="font-bold text-teal text-xs uppercase tracking-wide mb-2">{category}</h4>
                          <ul className="space-y-1">
                            {services.map((service) => (
                              <li key={service.name}>
                                <Link
                                  href={service.href}
                                  className="text-sm text-gray-600 hover:text-orange transition-colors block py-1"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {service.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Mobile Work Dropdown */}
                  {item.label === "Our Work" && mobileExpandedItem === item.label && (
                    <div className="ml-4 mt-2 space-y-2 pl-4 border-l-2 border-orange/20">
                      {workDropdown.map((project) => (
                        <Link
                          key={project.name}
                          href={project.href}
                          className="flex items-center gap-3 text-gray-700 hover:text-orange transition-all text-sm p-2 rounded-lg"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className="text-xl">{project.emoji}</span>
                          <span className="font-medium">{project.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
