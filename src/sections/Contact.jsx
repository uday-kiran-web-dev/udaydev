import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { profile } from '../data/profile';
import { Mail, Github, Linkedin, FileText, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State machine: 'idle' | 'loading' | 'success' | 'error'
  const [formState, setFormState] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all fields before sending.');
      setFormState('error');
      return;
    }

    setFormState('loading');
    setErrorMessage('');

    // Simulated API call or client-side submission for static delivery
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormState('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setFormState('error');
      setErrorMessage('Something went wrong. Please try again or reach out directly via email.');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <Container size="default">
        <SectionHeading
          badge="Get in Touch"
          title="Let's Build Something Great"
          subtitle="Have a project in mind, an engineering role, or an inquiry? Send a message and I'll respond within 24 hours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
          {/* Contact Details & Channels (Col 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            <Card hoverEffect={false} className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  Direct Communication
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Always open for technical collaboration and contract opportunities.
                </p>
              </div>

              <div className="space-y-4 text-sm font-mono">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 p-3 rounded-lg bg-card/60 border border-white/5 hover:border-cyan-500/30 text-foreground transition-all group"
                >
                  <div className="w-8 h-8 rounded-md bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] text-muted-foreground">EMAIL ADDRESS</div>
                    <div className="text-xs sm:text-sm text-foreground">{profile.email}</div>
                  </div>
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-card/60 border border-white/5 hover:border-cyan-500/30 text-foreground transition-all group"
                >
                  <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center text-foreground group-hover:scale-105 transition-transform">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-muted-foreground">GITHUB PROFILE</div>
                    <div className="text-xs sm:text-sm text-foreground">github.com/udaydev</div>
                  </div>
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-card/60 border border-white/5 hover:border-cyan-500/30 text-foreground transition-all group"
                >
                  <div className="w-8 h-8 rounded-md bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-muted-foreground">LINKEDIN</div>
                    <div className="text-xs sm:text-sm text-foreground">linkedin.com/in/udaydev</div>
                  </div>
                </a>

                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-card/60 border border-white/5 hover:border-cyan-500/30 text-foreground transition-all group"
                >
                  <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center text-muted-foreground group-hover:scale-105 transition-transform">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-muted-foreground">CURRICULUM VITAE</div>
                    <div className="text-xs sm:text-sm text-foreground">Download Resume (PDF)</div>
                  </div>
                </a>
              </div>
            </Card>
          </div>

          {/* Contact Form (Col 6-12) */}
          <div className="lg:col-span-7">
            <Card hoverEffect={false} className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Form state alert messages */}
                {formState === 'success' && (
                  <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3 text-emerald-400 text-sm">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <div>
                      <p className="font-semibold">MESSAGE SENT</p>
                      <p className="text-xs text-emerald-300/80">Thanks for reaching out! I will get back to you shortly.</p>
                    </div>
                  </div>
                )}

                {formState === 'error' && (
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-400 text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <div>
                      <p className="font-semibold">Failed to send</p>
                      <p className="text-xs text-red-300/80">{errorMessage || 'Something went wrong. Please try again.'}</p>
                    </div>
                  </div>
                )}

                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-xs font-mono font-medium text-foreground">
                    YOUR NAME <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={formState === 'loading'}
                    placeholder="e.g. Alex Rivera"
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-card-border text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-mono font-medium text-foreground">
                    YOUR EMAIL <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={formState === 'loading'}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-card-border text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-mono font-medium text-foreground">
                    MESSAGE <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={formState === 'loading'}
                    placeholder="Tell me about your project, timeline, or open engineering roles..."
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-card-border text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={formState === 'loading'}
                  className="w-full justify-center"
                >
                  {formState === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin mr-2" /> SENDING...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" /> SEND MESSAGE
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}

