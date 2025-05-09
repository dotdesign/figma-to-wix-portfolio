
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProjectHeroProps {
  title: string;
  tags: string[];
}

export function ProjectHero({ title, tags }: ProjectHeroProps) {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 overflow-hidden bg-noise">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background z-0"></div>
      
      <Container className="relative z-10">
        <Button 
          variant="ghost" 
          className="mb-8 -ml-4 group font-sans" 
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Portfolio
        </Button>
        
        <Reveal>
          <Badge className="mb-3 font-sans">Case Study</Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-sans tracking-tight">
            {title}
          </h1>
        </Reveal>
        
        <Reveal delay={200}>
          <div className="flex flex-wrap gap-4 my-6">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="font-sans">{tag}</Badge>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default ProjectHero;
