import React from 'react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { education } from '../data/education';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <Container size="default">
        <SectionHeading
          badge="Academic Background"
          title="Education & Credentials"
          subtitle="Formal foundation in computer science, software engineering principles, and systems architecture."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {education.map((item) => (
            <Card key={item.id} hoverEffect={true} className="flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    {item.id.includes('cert') ? <Award className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
                  </div>
                  <span className="text-xs font-mono text-cyan-400 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-foreground">
                  {item.degree}
                </h3>
                <p className="text-xs sm:text-sm text-cyan-400/90 font-mono mt-0.5">
                  {item.institution}
                </p>

                <div className="mt-5 space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-cyan-400" /> Focus Areas
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.relevantAreas.map((area) => (
                      <Badge key={area} variant="default" className="text-[11px]">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                <span>Status</span>
                <span className="text-emerald-400 font-medium">{item.status}</span>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

