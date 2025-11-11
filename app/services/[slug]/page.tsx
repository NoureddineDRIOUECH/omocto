import { servicesData } from '@/lib/data';
import { slugify } from '@/lib/utils';
import { notFound } from 'next/navigation';
import ServicePageClient from '@/components/service-page-client';

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData.find(
    (s) => slugify(s.alt) === params.slug
  );

  if (!service) {
    notFound();
  }

  return <ServicePageClient service={service} />;
}

// Generate static pages at build time for better performance
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: slugify(service.alt),
  }));
}
