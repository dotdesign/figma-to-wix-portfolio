
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { ArrowDown, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 pb-12 overflow-hidden bg-noise"
    >
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-background opacity-70 z-0"></div>
      
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl z-0" 
        style={{ animation: 'float 15s ease-in-out infinite' }}
      ></div>
      <div 
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl z-0" 
        style={{ animation: 'float 18s ease-in-out infinite 2s' }}
      ></div>
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <Badge variant="outline" className="mb-3 py-1.5 text-sm font-medium">
              Creative Portfolio
            </Badge>
          </Reveal>
          
          <Reveal delay={200}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-4 text-balance">
              <span className="text-fade-in inline-block overflow-hidden">
                <span>Creating</span>{" "}
                <span>digital</span>{" "}
                <span>experiences</span>{" "}
                <span>that</span>{" "}
                <span>inspire</span>
              </span>
            </h1>
          </Reveal>
          
          <Reveal delay={400}>
            <p className="text-lg md:text-xl text-muted-foreground mb-5 max-w-2xl mx-auto font-bold">
              UX Consultant | 18+ Years of Experience
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              I specialize in transforming complex user experiences into intuitive, user-friendly interfaces. My expertise spans process-oriented user research, UX analysis, and design systems. With a deep passion for understanding user behavior, I thrive on solving intricate design challenges.
            </p>
          </Reveal>
          
          <Reveal delay={600}>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="group">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                About Me
              </Button>
            </div>
          </Reveal>
        </div>
        
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#portfolio" className="flex flex-col items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
            <span className="mb-1">Scroll Down</span>
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
