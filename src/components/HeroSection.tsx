import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

import { useEffect, useState, useRef } from "react";

export default function HeroSection() {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText =
    "const developer = {\n  name: 'John Doe',\n  role: 'Full Stack Developer',\n  skills: ['React', 'TypeScript', 'Node.js', 'Python'],\n  passion: 'Building exceptional digital experiences',\n  focus: 'Creating intuitive, high-performance applications'\n};\n\nconsole.log('Hello World! Welcome to my portfolio.');";
  const typingSpeed = 30;
  const cursorRef = useRef<NodeJS.Timeout | null>(null);
  const typingRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let i = 0;
    typingRef.current = setInterval(() => {
      setText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) {
        if (typingRef.current) clearInterval(typingRef.current);
      }
    }, typingSpeed);

    cursorRef.current = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      if (typingRef.current) clearInterval(typingRef.current);
      if (cursorRef.current) clearInterval(cursorRef.current);
    };
  }, []);

  const formatCode = (code: string) => {
    return code.split("\n").map((line, index) => {
      // Apply syntax highlighting
      const highlightedLine = line
        .replace(
          /(const|let|var|function|return|if|else)/g,
          '<span class="syntax-keyword">$1</span>',
        )
        .replace(/('.*?'|".*?")/g, '<span class="syntax-string">$1</span>')
        .replace(/(\.\w+\()/g, '<span class="syntax-function">$1</span>')
        .replace(/(\w+):/g, '<span class="syntax-variable">$1</span>')
        .replace(/(console\.log)/g, '<span class="syntax-function">$1</span>');

      return (
        <div key={index} className="flex">
          <span className="text-muted-foreground mr-4 select-none">
            {index + 1}
          </span>
          <span dangerouslySetInnerHTML={{ __html: highlightedLine }} />
        </div>
      );
    });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-background pt-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="terminal">
              <div className="terminal-header">
                <div className="terminal-dot terminal-red"></div>
                <div className="terminal-dot terminal-yellow"></div>
                <div className="terminal-dot terminal-green"></div>
                <div className="ml-2 text-xs text-muted-foreground">
                  portfolio.js
                </div>
              </div>
              <div className="font-mono text-sm overflow-x-auto">
                <div className="relative">
                  {formatCode(text)}
                  {showCursor && (
                    <span
                      className="text-primary animate-pulse absolute"
                      style={{ right: "-10px", bottom: "0" }}
                    >
                      ▌
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-primary hover:bg-primary/80 text-primary-foreground"
              >
                <a href="#contact">$ contact --send</a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-primary text-primary hover:bg-primary/10"
              >
                <a href="#projects">$ projects --list</a>
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square max-w-md mx-auto lg:ml-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-md"></div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80"
              alt="Profile"
              className="rounded-md object-cover w-full h-full p-4 border-2 border-primary/30"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-muted-foreground mb-2 font-mono">
            $ scroll --direction=down
          </span>
          <ArrowDown className="h-4 w-4 text-primary animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
