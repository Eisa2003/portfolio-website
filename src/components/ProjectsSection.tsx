import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink, Github, X } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "project1",
    title: "Habitly - Habit Tracking App",
    description:
      "A full-stack habit tracking app that uses machine learning to predict user behavior and visualizes progress.",
    longDescription:
      "Developed a comprehensive habit tracking system using React and Spring Boot with JWT authentication. The app supports user registration, habit creation, weekly tracking, and progress visualization using Recharts. Integrated ML models to provide habit completion predictions based on historical data.",
    image: "/images/habitly-screenshot.png",
    technologies: ["React", "Spring Boot", "JWT", "Recharts", "Machine Learning"],
    liveUrl: "https://habitly-team6.netlify.app/",
    githubUrl: "https://github.com/eisachaudhary/habitly-tracker",
    featured: true,
  },
  {
    id: "project2",
    title: "Hampton County Resource Center",
    description:
      "A dynamic community resource website for local events and public information.",
    longDescription:
      "Built and deployed a dynamic website for Hampton County communities using the MERN stack. The site features a RESTful API for managing county events and public resources. Deployed on AWS Console with full stack authentication and manual EC2/S3 setup.",
    image: "/images/hampton-screenshot.png",
    technologies: ["MongoDB", "Express", "React", "Node.js", "AWS"],
    liveUrl: "https://hamptoncountyresourcecenter.org/",
    githubUrl: "https://github.com/eisachaudhary/hampton-resource-center",
    featured: true,
  },
  {
    id: "project3",
    title: "Manananggal – Java Game Design",
    description:
      "An algorithmic arcade game inspired by Philippine folklore, created in Greenfoot.",
    longDescription:
      "Award-winning game project built in Java using Greenfoot. Focused on algorithmic design, this game brings Philippine mythology to life through interactive elements and challenges. Presented as part of Java Algorithmic Design coursework.",
    image: "/images/manananggal-screenshot.png",
    technologies: ["Java", "Greenfoot", "OOP"],
    liveUrl: "https://www.greenfoot.org/scenarios/30358",
    githubUrl: "https://github.com/eisachaudhary/manananggal-greenfoot",
  },
  {
    id: "project4",
    title: "Tutoring Website – IT Diploma Capstone Project",
    description:
      "An educational portal to help students learn coding in various programming languages.",
    longDescription:
      "Designed as a capstone project, this platform helps students learn to code with guided tutorials, quizzes, and language-specific pathways. Built using HTML, CSS, JS, and Node with PHP/MySQL backend integration.",
    image: "/images/tutoring-screenshot.png",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL", "PHP"],
    liveUrl: "#",
    githubUrl: "https://github.com/eisachaudhary/online-tutoring-platform",
  },
  {
    id: "project5",
    title: "Personal Portfolio",
    description:
      "A portfolio website showcasing projects, experience, and skills with a terminal-style interface.",
    longDescription:
      "Responsive portfolio site built with React, Tailwind CSS, and Framer Motion. Highlights key projects, includes contact functionality, resume viewing, and a custom terminal-like hero section with animated typing effects.",
    image: "/images/portfolio-screenshot.png",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://eisachaudhary.dev/",
    githubUrl: "https://github.com/eisachaudhary/portfolio-site",
  },
  {
    id: "project6",
    title: "Predicting Success in STATB201",
    description:
      "An ML research project to predict student performance in a college statistics course.",
    longDescription:
      "Conducted an independent research project under Dr. Fusi to predict success in STATB201 using past academic performance. Used Python and scikit-learn to train models like logistic regression, decision trees, and KNN. Built a Dash web app to visualize results and support academic advising.",
    image: "/images/statb201-research-screenshot.png",
    technologies: ["Python", "scikit-learn", "Pandas", "Dash", "Plotly"],
    liveUrl: "#",
    githubUrl: "https://github.com/eisachaudhary/statb201-ml-research",
  }
];



export default function ProjectsSection() {
  const [filter, setFilter] = useState<"all" | "featured">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.featured);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 text-center max-w-3xl mx-auto mb-16"
        >
          <div className="font-mono text-sm text-center mb-2">
            <span className="text-primary">~/projects</span> $ ls -la
          </div>
          <h2 className="text-3xl font-bold font-mono">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="text-lg text-muted-foreground font-mono">
            <span className="text-primary">// </span>A selection of my recent
            work and personal projects.
          </p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm font-mono">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              className="rounded-r-none"
              onClick={() => setFilter("all")}
            >
              <span className="text-primary mr-1">$</span> find . -type f
            </Button>
            <Button
              variant={filter === "featured" ? "default" : "outline"}
              className="rounded-l-none"
              onClick={() => setFilter("featured")}
            >
              <span className="text-primary mr-1">$</span> grep -l "featured"
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow border-none shadow-md bg-card">
                <div className="terminal-header px-4 pt-3">
                  <div className="terminal-dot terminal-red"></div>
                  <div className="terminal-dot terminal-yellow"></div>
                  <div className="terminal-dot terminal-green"></div>
                  <div className="ml-2 text-xs text-muted-foreground font-mono">
                    {project.id}.js
                  </div>
                </div>
                <div className="relative aspect-video overflow-hidden p-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500 rounded border border-border"
                  />
                  {project.featured && (
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground font-mono text-xs">
                      git tag -a featured
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2 font-mono flex items-center">
                    <span className="text-primary mr-2">./</span>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 font-mono text-sm">
                    <span className="text-primary">// </span>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="font-mono text-xs"
                      >
                        import {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="font-mono text-xs">
                        +{project.technologies.length - 3} deps
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button
                    variant="default"
                    className="w-full font-mono text-sm"
                    onClick={() => setSelectedProject(project)}
                  >
                    <span className="text-primary-foreground mr-1">$</span> npm
                    run details
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Details Dialog */}
        <Dialog
          open={!!selectedProject}
          onOpenChange={(open) => !open && setSelectedProject(null)}
        >
          {selectedProject && (
            <DialogContent className="max-w-3xl bg-card">
              <div className="terminal-header px-4 pt-3">
                <div className="terminal-dot terminal-red"></div>
                <div className="terminal-dot terminal-yellow"></div>
                <div className="terminal-dot terminal-green"></div>
                <div className="ml-2 text-xs text-muted-foreground font-mono">
                  {selectedProject.id}_details.js
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-4"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <DialogHeader>
                <DialogTitle className="text-2xl font-mono mt-4">
                  <span className="text-primary">const</span> project ={" "}
                  <span className="text-primary">
                    "{selectedProject.title}"
                  </span>
                  ;
                </DialogTitle>
              </DialogHeader>
              <div className="aspect-video overflow-hidden rounded-md mb-4 border border-border">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <DialogDescription className="text-foreground font-mono text-sm">
                <span className="text-primary">/**</span>
                <br />
                {(
                  selectedProject.longDescription || selectedProject.description
                )
                  .split("\n")
                  .map((line, i) => (
                    <span key={i} className="block pl-4">
                      {line}
                    </span>
                  ))}
                <span className="text-primary">*/</span>
              </DialogDescription>
              <div className="mt-4">
                <h4 className="font-semibold mb-2 font-mono">
                  <span className="text-primary">import</span> {"{"}technologies
                  {"}"}:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="font-mono">
                      <span className="text-primary">import</span> {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                {selectedProject.liveUrl && (
                  <Button asChild className="font-mono">
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> $ npm run demo
                    </a>
                  </Button>
                )}
                {selectedProject.githubUrl && (
                  <Button variant="outline" asChild className="font-mono">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" /> $ git clone
                    </a>
                  </Button>
                )}
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}
