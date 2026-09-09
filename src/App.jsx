import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navigation/Navbar';
import { Footer } from './components/common/Footer';
import { Home } from './pages/Home';
import { ProjectDetails } from './pages/ProjectDetails';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
            <Route path="/lab" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

