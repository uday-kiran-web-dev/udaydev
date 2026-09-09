import React, { useState, useEffect } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { MobileMenu } from './MobileMenu';
import { profile } from '../../data/profile';
import { Menu, FileText } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection based on current scroll position
      const sections = profile.navLinks.map((l) => l.href.replace('#', ''));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3.5 shadow-md shadow-black/20'
            : 'bg-transparent py-5'
        }`}
      >
        <Container size="lg">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#hero"
              className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-accent rounded-md p-1"
              aria-label="UDAY.DEV Home"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform duration-200 shadow-[0_0_8px_#06b6d4]" />
              <span className="font-mono text-base sm:text-lg font-bold tracking-tight text-foreground">
                UDAY<span className="text-accent">.DEV</span>
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-muted-foreground border border-white/10 uppercase tracking-wider">
                Web Dev
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 rounded-full px-4 py-1.5 bg-card/60 border border-white/5 backdrop-blur-md">
              {profile.navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-1.5 text-xs font-mono font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-accent bg-cyan-500/10 font-semibold'
                        : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <Button
                href={profile.resumeUrl}
                target="_blank"
                variant="ghost"
                size="sm"
                className="font-mono text-xs hidden md:inline-flex"
              >
                <FileText className="w-3.5 h-3.5" /> RESUME
              </Button>
              <Button
                href="#contact"
                variant="primary"
                size="sm"
                className="font-mono text-xs shadow-sm"
              >
                LET'S TALK
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button
                href="#contact"
                variant="primary"
                size="sm"
                className="font-mono text-xs sm:hidden"
              >
                TALK
              </Button>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Accessible Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}

