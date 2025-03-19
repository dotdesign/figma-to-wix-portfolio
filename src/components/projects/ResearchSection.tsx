
import Reveal from "@/components/ui/Reveal";

interface ResearchSectionProps {
  imageSrc: string;
  researchPoints: string[];
}

export function ResearchSection({ imageSrc, researchPoints }: ResearchSectionProps) {
  return (
    <Reveal>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img 
            src={imageSrc}
            alt="User Research Session" 
            className="rounded-lg mb-4 h-64 w-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 font-display">3. Research & Discovery</h2>
          <ul className="ml-6 space-y-2 list-disc">
            {researchPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </section>
    </Reveal>
  );
}

export default ResearchSection;
