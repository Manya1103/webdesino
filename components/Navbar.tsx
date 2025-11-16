"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Phone, Mail, Menu, X, ChevronDown, ArrowRight, ChevronLeft, ChevronRight, Code, Brush, Smartphone, Rocket, Briefcase, ShoppingCart, PenTool, Target, MapPin, Power, BarChart, Search } from "lucide-react";
import Image from "next/image";

const categories = [
  { icon: <Code />, label: "Web Development" },
  { icon: <Brush />, label: "Graphic Design" },
  { icon: <Smartphone />, label: "Mobile Apps" },
  { icon: <Rocket />, label: "SEO Services" },
  { icon: <Briefcase />, label: "Digital Marketing" },
  { icon: <ShoppingCart />, label: "E-commerce" },
  { icon: <PenTool />, label: "Content Writing" },
  { icon: <Target />, label: "Branding" },
  { icon: <MapPin />, label: "Local SEO" },
  { icon: <Power />, label: "WordPress Development" },
  { icon: <BarChart />, label: "Social Media Marketing" },
  { icon: <Search />, label: "Technical SEO" },
];

const megaMenuItems = [
  {
    title: "Our Websites",
    items: ["Portfolio Websites", "E-commerce Websites", "Corporate Websites"]
  },
  {
    title: "Our Apps",
    items: ["Mobile Apps", "Web Apps", "Progressive Web Apps"]
  },
  {
    title: "Digital Marketing",
    items: ["SEO Services", "Social Media Marketing", "PPC Advertising"]
  },
  {
    title: "Graphic Designing",
    items: ["Logo Design", "Brand Identity", "UI/UX Design"]
  }
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar - Tier 1 */}
      <div className="bg-teal text-white py-3">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl hover:text-orange transition">
              <span>Webdesino</span>
              <span className="text-orange">.com</span>
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <a href="tel:+919310851557" className="flex items-center gap-2 hover:text-orange transition">
                <Phone size={16} />
                <span>+91 93108 51557</span>
              </a>
              <a href="mailto:info@webdesino.com" className="flex items-center gap-2 hover:text-orange transition">
                <Mail size={16} />
                <span>info@webdesino.com</span>
              </a>
            </div>
          </div>
          <Link
            href="/contact"
            className="bg-orange text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange/90 transition flex items-center gap-2 hover-lift"
          >
            Get Proposal
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Main Navigation - Tier 2 */}
      <nav className="bg-white border-b border-gray-200 hidden md:block">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo - Mobile Only */}
            {/* <Link href="/" className="lg:hidden flex items-center">
              <Image
                src="/logo.png"
                alt="Webdesino - Web Development Agency Delhi"
                width={120}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link> */}

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <button
                className="flex items-center gap-1 text-gray-700 hover:text-orange transition font-medium"
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onMouseLeave={() => setIsMegaMenuOpen(false)}
              >
                Our Clients
                <ChevronDown size={16} />
              </button>

              <Link href="/portfolio" className="flex items-center gap-1 text-gray-700 hover:text-orange transition font-medium">
                Our Work
                <ChevronDown size={16} />
              </Link>

              <Link href="/case-studies" className="text-gray-700 hover:text-orange transition font-medium">
                Case Studies
              </Link>

              <Link href="/about" className="text-gray-700 hover:text-orange transition font-medium">
                About
              </Link>

              <Link href="/contact" className="text-gray-700 hover:text-orange transition font-medium">
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            {/* <button
              className="lg:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div> */}

            {/* Mega Menu */}
            {isMegaMenuOpen && (
          <div
            className="hidden lg:block absolute top-full left-0 w-full bg-white shadow-xl border-t"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-4 gap-8">
                {megaMenuItems.map((category, idx) => (
                  <div key={idx}>
                    <h3 className="font-semibold text-teal mb-4 text-lg">{category.title}</h3>
                    <ul className="space-y-3">
                      {category.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <Link
                            href={`/services/${item.toLowerCase().replace(/\s+/g, "-")}`}
                            className="text-gray-600 hover:text-orange transition text-sm"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

            {/* Mobile Menu */}
            {/* {isMenuOpen && (
          <div className="lg:hidden border-t">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-4">
                <Link href="/" className="text-gray-700 hover:text-orange transition">
                  Home
                </Link>
                <Link href="/services" className="text-gray-700 hover:text-orange transition">
                  Our Clients
                </Link>
                <Link href="/portfolio" className="text-gray-700 hover:text-orange transition">
                  Our Work
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-orange transition">
                  About
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-orange transition">
                  Contact Us
                </Link>
                <Link
                  href="/contact"
                  className="bg-orange text-white px-6 py-2 rounded-full text-center hover:bg-orange/90 transition"
                >
                  Get a Free Consultation
                </Link>
              </div>

                    )} */}
          </div>
        </div>

      </nav>

      {/* Scrolling Category Bar - Tier 3 */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3 relative">
          {/* Left Scroll Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 p-2 rounded-full shadow-md transition"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} className="text-gray-700" />
          </button>

          {/* Scrollable Categories */}
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-4 overflow-x-auto scrollbar-hide px-10"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category, idx) => (
              <button
                key={idx}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-orange hover:text-white text-gray-700 font-medium text-xs md:text-sm whitespace-nowrap transition flex-shrink-0"
              >
                {category.icon && <span>{category.icon}</span>}
                <span>{category.label}</span>
              </button>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 p-2 rounded-full shadow-md transition"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} className="text-gray-700" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </header>
  );
}
