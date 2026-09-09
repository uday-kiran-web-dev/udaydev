import React from 'react';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Projects } from '../sections/Projects';
import { Skills } from '../sections/Skills';
import { Experience } from '../sections/Experience';
import { Education } from '../sections/Education';
import { Lab } from '../sections/Lab';
import { Contact } from '../sections/Contact';

export function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Lab />
      <Contact />
    </main>
  );
}

