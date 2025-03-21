
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { Download, FileText } from "lucide-react";

export function About() {
  const skills = [
    "UX Research",
    "User Testing",
    "Interaction Design",
    "Wireframing",
    "Prototyping",
    "Design Systems",
    "Information Architecture",
    "Usability Analysis",
    "Service Design",
    "Enterprise UX",
    "User Journey Mapping",
    "Heuristic Evaluation"
  ];

  return (
    <section id="about" className="py-16 bg-noise">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-50 to-purple-50 blur-2xl opacity-70 -z-10"></div>
              <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-muted">
                <img
                  src="/lovable-uploads/18942d53-ddea-43be-8872-1dbbeeacff09.png"
                  alt="Profile"
                  className="h-full w-full object-contain scale-95"
                />
              </div>
              <div className="glass border border-white/20 rounded-lg p-4 absolute -bottom-6 -right-6 backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <div className="text-sm font-medium font-merriweather">Available for Work</div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="order-1 md:order-2">
            <Reveal>
              <Badge variant="outline" className="mb-3 font-merriweather">About Me</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 font-merriweather leading-tight">Creating digital experiences with purpose</h2>
            </Reveal>
            
            <Reveal delay={200}>
              <p className="text-muted-foreground mb-4 font-merriweather">
                I'm a passionate UX consultant with over 18 years of experience creating exceptional digital experiences across multiple industries. I combine human-centered design with strategic business thinking to build solutions that truly resonate with users.
              </p>
              <p className="text-muted-foreground mb-5 font-merriweather">
                My approach focuses on research-driven insights, attention to detail, and user-centered methodologies. I specialize in transforming complex business requirements into intuitive interfaces that drive measurable business outcomes.
              </p>
            </Reveal>
            
            <Reveal delay={300}>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 font-merriweather">My Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1 font-merriweather">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={400}>
              <div className="flex flex-wrap gap-4">
                <Button className="group font-merriweather">
                  <FileText className="mr-2 h-4 w-4" /> My Resume
                </Button>
                <Button variant="outline" className="font-merriweather">
                  <Download className="mr-2 h-4 w-4" /> Download CV
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
