import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background",
        isScrolled ? "shadow-md py-2" : "py-4",
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          href="#"
          className="text-2xl font-bold text-primary font-mono flex items-center"
        >
          <span className="text-primary mr-1">~/</span>
          <span className="text-primary">Eisa-Portfolio</span>
          <span className="text-primary/70">.dev</span>
          <span className="animate-blink ml-1 text-primary">▌</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 py-1 border border-primary/30 rounded bg-background/80 hover:bg-primary/10 text-foreground/80 hover:text-primary transition-colors font-medium font-mono flex items-center"
            >
              <span className="text-primary mr-1">./</span>
              {item.label}
            </a>
          ))}
          <a href="/Eisa_Chaudhary_Resume.pdf" download>
            <Button variant="default" size="sm" className="font-mono">
              <span className="text-primary-foreground mr-1">$</span> cat resume.pdf
            </Button>
          </a>

        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-lg py-4">
          <nav className="container flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium px-4 py-2 border border-primary/30 rounded bg-background/80 hover:bg-primary/10 font-mono flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-primary mr-1">./</span>
                {item.label}
              </a>
            ))}
            <div className="px-4 pt-2">
              <a href="/Eisa_Chaudhary_Resume.pdf" download>
                <Button variant="default" size="sm" className="font-mono">
                  <span className="text-primary-foreground mr-1">$</span> cat resume.pdf
                </Button>
              </a>

            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
