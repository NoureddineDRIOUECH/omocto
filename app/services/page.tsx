'use client';

import { servicesData } from '@/lib/data';
import { ServiceCard } from '@/components/service-card';

export default function ServicesPage() {
  return (
    <div className="bg-background text-white min-h-screen animated-gradient-gold">
      <div className="container mx-auto px-4 py-24">
          <div
              className="h-[320px] p-8 md:h-[420px] md:p-12 rounded-3xl overflow-hidden relative mb-12 flex flex-col justify-center shadow-lg"
              style={{
          backgroundImage: [
            'radial-gradient(circle at 70% 10%, rgba(189, 148, 82, 0.3), transparent 60%)',
            'radial-gradient(circle at 0% 80%, rgba(50, 50, 50, 0.3), transparent 60%)',
            'radial-gradient(circle at 50% 50%, rgba(189, 148, 82, 0.1), transparent 70%)',
          ].join(", "),
        }}
          >
              <div className="max-w-2xl space-y-4 relative z-10">
                  <h1 className="mb-4 text-4xl font-bold md:text-6xl tracking-tight">
                      Nos Services
                      <div className="h-1 w-24 bg-foreground mt-4 md:h-1.5 md:w-32"></div>
                  </h1>
                  <p className="text-sm md:text-lg font-medium opacity-90">
                      Omocto est votre partenaire de confiance en matière de relations médias
                  </p>
              </div>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}