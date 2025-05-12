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
    company: "Communities in School - South Carolina",
    position: "Full Stack Web Developer Intern",
    period: "May 2024 – Aug 2024",
    description: [
      "Built a fully functional website using the MERN stack for dynamic content management.",
      "Designed and deployed a secure RESTful API and deployed the app using AWS Console (EC2, S3, Route53).",
      "Gained hands-on experience with manual server configuration and deployment processes."
    ],
    technologies: ["MongoDB", "Express", "React", "Node.js", "AWS", "REST APIs"],
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=cis-intern",
  },
  {
    id: "exp2",
    company: "USCB IT Help Desk",
    position: "Student Technician",
    period: "Feb 2024 – Present",
    description: [
      "Resolved technical support tickets for faculty and staff across university departments.",
      "Configured phone systems and managed technical onboarding for new users.",
      "Contributed to network troubleshooting and improved IT workflow documentation."
    ],
    technologies: ["Windows", "VoIP Systems", "Help Desk", "IT Support"],
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=uscb-helpdesk",
  },
  {
    id: "exp3",
    company: "Sahu Technologies",
    position: "Web Design & Testing Intern",
    period: "Aug 2021 – Sep 2021",
    description: [
      "Planned and completed a client-facing website within 6 weeks using HTML & CSS.",
      "Converted legacy documents to clean, standards-compliant HTML.",
      "Delivered high-quality output with timely client communication."
    ],
    technologies: ["HTML", "CSS", "Client Coordination"],
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=sahu-tech",
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
