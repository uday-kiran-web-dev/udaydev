import React from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { profile } from '../data/profile';
import { ArrowRight, Code2, Sparkles, Terminal } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[250px] bg-sky-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Grid Pattern overlay for tech aesthetic */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10"
      />

      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Copy (Col 1-7) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-muted-foreground backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{profile.status}</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <p className="font-mono text-sm uppercase tracking-widest text-cyan-400 font-medium">
                {profile.headline}
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.08]">
                {profile.subheadline}
              </h1>
            </div>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              {profile.tagline}
            </p>

            {/* Technical Profile Strip */}
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs text-muted-foreground">
              <span className="px-2.5 py-1 rounded bg-card/80 border border-card-border">React</span>
              <span>•</span>
              <span className="px-2.5 py-1 rounded bg-card/80 border border-card-border">JavaScript</span>
              <span>•</span>
              <span className="px-2.5 py-1 rounded bg-card/80 border border-card-border">Python</span>
              <span>•</span>
              <span className="px-2.5 py-1 rounded bg-card/80 border border-card-border">FastAPI</span>
              <span>•</span>
              <span className="px-2.5 py-1 rounded bg-card/80 border border-card-border">WebSockets</span>
              <span>•</span>
              <span className="px-2.5 py-1 rounded bg-card/80 border border-card-border">AI / Automation</span>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button href="#projects" variant="primary" size="lg" className="group">
                VIEW MY WORK
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button href="#contact" variant="secondary" size="lg">
                GET IN TOUCH
              </Button>
            </div>
          </div>

          {/* Side Visual / 3D Scene Anchor (Col 8-12) */}
          <div className="lg:col-span-5 flex justify-center">
            {/* Interactive Terminal Card & 3D Anchor */}
            <div className="w-full max-w-md rounded-2xl glass-panel border border-card-border p-6 shadow-2xl relative overflow-hidden group">
              {/* Card top bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/70" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>uday@workspace:~</span>
                </div>
              </div>

              {/* Terminal content */}
              <div className="mt-5 space-y-3 font-mono text-xs sm:text-sm">
                <div className="text-muted-foreground flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">$</span>
                  <span>whoami</span>
                </div>
                <p className="text-foreground pl-4 border-l-2 border-cyan-500/40">
                  Uday — Full-Stack Web Developer passionate about responsive interfaces & robust systems.
                </p>

                <div className="text-muted-foreground flex items-center gap-2 pt-2">
                  <span className="text-cyan-400 font-bold">$</span>
                  <span>cat stack.config</span>
                </div>
                <div className="bg-background/80 rounded-lg p-3 border border-white/5 space-y-1 text-xs text-muted-foreground">
                  <div><span className="text-cyan-400">frontend:</span> ["React", "JavaScript", "Tailwind"]</div>
                  <div><span className="text-cyan-400">backend:</span> ["FastAPI", "Python", "MongoDB"]</div>
                  <div><span className="text-cyan-400">3d_graphics:</span> ["Three.js", "R3F"]</div>
                  <div><span className="text-cyan-400">architecture:</span> "Clean, Scalable, Accessible"</div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> 3D Workspace Mode
                  </span>
                  <Badge variant="accent">Ready</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

