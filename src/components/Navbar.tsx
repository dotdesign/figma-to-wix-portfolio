
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { MenuIcon, X } from "lucide-react";
import { useEffect, useState } from "react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-3 glass border-b border-white/10 backdrop-blur-lg"
          : "py-5 bg-transparent"
      )}
    >
      <Container className="flex items-center justify-between">
        <a
          href="#"
          className="text-2xl font-bold tracking-tighter text-foreground relative z-10 transition-transform duration-300 hover:scale-[1.02]"
        >
          Portfolio
        </a>

        {isMobile ? (
          <>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle menu"
              className="z-10"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </Button>

            {mobileMenuOpen && (
              <div className="fixed inset-0 glass-dark animate-fade-in z-0">
                <nav className="flex flex-col items-center justify-center h-full">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-2xl font-medium py-4 px-8 hover:text-primary/80 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                  <Button className="mt-8">Get In Touch</Button>
                </nav>
              </div>
            )}
          </>
        ) : (
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium hover:text-primary/80 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary hover:after:w-full after:transition-all"
              >
                {item.label}
              </a>
            ))}
            <Button>Get In Touch</Button>
          </nav>
        )}
      </Container>
    </header>
  );
}

export default Navbar;
