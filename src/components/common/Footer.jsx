import React from 'react';
import { Container } from '../ui/Container';
import { profile } from '../../data/profile';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 bg-background relative z-10 pt-16 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Brand & Positioning */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-lg font-bold tracking-tight text-foreground">
                UDAY<span className="text-accent">.DEV</span>
              </span>
              <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-muted-foreground border border-white/10 uppercase">
                {profile.role}
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              {profile.tagline}
            </p>
            <p className="text-xs text-muted-foreground/70 font-mono">
              {profile.secondaryBio}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-foreground">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {profile.navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-foreground">
              Connect
            </h4>
            <div className="flex flex-col space-y-2 text-sm">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" /> {profile.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 Uday. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="font-mono">React • Vite • Tailwind • Three.js</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
              aria-label="Scroll to top"
            >
              Back to top <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}

