
import Reveal from "@/components/ui/Reveal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ProcessItem {
  title: string;
  description: string;
}

interface ProcessSectionProps {
  processes: ProcessItem[];
}

export function ProcessSection({ processes }: ProcessSectionProps) {
  return (
    <Reveal>
      <section>
        <h2 className="text-2xl font-bold mb-4 font-display">5. Process & Methodology</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {processes.map((process, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{process.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{process.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </Reveal>
  );
}

export default ProcessSection;
