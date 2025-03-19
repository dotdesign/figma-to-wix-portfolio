
import Reveal from "@/components/ui/Reveal";

interface OverviewItem {
  label: string;
  value: string;
}

interface ProjectOverviewProps {
  items: OverviewItem[];
}

export function ProjectOverview({ items }: ProjectOverviewProps) {
  return (
    <Reveal>
      <section>
        <h2 className="text-2xl font-bold mb-4 font-display">1. Project Overview</h2>
        <ul className="ml-6 space-y-2 list-disc">
          {items.map((item, index) => (
            <li key={index}>
              <span className="font-medium">{item.label}:</span> {item.value}
            </li>
          ))}
        </ul>
      </section>
    </Reveal>
  );
}

export default ProjectOverview;
