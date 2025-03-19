
import Reveal from "@/components/ui/Reveal";

interface ResultItem {
  percentage: string;
  description: string;
}

interface ResultsSectionProps {
  results: ResultItem[];
}

export function ResultsSection({ results }: ResultsSectionProps) {
  return (
    <Reveal>
      <section>
        <h2 className="text-2xl font-bold mb-4 font-display">7. Results & Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {results.map((result, index) => (
            <div key={index} className="bg-primary/5 rounded-lg p-6 text-center">
              <p className="text-3xl font-bold text-primary mb-2">{result.percentage}</p>
              <p className="text-sm text-muted-foreground">{result.description}</p>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}

export default ResultsSection;
