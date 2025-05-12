import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Laptop, Lightbulb, Users } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-card">
      <CardContent className="p-6 space-y-4">
        <div className="bg-primary/10 p-3 rounded-md w-fit">{icon}</div>
        <h3 className="text-xl font-semibold font-mono flex items-center">
          <span className="text-primary mr-2">function</span> {title}() {"{"}...
        </h3>
        <p className="text-muted-foreground font-mono text-sm">
          <span className="text-primary">// </span>
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

export default function AboutSection() {
  const features = [
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Web Development",
      description:
        "Full-stack engineering using React, Spring Boot, and REST APIs with secure, scalable architecture.",
    },
    {
      icon: <Laptop className="h-6 w-6 text-primary" />,
      title: "UI/UX Design",
      description:
        "Designing seamless user interfaces with intuitive flows and a strong focus on accessibility.",
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      title: "Problem Solving",
      description:
        "Combining logic and creativity to tackle complex challenges, especially in machine learning and HPC.",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Collaboration",
      description:
        "Working across teams, sharing research, and contributing to academic and community-driven projects.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 text-center max-w-3xl mx-auto mb-16"
        >
          <div className="font-mono text-sm text-center mb-2">
            <span className="text-primary">~/portfolio</span> $ cat about.md
          </div>
          <h2 className="text-3xl font-bold font-mono">About <span className="text-primary">Me</span></h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <div className="terminal p-4 text-left max-w-2xl mx-auto">
            <p className="text-lg text-foreground font-mono">
              <span className="text-primary">/**</span><br/>
              <span className="pl-4">I'm a computational science major with a minor in Math,</span><br/>
              <span className="pl-4">Having a strong foundation in web development,</span><br/>
              <span className="pl-4">Machine learning, and high-performance computing.</span><br/>
              <span className="pl-4">My work blends engineering and research—building apps,</span><br/>
              <span className="pl-4">training models, and solving real-world problems with data.</span><br/>
              <span className="text-primary">*/</span>
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-card rounded-lg p-8 shadow-lg"
        >
          <div className="terminal-header mb-4">
            <div className="terminal-dot terminal-red"></div>
            <div className="terminal-dot terminal-yellow"></div>
            <div className="terminal-dot terminal-green"></div>
            <div className="ml-2 text-xs text-muted-foreground font-mono">journey.js</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-mono">
                <span className="text-primary">class</span> MyJourney {"{"}...
              </h3>
              <div className="font-mono text-sm">
                <p className="text-muted-foreground">
                  <span className="text-primary">/**</span><br/>
                  <span className="pl-4">As a student researcher and developer, I've worked on academic</span><br/>
                  <span className="pl-4">projects like habit tracking apps, ML-based prediction tools, and</span><br/>
                  <span className="pl-4">parallelized simulations. My focus is on writing clean code,</span><br/>
                  <span className="pl-4">deploying production-ready tools, and learning continuously.</span><br/>
                  <span className="text-primary">*/</span>
                </p>
                <p className="text-muted-foreground mt-4">
                  <span className="text-primary">// When I'm not coding</span><br/>
                  <span className="text-syntax-keyword">function</span> <span className="text-syntax-function">freeTime</span>() {"{"}<br/>
                  <span className="pl-4">tinkering with side projects</span><br/>
                  <span className="pl-4">designing learning visuals in Manim</span><br/>
                  <span className="pl-4">taking long evening walks</span><br/>
                  {"}"};
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="border-2 border-primary/30 p-1 rounded-md">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80"
                  alt="Working on code"
                  className="rounded-md shadow-md"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-card px-2 py-1 rounded border border-border font-mono text-xs">
                <span className="text-primary">$ git commit -m</span> "Working on code"  
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}