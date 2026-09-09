import React from 'react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Terminal, Cpu, Bot, Workflow, Sparkles, Flame } from 'lucide-react';

export function Lab() {
  const experiments = [
    {
      id: "ollama-agent",
      title: "Local LLM Tool-Use Pipeline",
      category: "Local AI & Agents",
      icon: Bot,
      status: "Active Experiment",
      description: "Low-latency offline agent utilizing Ollama and quantized models with structured JSON schema outputs for terminal task automation.",
      tags: ["Ollama", "Python", "Local AI", "AsyncIO"],
    },
    {
      id: "comfy-pipeline",
      title: "ComfyUI Node Graph Automation",
      category: "Generative Systems",
      icon: Workflow,
      status: "Prototype",
      description: "Headless API bridge connecting React client inputs with custom ComfyUI execution graphs for programmatic asset generation.",
      tags: ["ComfyUI", "FastAPI", "WebSockets", "Automation"],
    },
    {
      id: "vector-search",
      title: "Embedded Document Q&A Cache",
      category: "Vector Retrieval",
      icon: Cpu,
      status: "Research",
      description: "Local embedding indexing engine providing instant semantic retrieval over technical markdown documentation without cloud APIs.",
      tags: ["Embeddings", "Python", "NumPy", "SQLite"],
    },
  ];

  return (
    <section id="lab" className="py-20 md:py-28 relative">
      <Container size="lg">
        <SectionHeading
          badge="Secondary Capability"
          title="The Experimental Lab"
          subtitle="A dedicated sandbox where I explore emerging technology: local models, ComfyUI pipelines, and intelligent developer automation without compromising clean web fundamentals."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {experiments.map((exp) => {
            const Icon = exp.icon;
            return (
              <Card key={exp.id} hoverEffect={true} className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                      {exp.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      <Flame className="w-3 h-3 text-cyan-400" />
                      {exp.status}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <CardTitle className="text-lg text-foreground">
                    {exp.title}
                  </CardTitle>

                  <CardDescription className="text-xs sm:text-sm mt-2 leading-relaxed">
                    {exp.description}
                  </CardDescription>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <Badge key={tag} variant="muted" className="text-[10px]">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Lab Disclaimer Note */}
        <div className="mt-8 text-center">
          <p className="text-xs font-mono text-muted-foreground/80">
            * Lab experiments explore bleeding-edge tooling; production focus remains disciplined Web & Full-Stack engineering.
          </p>
        </div>
      </Container>
    </section>
  );
}

