import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { projects } from '../data/projects';
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Layers, Cpu, ShieldCheck } from 'lucide-react';

export function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug || p.id === slug) || projects[0];

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <Container size="default">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> BACK TO ALL PROJECTS
          </Link>
        </div>

        {/* Header */}
        <div className="space-y-4 pb-8 border-b border-white/5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
            {project.category}
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            {project.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            {project.subtitle}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((t) => (
              <Badge key={t} variant="accent" className="text-xs">
                {t}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            {project.demo && (
              <Button href={project.demo} target="_blank" variant="primary" size="md">
                Live System Demo <ExternalLink className="w-4 h-4 ml-1" />
              </Button>
            )}
            {project.github && (
              <Button href={project.github} target="_blank" variant="secondary" size="md">
                <Github className="w-4 h-4 mr-1" /> Source Code
              </Button>
            )}
          </div>
        </div>

        {/* Case Study Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10">
          {/* Main Story (Col 1-8) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">Project Overview</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Problem & Goals */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="space-y-3">
                <h3 className="text-sm font-mono font-semibold text-rose-400 uppercase tracking-wider">
                  The Problem
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {project.problem}
                </p>
              </Card>
              <Card className="space-y-3">
                <h3 className="text-sm font-mono font-semibold text-cyan-400 uppercase tracking-wider">
                  The Solution
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </Card>
            </div>

            {/* Architecture breakdown */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Layers className="w-5 h-5 text-cyan-400" /> Architectural Design
              </h2>
              <div className="space-y-2">
                {project.architecture.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-card/60 border border-white/5 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-foreground/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="space-y-3 p-6 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
              <h3 className="text-sm font-mono font-semibold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Impact & Verification
              </h3>
              <p className="text-sm sm:text-base text-foreground font-medium">
                {project.results}
              </p>
            </div>
          </div>

          {/* Sidebar Specs (Col 9-12) */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="space-y-4">
              <h3 className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider">
                Technical Highlights
              </h3>
              <div className="space-y-3 font-mono text-xs">
                {project.stats && Object.entries(project.stats).map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between border-b border-white/5 pb-2">
                    <span className="text-muted-foreground uppercase">{k}:</span>
                    <span className="text-cyan-400 font-semibold">{v}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-muted-foreground">LANGUAGE:</span>
                  <span className="text-foreground">JavaScript (ES6+)</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-muted-foreground">FRAMEWORK:</span>
                  <span className="text-foreground">React 18</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}

