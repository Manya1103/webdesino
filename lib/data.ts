// Portfolio Projects Data
export interface PortfolioProject {
  id: number;
  title: string;
  slug: string;
  industry: string;
  description: string;
  image: string;
  fullDescription?: string;
  results?: string;
  metrics?: {
    growth?: string;
    sales?: string;
    traffic?: string;
  };
}

export const getPortfolioProjects = (): PortfolioProject[] => {
  return [
    {
      id: 1,
      title: "BookBuzzz",
      slug: "bookbuzzz",
      industry: "Ecommerce",
      description:
        "After just 3 months of SEO, marketing, and website optimization, they now generate ₹25,00,000+ monthly sales.",
      image: "/portfolio/bookbuzzz.jpg",
      fullDescription:
        "BookBuzzz approached Webdesino with nearly zero website and marketplace sales. Through comprehensive SEO strategies, performance marketing, and website optimization, we transformed their online presence. Within just 3 months, they achieved ₹25,00,000+ in monthly sales across their website and marketplaces.",
      results: "Increased monthly sales from zero to ₹25,00,000+ through SEO and website optimization.",
      metrics: {
        growth: "532%",
        sales: "₹25,00,000+ monthly",
      },
    },
    {
      id: 2,
      title: "LuckyNutra",
      slug: "luckynutra",
      industry: "Ecommerce",
      description:
        "Within 2 months, with our SEO & performance marketing strategies, they now generate ₹10,00,000+ monthly sales.",
      image: "/portfolio/luckynutra.jpg",
      fullDescription:
        "LuckyNutra started with only ₹3,000/month in website sales and zero marketplace presence. Our team implemented targeted SEO strategies and performance marketing campaigns. Within 2 months, they achieved ₹10,00,000+ in monthly sales.",
      results: "Boosted sales from ₹3,000/month to ₹10,00,000+ monthly with SEO & performance marketing.",
      metrics: {
        growth: "244%",
        sales: "₹10,00,000+ monthly",
      },
    },
    {
      id: 3,
      title: "BuyKhariBauli",
      slug: "buykharibauli",
      industry: "Ecommerce",
      description:
        "After implementing our SEO campaigns and optimizing user experience, they now achieve ₹6,00,000/month in sales.",
      image: "/portfolio/buykharibauli.jpg",
      fullDescription:
        "BuyKhariBauli began with ₹30,000/month in website sales. Through strategic SEO campaigns and comprehensive user experience optimization, we helped them achieve ₹6,00,000/month in sales directly from their website.",
      results: "Improved website sales from ₹30,000/month to ₹6,00,000/month with targeted SEO campaigns.",
      metrics: {
        growth: "375%",
        sales: "₹6,00,000/month",
      },
    },
    {
      id: 4,
      title: "Meritshot",
      slug: "meritshot",
      industry: "Healthcare",
      description:
        "Within months, we ranked their website on highly competitive global keywords... driving significant worldwide visibility.",
      image: "/portfolio/meritshot.jpg",
      fullDescription:
        "Meritshot partnered with Webdesino for a focused SEO strategy targeting highly competitive global keywords. We successfully ranked their website for terms like 'Investment Banking Course', 'Best Institute for Investment Banking', and 'Indian No.1 Institute for Investment Banking', driving significant worldwide visibility and student enrollments.",
      results: "Ranked on highly competitive global keywords, driving significant worldwide visibility.",
      metrics: {
        growth: "510%",
        traffic: "Global visibility",
      },
    },
  ];
};

// Testimonials Data
export interface Testimonial {
  id: number;
  name: string;
  text: string;
  company?: string;
  location?: string;
}

export const getTestimonials = (): Testimonial[] => {
  return [
    {
      id: 1,
      name: "Siddhi Agarwal",
      text: "WebDesino developed our website and app with a clean, SEO-friendly design. We saw instant growth in web development in Delhi searches.",
      location: "Delhi",
    },
    {
      id: 2,
      name: "Mansi Agarwal",
      text: "Their local SEO services in Uttam Nagar boosted our calls and lead generation by 3x. Very professional and reliable team.",
      location: "Uttam Nagar, Delhi",
    },
    {
      id: 3,
      name: "Tanvi Mehta",
      text: "They fixed our technical SEO issues and rebuilt our site. Now we rank higher for SEO services in Karol Bagh and get more quality leads.",
      location: "Karol Bagh, Delhi",
    },
    {
      id: 4,
      name: "Hardisha Kaur",
      text: "Our eCommerce store is performing 5x better after WebDesino's digital marketing in Delhi NCR. Excellent ROI and reporting.",
      company: "E-commerce Business",
    },
    {
      id: 5,
      name: "Rajesh Sharma",
      text: "We hired them for website development in Krishan Vihar and saw our monthly sales jump from 30k to over 6 lakhs. Amazing!",
      location: "Krishan Vihar, Delhi",
    },
    {
      id: 6,
      name: "Priya Malhotra",
      text: "Our coaching institute's admissions doubled after WebDesino's education SEO strategies in Delhi. Highly recommended.",
      company: "Coaching Institute",
    },
    {
      id: 7,
      name: "Rakesh Jain",
      text: "We partnered with them for small business SEO in Delhi NCR. Affordable packages and real results — exactly what we needed.",
      location: "Delhi NCR",
    },
    {
      id: 8,
      name: "Neha Kapoor",
      text: "WebDesino is the best SEO & digital marketing company in Kamla Nagar. Our local business now gets daily leads from Google.",
      location: "Kamla Nagar, Delhi",
    },
  ];
};

