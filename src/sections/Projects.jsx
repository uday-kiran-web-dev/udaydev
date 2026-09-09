import React from 'react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { projects } from '../data/projects';
import { ExternalLink, Github, ArrowRight, Activity, Zap, CheckCircle } from 'lucide-react';

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <Container size="lg">
        <SectionHeading
          badge="Featured Engineering"
          title="Selected Projects & Systems"
          subtitle="Real-world applications showcasing responsive frontend development, asynchronous backend APIs, and real-time streaming architectures."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => {
            const isSignature = project.id === 'smart-queue';

            return (
              <Card
                key={project.id}
                hoverEffect={true}
                className={`flex flex-col justify-between relative group ${
                  isSignature ? 'lg:col-span-2 border-cyan-500/30 shadow-xl shadow-cyan-500/5' : ''
                }`}
              >
                {/* Top header badge */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-1.5">
                      {isSignature && <Zap className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />}
                      {project.category}
                    </span>
                    {project.stats && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-muted-foreground border border-white/5">
                        {project.stats.latency || project.stats.render || project.stats.execution}
                      </span>
                    )}
                  </div>

                  <CardHeader className="p-0">
                    <CardTitle className="text-xl sm:text-2xl group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm mt-1">
                      {project.subtitle}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0 mt-4 space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* For Signature project, show key architectural highlights */}
                    {isSignature && (
                      <div className="my-4 p-4 rounded-lg bg-black/40 border border-white/5 space-y-2 font-mono text-xs">
                        <div className="text-cyan-400 font-semibold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                          <Activity className="w-3.5 h-3.5" /> Core Architecture
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-muted-foreground pt-1">
                          {project.architecture.map((arch, idx) => (
                            <div key={idx} className="flex items-start gap-1.5">
                              <span className="text-cyan-400 font-bold">•</span>
                              <span>{arch}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="default" className="text-[11px]">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>

                {/* Footer Links */}
                <CardFooter className="p-0 mt-6 pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {project.demo && (
                      <Button
                        href={project.demo}
                        target="_blank"
                        variant="accentGlow"
                        size="sm"
                        className="text-xs"
                      >
                        Live Demo <ExternalLink className="w-3.5 h-3.5 ml-1" />
                      </Button>
                    )}
                    {project.github && (
                      <Button
                        href={project.github}
                        target="_blank"
                        variant="secondary"
                        size="sm"
                        className="text-xs"
                      >
                        <Github className="w-3.5 h-3.5 mr-1" /> Code
                      </Button>
                    )}
                  </div>

                  <a
                    href={`#project-${project.slug}`}
                    className="inline-flex items-center text-xs font-mono text-muted-foreground hover:text-cyan-400 transition-colors group-hover:translate-x-0.5"
                  >
                    Case Study <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </a>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

