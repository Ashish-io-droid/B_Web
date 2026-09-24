import type { MetadataRoute } from 'next';

const routes = ['', '/neelbad', '/about', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mammajirealestate.in';
  return routes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date(), changeFrequency: 'weekly', priority: route === '' ? 1 : .8 }));
}