// FAQ Data
export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

export const getFAQs = (): FAQ[] => {
  return [
    {
      question: "What makes WebDesino the best web development company in Delhi NCR?",
      answer:
        "WebDesino stands out for delivering SEO-friendly, fast-loading, and mobile-responsive websites tailored for businesses in Delhi NCR. Our team combines technical expertise with creative design to create websites that not only look great but also perform exceptionally well in search engines. With proven case studies and results-driven strategies, we ensure maximum ROI for our clients.",
      category: "General",
    },
    {
      question:
        "Do you provide local SEO services for areas like Uttam Nagar, Karol Bagh, and other Delhi NCR locations?",
      answer:
        "Yes, our local SEO packages are customized for businesses in Delhi NCR areas such as Uttam Nagar, Karol Bagh, Kamla Nagar, and Krishan Vihar. We help businesses improve their local search visibility and attract more customers from their target areas through Google Maps optimization and hyperlocal SEO strategies.",
      category: "SEO Services",
    },
    {
      question: "How long does it take to see results from SEO with WebDesino?",
      answer:
        "SEO is a long-term strategy. Most clients see visible improvements in their search rankings and organic traffic within 2–3 months. However, significant results typically appear after 4–6 months of consistent optimization efforts. We provide monthly reports to track progress and adjust strategies as needed.",
      category: "SEO Services",
    },
    {
      question: "What services does WebDesino offer?",
      answer:
        "WebDesino offers comprehensive digital marketing services including web design and development, SEO optimization, digital marketing, graphic design, mobile app development, and ongoing website maintenance and support. We serve businesses across various industries including Real Estate, Healthcare, E-commerce, Education, and Startups.",
      category: "Services",
    },
    {
      question: "Do you provide website maintenance services?",
      answer:
        "Yes, we offer 24/7 support and maintenance services to ensure your website remains updated, secure, and performing optimally at all times. Our maintenance packages include regular updates, security monitoring, backup services, and technical support.",
      category: "Services",
    },
    {
      question: "Can WebDesino help increase online sales for my eCommerce business?",
      answer:
        "Absolutely. With our eCommerce website development and SEO strategies, we've helped clients grow from zero sales to generating crores in monthly revenue. Our proven approach includes conversion optimization, performance marketing, and comprehensive SEO strategies tailored for e-commerce platforms.",
      category: "E-commerce",
    },
    {
      question: "Do you offer affordable web design packages for small businesses in Delhi?",
      answer:
        "Yes, our packages are designed for startups and SMEs in Delhi NCR. We provide affordable web design and SEO services without compromising on quality. We offer flexible pricing plans that can be customized based on your business needs and budget.",
      category: "Pricing",
    },
    {
      question: "Will my website be mobile-friendly and SEO-optimized?",
      answer:
        "Every website we build is 100% mobile-responsive, fast-loading, and optimized for Google search rankings, ensuring better visibility and user experience. We follow SEO best practices from the ground up, including proper heading structure, semantic HTML, optimized images, and fast page load times.",
      category: "Technical",
    },
  ];
};

// Features/Why Choose Us Data
export interface Feature {
  number: string;
  title: string;
  description: string;
}

