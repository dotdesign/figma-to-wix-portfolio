
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Modern E-commerce Platform",
    category: "Web Design",
    description: "A minimalist e-commerce platform with a focus on user experience and conversion optimization.",
    image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=2670&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 2,
    title: "Financial Dashboard",
    category: "UI/UX Design",
    description: "An intuitive dashboard for financial analytics with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 3,
    title: "Travel Application",
    category: "Mobile App",
    description: "A travel companion app that helps users discover and plan their next adventure.",
    image: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=2674&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 4,
    title: "Wellness Platform",
    category: "Web Development",
    description: "A platform focused on mental and physical wellness, featuring guided content and progress tracking.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2670&auto=format&fit=crop",
    link: "#",
  },
];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [isLoading, setIsLoading] = useState(true);

  const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];

  useEffect(() => {
    // Simulate loading for demonstration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((project) => project.category === activeFilter));
    }
  }, [activeFilter]);

  return (
    <section id="portfolio" className="py-24 bg-secondary/30">
      <Container>
        <Reveal>
          <Badge variant="outline" className="mb-4">My Work</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Explore my carefully curated selection of projects that showcase my skills, creativity, and attention to detail.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.id} delay={300 + index * 100} className="h-full">
              <div className="bg-background rounded-lg overflow-hidden border border-border h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="relative">
                  <AspectRatio ratio={16 / 9} className="bg-muted">
                    {isLoading ? (
                      <div className="absolute inset-0 bg-muted animate-pulse" />
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                    )}
                  </AspectRatio>
                  <Badge className="absolute top-4 left-4">{project.category}</Badge>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-foreground hover:text-primary/80 transition-colors group"
                  >
                    View Project <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={600} className="flex justify-center mt-12">
          <Button className="group">
            View All Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}

export default Portfolio;
