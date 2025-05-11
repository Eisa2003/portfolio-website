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
    title: "E-commerce Platform",
    description:
      "A modern e-commerce platform with advanced filtering and payment integration.",
    longDescription:
      "A comprehensive e-commerce solution built with React and Node.js. Features include product filtering, user authentication, shopping cart functionality, payment processing with Stripe, and an admin dashboard for inventory management. The application uses MongoDB for data storage and Redux for state management.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "project2",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates.",
    longDescription:
      "A productivity tool designed for teams to manage tasks efficiently. Built with Vue.js and Firebase, it offers real-time updates, task assignment, due date tracking, and progress monitoring. The app includes notification systems and integrates with popular calendar applications.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    technologies: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "project3",
    title: "Fitness Tracker",
    description:
      "A mobile-first web application for tracking workouts and nutrition.",
    longDescription:
      "A comprehensive fitness solution that helps users track their workouts, nutrition, and progress over time. Built with React Native for cross-platform compatibility, it features custom workout creation, nutrition logging, progress charts, and social sharing capabilities.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    technologies: ["React Native", "GraphQL", "Node.js", "MongoDB"],
    githubUrl: "https://github.com",
  },
  {
    id: "project4",
    title: "Weather Dashboard",
    description:
      "An interactive weather dashboard with location-based forecasts.",
    longDescription:
      "A weather application that provides detailed forecasts based on user location. It integrates with multiple weather APIs to ensure accurate data and features interactive maps, hourly and weekly forecasts, severe weather alerts, and customizable units of measurement.",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    technologies: ["JavaScript", "HTML/CSS", "Weather API", "Leaflet.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "project5",
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills.",
    longDescription:
      "A modern, responsive portfolio website built with React and Tailwind CSS. Features include smooth scrolling, animated sections, dark mode support, contact form integration, and optimized performance metrics.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "project6",
    title: "Recipe Finder",
    description:
      "A web application for discovering and saving recipes based on available ingredients.",
    longDescription:
      "A culinary companion app that helps users find recipes based on ingredients they already have. Built with Angular and Firebase, it features ingredient-based search, recipe saving, nutritional information, and user reviews. The app also includes a meal planning feature and shopping list generation.",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
    technologies: ["Angular", "Firebase", "RxJS", "Recipe API"],
    liveUrl: "https://example.com",
  },
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
