import React from 'react';
import { profile } from '../../data/profile';
import { Button } from '../ui/Button';
import { X, ExternalLink } from 'lucide-react';

export function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl lg:hidden flex flex-col transition-all duration-300 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Header with Close */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <span className="font-mono text-lg font-bold tracking-tight text-foreground">
          UDAY<span className="text-accent">.DEV</span>
        </span>
        <button
          onClick={onClose}
          className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
        <ul className="space-y-4">
          {profile.navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={onClose}
                className="block text-2xl font-mono font-medium text-muted-foreground hover:text-cyan-400 transition-colors py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Action buttons */}
        <div className="pt-8 space-y-3">
          <Button
            href="#contact"
            variant="primary"
            size="lg"
            className="w-full"
            onClick={onClose}
          >
            LET'S TALK
          </Button>
          <Button
            href={profile.resumeUrl}
            target="_blank"
            variant="outline"
            size="lg"
            className="w-full justify-center"
          >
            VIEW RESUME <ExternalLink className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </nav>
    </div>
  );
}

