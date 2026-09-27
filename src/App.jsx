import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { SelectedWork } from './components/SelectedWork';
import { TechnicalStack } from './components/TechnicalStack';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-950 dark:bg-slate-950 light:bg-white text-slate-100 dark:text-slate-100 light:text-slate-900 transition-colors duration-200 selection:bg-emerald-500/30 selection:text-emerald-300">
        
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-emerald-500 focus:text-slate-950 focus:p-3">Skip to content</a>
        {/* Top 2px Scroll Reading Progress */}
        <ScrollProgress />


        {/* Top Sticky Navigation */}
        <Navbar />

        {/* Main Editorial Content Flow */}
        <main id="main-content" tabIndex={-1}>
          <Hero />
          <SelectedWork />
          <Experience />
          <About />
          <TechnicalStack />
          <Education />
          <Contact />
        </main>

        {/* Clean Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
