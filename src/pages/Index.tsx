
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      });
    });
    
    // Update page title
    document.title = "Portfolio - Creative Designer & Developer";
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen w-full">
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
