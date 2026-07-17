import { Analytics } from '@vercel/analytics/react';
import About from './components/About';
import Contact from './components/Contact';
import CV from './components/CV';
import Experience from './components/Experience';
import FeaturedProjects from './components/FeaturedProjects';
import Footer from './components/Footer';
import GitHubPortfolio from './components/GitHubPortfolio';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import PortfolioSignals from './components/PortfolioSignals';
import Skills from './components/Skills';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-void text-slate-100">
      <Analytics />
      <div className="cyber-grid" aria-hidden="true" />
      <div className="signal-field" aria-hidden="true" />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <FeaturedProjects />
          <Skills />
          <GitHubPortfolio />
          <PortfolioSignals />
          <Experience />
          <CV />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
