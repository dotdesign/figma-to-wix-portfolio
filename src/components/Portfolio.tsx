
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  detailed: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Ministry of Human Resources & Emiratisation - Dubai Labour",
    category: "UX Research & Design",
    description: "Streamlined labor management processes for Dubai's Ministry of HR, improving workflow efficiency by 35% and enhancing visa application experiences.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2672&auto=format&fit=crop",
    link: "/project/dubai-labour",
    detailed: true,
  },
  {
    id: 2,
    title: "Oil and Gas",
    category: "UI/UX Optimization",
    description: "Redesigned critical monitoring interfaces for offshore platforms, resulting in 28% faster response times to potential safety incidents.",
    image: "https://images.unsplash.com/photo-1518709911915-712d5fd04677?q=80&w=2676&auto=format&fit=crop",
    link: "#",
    detailed: false,
  },
  {
    id: 3,
    title: "US Insurance",
    category: "Digital Transformation",
    description: "Led UX strategy for client portal redesign, increasing customer satisfaction scores by 42% and reducing support calls by 27%.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2670&auto=format&fit=crop",
    link: "#",
    detailed: false,
  },
  {
    id: 4,
    title: "US Telecom Companies",
    category: "Service Design",
    description: "Created omnichannel customer journey maps and service blueprints that led to streamlined onboarding experiences and reduced churn by 18%.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2670&auto=format&fit=crop",
    link: "#",
    detailed: false,
  },
];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

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

  const handleProjectClick = (project: Project) => {
    if (project.detailed) {
      navigate(project.link);
    }
  };

  return (
    <section id="portfolio" className="py-12 bg-secondary/30">
      <Container>
        <Reveal>
          <Badge variant="outline" className="mb-2">My Work</Badge>
          <h2 className="text-3xl md:text-4xl font-semibold mb-2 font-merriweather">Featured Projects</h2>
          <p className="text-muted-foreground mb-4 max-w-2xl font-merriweather font-light">
            Explore my carefully curated selection of projects showcasing enterprise UX solutions for complex business challenges.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="flex flex-wrap gap-3 mb-6">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className="rounded-full font-merriweather"
              >
                {category}
              </Button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.id} delay={300 + index * 100} className="h-full">
              <div 
                className={`bg-background rounded-lg overflow-hidden border border-border h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${project.detailed ? 'cursor-pointer' : ''}`}
                onClick={() => handleProjectClick(project)}
              >
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
                  <Badge className="absolute top-4 left-4 font-merriweather">{project.category}</Badge>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2 font-merriweather">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow font-merriweather font-light">{project.description}</p>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-foreground hover:text-primary/80 transition-colors group font-merriweather"
                    onClick={(e) => {
                      if (project.detailed) {
                        e.preventDefault();
                      }
                    }}
                  >
                    {project.detailed ? "View Detailed Case Study" : "View Project"} <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={600} className="flex justify-center mt-6">
          <Button className="group font-merriweather">
            View All Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}

export default Portfolio;