export const getFeatures = (): Feature[] => {
  return [
    {
      number: "1",
      title: "Proven Results",
      description:
        "Trusted by businesses across Delhi NCR with measurable growth in traffic, leads, and sales. With over 6.3 Cr+ sales generated for clients and 100+ successful projects, we deliver measurable results.",
    },
    {
      number: "2",
      title: "Timely Delivery",
      description:
        "We respect deadlines and deliver fully tested, functional websites on time, every time. Our project management ensures transparent communication and on-schedule delivery.",
    },
    {
      number: "3",
      title: "Award Winning",
      description:
        "Recognized for professional work and high-quality digital solutions that set industry benchmarks. Our award-winning approach combines creativity with technical excellence.",
    },
    {
      number: "4",
      title: "Highest Rankings in Delhi",
      description:
        "Our SEO-first approach ensures your business ranks on top of Google searches in Delhi NCR. We specialize in local SEO for areas like Uttam Nagar, Karol Bagh, Kamla Nagar, and Krishan Vihar.",
    },
    {
      number: "5",
      title: "SEO-Optimized Websites",
      description:
        "Every site we build is mobile-friendly, fast-loading, and built to perform on Google search. Our websites are designed with SEO best practices from day one.",
    },
    {
      number: "6",
      title: "24/7 Support",
      description:
        "Our dedicated team is available round a clock for maintenance, updates, and assistance. We provide ongoing support to ensure your website continues to perform optimally.",
    },
  ];
};

// Services Data
export interface Service {
  title: string;
  href: string;
  description?: string;
}

export const getServices = (): Service[] => {
  return [
    {
      title: "Web Development Services",
      href: "/services",
      description:
        "Custom website development, e-commerce solutions, and responsive web design tailored for businesses in Delhi NCR. SEO-optimized and performance-focused.",
    },
    {
      title: "SEO & Digital Marketing",
      href: "/services",
      description:
        "Comprehensive SEO services, local SEO, keyword research, and digital marketing strategies to boost your online visibility and drive organic traffic.",
    },
    {
      title: "Content & Graphic Design",
      href: "/services",
      description:
        "Professional content writing, SEO blog writing, graphic design, branding, and social media content creation for your business growth.",
    },
  ];
};

// Results/Case Studies Data
export interface Result {
  title: string;
  description: string;
  growth: string;
  industry: string;
  slug?: string;
}

export const getResults = (): Result[] => {
  return [
    {
      title: "BookBuzzz E-commerce Growth",
      description: "Increased monthly sales from zero to ₹25,00,000+ through SEO and website optimization.",
      growth: "532%",
      industry: "E-commerce",
      slug: "bookbuzzz",
    },
    {
      title: "LuckyNutra Performance Marketing",
      description: "Boosted sales from ₹3,000/month to ₹10,00,000+ monthly with SEO & performance marketing.",
      growth: "244%",
      industry: "Health & Wellness",
      slug: "luckynutra",
    },
    {
      title: "BuyKhariBauli SEO Success",
      description: "Improved website sales from ₹30,000/month to ₹6,00,000/month with targeted SEO campaigns.",
      growth: "375%",
      industry: "E-commerce",
      slug: "buykharibauli",
    },
    {
      title: "Meritshot Global Rankings",
      description: "Ranked on highly competitive global keywords, driving significant worldwide visibility.",
      growth: "510%",
      industry: "Education",
      slug: "meritshot",
    },
  ];
};

// Case Studies Data
export interface CaseStudy {
  title: string;
  result: string;
  slug?: string;
}

export const getCaseStudies = (): CaseStudy[] => {
  return [
    {
      title: "Website Redesign for BookBuzzz",
      result: "Increased user engagement by 532% through a responsive and visually appealing interface.",
      slug: "bookbuzzz",
    },
    {
      title: "SEO Strategy for LuckyNutra",
      result: "Generated a 244% boost in organic search traffic by optimizing content and site structure.",
      slug: "luckynutra",
    },
    {
      title: "Lead Generation Funnel for BuyKhariBauli",
      result: "Improved lead conversion rate by 375% using a dynamic landing page and call-to-action optimization.",
      slug: "buykharibauli",
    },
    {
      title: "Performance Marketing for E-commerce",
      result: "Implemented multi-channel campaigns, resulting in a 510% rise in referral traffic.",
    },
    {
      title: "Content Marketing for B2B Clients",
      result: "Produced high-converting blog content that drove a 320% increase in inbound inquiries.",
    },
    {
      title: "Email Automation Setup for Healthcare",
      result: "Created personalized automation sequences that increased client retention by 30%.",
    },
    {
      title: "UI/UX Optimization for Retail Portals",
      result: "Enhanced customer experience with intuitive UI, improving time on site by 28%.",
    },
    {
      title: "PPC Advertising for Local Businesses",
      result: "Reduced cost-per-click by 18% while increasing lead volume by 62%.",
    },
  ];
};

// Industries for filtering
export const getIndustries = (): string[] => {
  return ["All", "Real Estate", "Ecommerce", "Healthcare", "Education"];
};

