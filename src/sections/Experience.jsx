import React from 'react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { experiences } from '../data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <Container size="default">
        <SectionHeading
          badge="Career Timeline"
          title="Professional Experience"
          subtitle="A track record of shipping production web applications, optimizing interface performance, and architecting resilient backend services."
        />

        <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-12 mt-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-6 md:pl-8 group">
              {/* Timeline marker node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-cyan-400 group-hover:scale-125 transition-transform duration-200 shadow-[0_0_8px_#06b6d4]" />

              {/* Date stamp desktop offset */}
              <div className="hidden md:block absolute -left-36 top-1 text-right w-28">
                <span className="font-mono text-xs font-semibold text-cyan-400">
                  {exp.period}
                </span>
                <div className="text-[11px] font-mono text-muted-foreground">{exp.type}</div>
              </div>

              {/* Experience Card */}
              <Card hoverEffect={true} className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
                  <div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-cyan-400 font-medium">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground md:hidden">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Contributions */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                    Key Contributions:
                  </span>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-foreground/90">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {exp.technologies.map((t) => (
                    <Badge key={t} variant="muted" className="text-[10px]">
                      {t}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

