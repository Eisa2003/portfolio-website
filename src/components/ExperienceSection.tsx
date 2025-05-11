import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
  logo: string;
}

const experiences: Experience[] = [
  {
    id: "exp1",
    company: "Tech Innovations Inc.",
    position: "Senior Frontend Developer",
    period: "Jan 2023 - Present",
    description: [
      "Led the development of a new customer dashboard using React and TypeScript, improving user engagement by 40%.",
      "Implemented CI/CD pipelines that reduced deployment time by 60%.",
      "Mentored junior developers and conducted code reviews to maintain high code quality standards.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Jest",
      "GitHub Actions",
    ],
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=tech-innovations",
  },
  {
    id: "exp2",
    company: "WebSolutions Co.",
    position: "Full Stack Developer",
    period: "Mar 2020 - Dec 2022",
    description: [
      "Developed and maintained multiple client websites and web applications using modern JavaScript frameworks.",
      "Designed and implemented RESTful APIs using Node.js and Express.",
      "Collaborated with UX designers to implement responsive designs and improve user experience.",
    ],
    technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "Vue.js"],
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=websolutions",
  },
  {
    id: "exp3",
    company: "Digital Creatives",
    position: "Junior Web Developer",
    period: "Jun 2018 - Feb 2020",
    description: [
      "Built and maintained client websites using WordPress and custom PHP solutions.",
      "Implemented responsive designs and ensured cross-browser compatibility.",
      "Assisted in migrating legacy systems to modern web technologies.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "WordPress"],
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=digital-creatives",
  },
];

export default function ExperienceSection() {
  const [activeExperience, setActiveExperience] = useState<string>(
    experiences[0].id,
  );

  const currentExperience =
    experiences.find((exp) => exp.id === activeExperience) || experiences[0];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold">Work Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="text-lg text-muted-foreground">
            My professional journey through various roles and companies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Timeline Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-3 flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-4"
          >
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveExperience(exp.id)}
                className={cn(
                  "flex items-center gap-3 p-4 rounded-lg transition-all whitespace-nowrap",
                  activeExperience === exp.id
                    ? "bg-primary/10 text-primary border-l-4 border-primary"
                    : "hover:bg-muted",
                )}
              >
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-10 h-10 rounded-full"
                />
                <div className="text-left">
                  <p className="font-medium">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>
              </button>
            ))}
          </motion.div>

          {/* Experience Details */}
          <motion.div
            key={activeExperience}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-9"
          >
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={currentExperience.logo}
                      alt={currentExperience.company}
                      className="w-16 h-16 rounded-full border-4 border-muted"
                    />
                    <div>
                      <h3 className="text-2xl font-bold">
                        {currentExperience.position}
                      </h3>
                      <p className="text-lg text-primary">
                        {currentExperience.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground font-medium">
                    {currentExperience.period}
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <h4 className="text-lg font-semibold">
                    Responsibilities & Achievements
                  </h4>
                  <ul className="space-y-2">
                    {currentExperience.description.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentExperience.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
