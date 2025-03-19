
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

interface FeaturedImageProps {
  src: string;
  alt: string;
}

export function FeaturedImage({ src, alt }: FeaturedImageProps) {
  return (
    <Container className="relative -mt-10 mb-12">
      <Reveal>
        <div className="rounded-lg overflow-hidden shadow-xl">
          <img 
            src={src} 
            alt={alt} 
            className="w-full object-cover h-[400px] md:h-[500px]"
          />
        </div>
      </Reveal>
    </Container>
  );
}

export default FeaturedImage;
