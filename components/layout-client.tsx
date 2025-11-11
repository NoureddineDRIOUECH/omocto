'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from '@/components/splash-screen';
import SmoothScrollProvider from './smooth-scroll-provider';
import CustomCursor from './ui/custom-cursor';
import PageTransitionProvider from './page-transition-provider';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from './ui/resizable-navbar';
import Image from 'next/image';
import Link from 'next/link';
import Footer from "@/components/footer";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith('/admin') || pathname === '/login';

  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'auto';
      window.scrollTo(0, 0);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.cursor = 'wait';
    } else if (!isAdminPage) {
      document.body.classList.add('hide-cursor');
    }
  }, [isLoading, isAdminPage]);

  if (isAdminPage) {
    return <>{children}</>;
  }

  const navItems = [
    { name: "À Propos", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Blogs", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      <AnimatePresence>{isLoading && <SplashScreen />}</AnimatePresence>

      {!isLoading && (
        <SmoothScrollProvider>
          <Navbar>
            <NavBody>
              <Link href="/" className="relative z-20">
                <Image src="/logo-omocto.png" alt="Omocto Logo" width={100} height={40} />
              </Link>
              <NavItems items={navItems} />
              <NavbarButton href="/contact" as={Link} className="hidden lg:inline-block">
                Obtenir un devis
              </NavbarButton>
            </NavBody>
            <MobileNav>
              <MobileNavHeader>
                <Link href="/" className="relative z-20">
                  <Image src="/logo-omocto.png" alt="Omocto Logo" width={100} height={40} />
                </Link>
                <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
              </MobileNavHeader>
              <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
                <NavItems items={navItems} onItemClick={() => setIsMobileMenuOpen(false)} />
                <div className="lg:hidden">
                  <NavbarButton href="/contact" as={Link}>
                    Obtenir un devis
                  </NavbarButton>
                </div>
              </MobileNavMenu>
            </MobileNav>
          </Navbar>
          <CustomCursor />
          <PageTransitionProvider>{children}</PageTransitionProvider>
          <Footer />
        </SmoothScrollProvider>
      )}
    </>
  );
}