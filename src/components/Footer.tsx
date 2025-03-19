
import Container from "@/components/ui/Container";
import { Github, Dribbble, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-secondary/30 border-t border-border">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2">
            <a href="#" className="text-2xl font-bold tracking-tighter mb-4 inline-block">
              Portfolio
            </a>
            <p className="text-muted-foreground max-w-md mb-4">
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
            <h3 className="font-semibold text-lg mb-3">Navigation</h3>
            <ul className="space-y-2">
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
            <h3 className="font-semibold text-lg mb-3">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>Bangalore / Dubai</span>
              </li>
              <li>
                <a href="mailto:Satish.shastry@gmail.com" className="flex items-center hover:text-foreground transition-colors">
                  <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>Satish.shastry@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="mailto:Satish.shastry@techmahindra.com" className="flex items-center hover:text-foreground transition-colors">
                  <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>Satish.shastry@techmahindra.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+919663518572" className="flex items-center hover:text-foreground transition-colors">
                  <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>+91 96635 18572</span>
                </a>
              </li>
              <li>
                <a href="tel:+971568237311" className="flex items-center hover:text-foreground transition-colors">
                  <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>+971 56 823 7311</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-border flex flex-col md:flex-row justify-between items-center gap-3">
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
