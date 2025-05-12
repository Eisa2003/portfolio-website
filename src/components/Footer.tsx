import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-card py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a
              href="#"
              className="text-2xl font-bold text-primary font-mono flex items-center"
            >
              <span className="text-primary mr-1">~/</span>
              <span className="text-primary">Eisa-Portfolio</span>
              <span className="text-primary/70">.dev</span>
            </a>
            <p className="text-muted-foreground mt-2 font-mono">
              <span className="text-primary">// </span>Building exceptional
              digital experiences.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <Button
              variant="outline"
              size="icon"
              className="rounded-md mb-4 border-primary"
              onClick={scrollToTop}
            >
              <ArrowUp className="h-4 w-4 text-primary" />
            </Button>
            <p className="text-muted-foreground text-sm font-mono">
              <span className="text-primary">/* </span>© {currentYear} Eisa
              Chaudhary. All rights reserved.<span className="text-primary"> */</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
