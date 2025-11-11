'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { TextGenerateEffect} from '@/components/ui/animated-textgenerate';
import { ContentBlock, ImageData } from '@/lib/data';

interface ServicePageClientProps {
  service: ImageData;
}

export default function ServicePageClient({ service }: ServicePageClientProps) {
  return (
    <main className="min-h-screen bg-background text-foreground py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <TextGenerateEffect
            words={service.alt}
            className="text-5xl md:text-6xl font-extrabold text-primary mb-4 leading-tight"
          />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-in fade-in-up duration-1000 delay-300">
            {service.description}
          </p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto h-[50vh] rounded-xl overflow-hidden shadow-xl mb-16">
          <Image
            src={service.src}
            alt={service.alt}
            fill
            className="object-cover"
          />
        </div>

        <Separator className="my-12" />

        <Card className="bg-card text-card-foreground shadow-lg rounded-xl p-8 md:p-12 max-w-5xl mx-auto">
          <CardHeader className="mb-8 p-0">
            <CardTitle className="text-3xl md:text-4xl font-bold text-accent-foreground leading-tight">
              Our Comprehensive Approach
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 text-lg md:text-xl space-y-6 leading-relaxed">
            {service.fullDescription.map((block: ContentBlock, index: number) => (
              <div key={index}>
                {block.type === 'paragraph' && <p className="mb-4">{block.content}</p>}
                {block.type === 'list' && (
                  <ul className="list-disc list-inside ml-6 space-y-2">
                    {(block.content as string[]).map((item: string, itemIndex: number) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}