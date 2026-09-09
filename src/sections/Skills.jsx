import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { skillCategories } from '../data/skills';
import { Code, Server, Database, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categoryIcons = {
    frontend: Code,
    backend: Server,
    databases: Database,
    tools: Wrench,
    'ai-automation': Sparkles,
  };

  const filteredCategories = activeCategory === 'all'
    ? skillCategories
    : skillCategories.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <Container size="lg">
        <SectionHeading
          badge="Technical Competencies"
          title="Skills & Technologies"
          subtitle="Categorized breakdown of technical proficiency across client interfaces, backend architecture, data pipelines, and automation tools."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                : 'bg-card text-muted-foreground border border-card-border hover:text-foreground'
            }`}
          >
            ALL CAPABILITIES
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                  : 'bg-card text-muted-foreground border border-card-border hover:text-foreground'
              }`}
            >
              {category.title.split(' ')[0].toUpperCase()}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Code;
            return (
              <Card key={category.id} hoverEffect={true} className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground">
                        {category.title}
                      </h3>
                      <span className="text-[10px] font-mono text-muted-foreground">
                        {category.skills.length} competencies
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono transition-colors ${
                          skill.primary
                            ? 'bg-white/5 text-foreground border border-white/10 hover:border-cyan-500/30'
                            : 'bg-card/60 text-muted-foreground border border-white/5 hover:text-foreground'
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          skill.level === 'Advanced' ? 'bg-cyan-400' :
                          skill.level === 'Proficient' ? 'bg-sky-400' : 'bg-slate-400'
                        }`} />
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                  <span>Standard: Production-tested</span>
                  <span className="text-cyan-400">Verified</span>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

