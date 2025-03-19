
import Reveal from "@/components/ui/Reveal";

interface ChallengeSectionProps {
  description: string;
  challenges: string[];
}

export function ChallengeSection({ description, challenges }: ChallengeSectionProps) {
  return (
    <Reveal>
      <section>
        <h2 className="text-2xl font-bold mb-4 font-display">2. Challenge</h2>
        <p className="text-muted-foreground mb-4">
          {description}
        </p>
        <ul className="ml-6 space-y-2 list-disc">
          {challenges.map((challenge, index) => (
            <li key={index}>{challenge}</li>
          ))}
        </ul>
      </section>
    </Reveal>
  );
}

export default ChallengeSection;
