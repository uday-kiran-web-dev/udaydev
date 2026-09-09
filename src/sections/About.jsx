import React from 'react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { Card, CardContent } from '../components/ui/Card';
import { profile } from '../data/profile';
import { Layout, Cpu, Layers, CheckCircle2 } from 'lucide-react';

export function About() {
  const quickFacts = [
    {
      icon: Layout,
      label: "PRIMARY FOCUS",
      value: profile.focus,
      description: "Modern component architectures, accessible UIs, and responsive web performance."
    },
    {
      icon: Layers,
      label: "CORE STACK",
      value: profile.coreStack,
      description: "Production workflows centered on React, modular JavaScript, and asynchronous Python."
    },
    {
      icon: Cpu,
      label: "TECHNICAL INTERESTS",
      value: profile.interests,
      description: "Real-time systems, WebSocket streaming, UI interactions, and local AI orchestration."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <Container>
        <SectionHeading
          badge="About Me"
          title="Engineering Modern Digital Products"
          subtitle={profile.summary}
        />

        {/* Quick Facts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {quickFacts.map((fact) => {
            const Icon = fact.icon;
            return (
              <Card key={fact.label} hoverEffect={true} className="flex flex-col justify-between">
                <CardContent className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                      {fact.label}
                    </span>
                    <h3 className="text-base font-bold text-foreground mt-1">
                      {fact.value}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {fact.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Philosophy Highlight Banner */}
        <div className="mt-10 rounded-2xl glass-panel border border-card-border p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-medium">
              <CheckCircle2 className="w-4 h-4" />
              <span>DESIGN PHILOSOPHY</span>
            </div>
            <p className="text-sm sm:text-base text-foreground font-medium">
              Professional + Interactive + Minimal + Technical + Creative.
            </p>
            <p className="text-xs text-muted-foreground">
              Prioritizing content clarity, usability, accessibility, and high performance before decorative effects.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-muted-foreground">
              Zero TypeScript Overhead
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
              100% Modern JSX
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

