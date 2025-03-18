
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { Download, FileText, Mail, User } from "lucide-react";

export function About() {
  const skills = [
    "UI/UX Design",
    "Web Development",
    "Brand Identity",
    "Mobile Design",
    "Prototyping",
    "Interaction Design",
    "User Research",
    "Frontend Development",
  ];

  return (
    <section id="about" className="py-24 bg-noise">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-50 to-purple-50 blur-2xl opacity-70 -z-10"></div>
              <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-muted">
                <img
                  src="/lovable-uploads/18942d53-ddea-43be-8872-1dbbeeacff09.png"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="glass border border-white/20 rounded-lg p-4 absolute -bottom-6 -right-6 backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <div className="text-sm font-medium">Available for Work</div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="order-1 md:order-2">
            <Reveal>
              <Badge variant="outline" className="mb-4">About Me</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Creating digital experiences with purpose</h2>
            </Reveal>
            
            <Reveal delay={200}>
              <p className="text-muted-foreground mb-6">
                I'm a passionate designer and developer with over 8 years of experience creating exceptional digital experiences. I combine aesthetic sensibility with technical expertise to build products that are both beautiful and functional.
              </p>
              <p className="text-muted-foreground mb-8">
                My approach focuses on minimalism, attention to detail, and user-centered design. I believe in creating digital products that solve real problems while providing enjoyable experiences.
              </p>
            </Reveal>
            
            <Reveal delay={300}>
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">My Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={400}>
              <div className="flex flex-wrap gap-4">
                <Button className="group">
                  <FileText className="mr-2 h-4 w-4" /> My Resume
                </Button>
                <Button variant="outline">
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
