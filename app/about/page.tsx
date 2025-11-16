import type { Metadata } from "next";
import Link from "next/link";
import { Award, Users, Target, TrendingUp, ArrowRight, Goal } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - Web Development Company in Delhi NCR | Webdesino",
  description: "Learn about Webdesino - A leading web development and digital marketing company in Delhi NCR. 50+ happy clients, 100+ projects delivered, and proven results.",
};

const stats = [
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Target, value: "100+", label: "Projects Completed" },
  { icon: TrendingUp, value: "₹6.3 Cr+", label: "Sales Generated" },
  { icon: Award, value: "10+", label: "Certifications" },
];

import { GoalIcon, Lightbulb, Handshake, Rocket, CheckCircle, Award as AwardIcon } from "lucide-react";

const values = [
  {
    icon: GoalIcon,
    title: "Client-Focused Approach",
    description: "We prioritize your business goals and deliver solutions tailored to your specific needs and target audience.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Creativity",
    description: "We stay ahead of digital trends and use cutting-edge technologies to create modern, future-proof websites.",
  },
  {
    icon: Handshake,
    title: "Transparency & Trust",
    description: "Clear communication, honest pricing, and regular updates keep you informed at every project stage.",
  },
  {
    icon: Rocket,
    title: "Results-Driven",
    description: "We focus on measurable outcomes - increased traffic, higher rankings, and better conversion rates.",
  },
  {
    icon: CheckCircle,
    title: "Proven Track Record",
    description: "₹6.3 Crore+ in sales generated for clients with 100+ successful projects across Delhi NCR.",
  },
  {
    icon: AwardIcon,
    title: "Award-Winning Quality",
    description: "Recognized by global leaders like Google, WordPress, Shopify, SEMRush, and DesignRush for professional work.",
  },
];

const team = [
  {
    name: "Rajeev Kumar",
    role: "Founder & CEO",
    description: "10+ years of experience in web development and digital marketing",
  },
  {
    name: "Development Team",
    role: "Expert Developers",
    description: "Skilled in modern frameworks, databases, and cloud technologies",
  },
  {
    name: "SEO Specialists",
    role: "SEO & Marketing Team",
    description: "Certified professionals with proven track records in SEO and PPC",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cream via-white to-cream py-16 lg:py-24 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-teal mb-6 animate-fade-in">
              About <span className="gradient-text">Webdesino</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Webdesino is a leading Digital Marketing Agency Delhi and web development company helping businesses grow online with creative websites, SEO, and digital marketing solutions. Trusted by 100+ businesses across Delhi NCR.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl glass-strong text-center hover-lift transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <Icon className="mx-auto mb-4 text-orange" size={48} />
                  <div className="text-4xl font-bold text-teal mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-cream via-white to-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-teal mb-8 text-center">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="animate-fade-in">
                Founded with a vision to help businesses in Delhi NCR establish a strong digital presence, Webdesino has grown into a trusted partner for companies seeking comprehensive web development and digital marketing solutions.
              </p>
              <p className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                What started as a small team of passionate developers has evolved into a full-service digital agency. We specialize in creating SEO-optimized websites, implementing data-driven digital marketing strategies, and delivering measurable results that drive business growth.
              </p>
              <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Our success is reflected in our clients' achievements - from helping e-commerce stores scale from zero to crores in monthly revenue, to ranking educational institutes on highly competitive global keywords. With over <strong>₹6.3 crores in combined sales generated</strong> for our clients and <strong>100+ successful projects</strong>, we continue to push boundaries in web development and digital marketing.
              </p>
              <p className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                We serve businesses across Delhi NCR including Uttam Nagar, Karol Bagh, Kamla Nagar, Krishan Vihar, Dwarka, and Janakpuri, providing localized strategies that connect brands with their target audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-5xl font-bold text-teal mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, idx) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl glass hover:glass-strong transition-all duration-300 hover-lift animate-fade-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <IconComponent className="text-orange mb-4" size={48} />
                  <h3 className="text-2xl font-bold text-teal mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-teal to-teal/90 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-center">
            Meet Our Team
          </h2>
          <p className="text-xl text-center mb-12 opacity-90 max-w-3xl mx-auto">
            A dedicated team of developers, designers, SEO specialists, and digital marketers committed to your success
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white/10 backdrop-blur text-center hover-lift transition-all duration-300"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-orange" />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-orange font-semibold mb-3">{member.role}</p>
                <p className="opacity-90 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-teal mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join 50+ businesses that trust Webdesino for their digital growth
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-orange text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 hover-lift"
              >
                Get Free Consultation
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 border-2 border-teal text-teal px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal hover:text-white transition-all duration-300"
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
