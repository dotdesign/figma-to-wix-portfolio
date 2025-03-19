
import Reveal from "@/components/ui/Reveal";

interface KeyFeaturesProps {
  features: string[];
  imageSrc: string;
}

export function KeyFeatures({ features, imageSrc }: KeyFeaturesProps) {
  return (
    <Reveal>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-bold mb-4 font-display">6. Key Features Delivered</h2>
          <ul className="ml-6 space-y-2 list-disc">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div>
          <img 
            src={imageSrc}
            alt="Dashboard Design" 
            className="rounded-lg mb-4 h-64 w-full object-cover"
          />
        </div>
      </section>
    </Reveal>
  );
}

export default KeyFeatures;
