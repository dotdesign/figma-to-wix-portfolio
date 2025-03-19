
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/ui/Reveal";
import { ExternalLink } from "lucide-react";

interface ProjectDetail {
  label: string;
  value: string;
}

interface ProjectSidebarProps {
  details: ProjectDetail[];
  tools: string[];
}

export function ProjectSidebar({ details, tools }: ProjectSidebarProps) {
  return (
    <div className="space-y-8">
      <Reveal>
        <div className="bg-primary/5 rounded-lg p-6">
          <h3 className="font-bold text-xl mb-4">Project Details</h3>
          <div className="space-y-4">
            {details.map((detail, index) => (
              <div key={index}>
                <p className="text-sm text-muted-foreground">{detail.label}</p>
                <p className="font-medium">{detail.value}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={200}>
        <div className="space-y-4">
          <h3 className="font-bold text-xl mb-4">Tools Used</h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <Badge key={tool} variant="secondary">{tool}</Badge>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={300}>
        <div className="border-t pt-6">
          <h3 className="font-bold text-xl mb-4">Contact</h3>
          <p className="text-muted-foreground mb-4">Interested in discussing this project or something similar?</p>
          <Button className="w-full">
            Get in Touch
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Reveal>
    </div>
  );
}

export default ProjectSidebar;
