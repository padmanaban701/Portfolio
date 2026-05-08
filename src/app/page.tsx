import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-black text-white selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <div id="about" className="h-0" /> {/* Spacer for about scroll target */}
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
