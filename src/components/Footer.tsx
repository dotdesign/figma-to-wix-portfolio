
import Container from "@/components/ui/Container";
import { Github, Dribbble, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-secondary/30 border-t border-border">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="#" className="text-2xl font-bold tracking-tighter mb-6 inline-block">
              Portfolio
            </a>
            <p className="text-muted-foreground max-w-md mb-6">
              Creating digital experiences that inspire. Specializing in UI/UX design and web development with a focus on beautiful, functional solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Dribbble"
              >
                <Dribbble className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-3">
              {["Home", "Portfolio", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>San Francisco, CA</li>
              <li>
                <a href="mailto:hello@example.com" className="hover:text-foreground transition-colors">
                  hello@example.com
                </a>
              </li>
              <li>
                <a href="tel:+11234567890" className="hover:text-foreground transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {year} Portfolio. All rights reserved.
          </p>
          <div className="text-sm text-muted-foreground flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
