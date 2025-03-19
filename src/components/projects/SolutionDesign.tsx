
import Reveal from "@/components/ui/Reveal";

interface SolutionDesignProps {
  description: string;
  solutions: {
    main: string;
    subItems?: string[];
  }[];
}

export function SolutionDesign({ description, solutions }: SolutionDesignProps) {
  return (
    <Reveal>
      <section>
        <h2 className="text-2xl font-bold mb-4 font-display">4. Solution Design</h2>
        <p className="text-muted-foreground mb-4">
          {description}
        </p>
        <ul className="ml-6 space-y-2 list-disc">
          {solutions.map((solution, index) => (
            <li key={index}>
              {solution.main}
              {solution.subItems && solution.subItems.length > 0 && (
                <ul className="ml-6 space-y-1 list-circle mt-2">
                  {solution.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>{subItem}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </section>
    </Reveal>
  );
}

export default SolutionDesign;
