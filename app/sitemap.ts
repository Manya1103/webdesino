import { MetadataRoute } from 'next';
import { getPortfolioProjects } from '@/lib/data';
import { getAllCaseSlugs } from '@/lib/case-studies';

export default function sitemap(): MetadataRoute.Sitemap {
  // 1. Get all dynamic project routes
  const projects = getPortfolioProjects();
  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `https://webdesino.com/portfolio/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // 2. Get all case study routes
  const caseSlugs = getAllCaseSlugs();
  const caseStudyEntries: MetadataRoute.Sitemap = caseSlugs.map((slug) => ({
    url: `https://webdesino.com/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // 3. Define static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: 'https://webdesino.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://webdesino.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://webdesino.com/services',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://webdesino.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://webdesino.com/portfolio',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://webdesino.com/case-studies',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // 4. Combine and return
  return [
    ...staticRoutes,
    ...projectEntries,
    ...caseStudyEntries,
  ];
}
