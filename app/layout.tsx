import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import LayoutClient from '@/components/layout-client';
import React from "react";

export const metadata: Metadata = {
  title: 'Omocto',
  description: 'Omocto est l\'agence de communication qui repense les règles du jeu. Forte d\'une expertise approfondie dans le domaine des relations médias et d\'une ...',
  generator: 'WHD Agency',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <LayoutClient>{children}</LayoutClient>
        <Analytics />
      </body>
    </html>
  );
}
