import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  name: string;
  level: number;
  icon?: string;
}

interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Vue.js", level: 75 },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "Python", level: 70 },
      { name: "Django", level: 65 },
      { name: "GraphQL", level: 75 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    id: "tools",
    name: "Tools & Others",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "CI/CD", level: 80 },
      { name: "Jest", level: 85 },
      { name: "Figma", level: 70 },
      { name: "AWS", level: 65 },
    ],
  },
];

function SkillBar({ skill }: { skill: Skill }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-mono font-medium">{skill.name}</span>
        <span className="text-sm text-muted-foreground font-mono">
          {skill.level}%
        </span>
      </div>
      <div className="terminal-skill relative h-8 bg-muted/50 rounded overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-primary/30 flex items-center px-2"
          style={{ width: `${skill.level}%` }}
        >
          <div className="flex space-x-1">
            {Array.from({ length: Math.floor(skill.level / 3.5) }).map(
              (_, i) => (
                <span key={i} className="text-primary">
                  █
                </span>
              ),
            )}
          </div>
        </div>
        <div className="absolute top-0 right-2 h-full flex items-center">
          <code className="text-xs">{`[${skill.level}/100]`}</code>
        </div>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 text-center max-w-3xl mx-auto mb-16"
        >
          <div className="terminal-header flex justify-center items-center gap-2 mb-2">
            <div className="terminal-dot terminal-red"></div>
            <div className="terminal-dot terminal-yellow"></div>
            <div className="terminal-dot terminal-green"></div>
          </div>
          <h2 className="text-3xl font-bold font-mono">
            $ cat <span className="text-primary">skills.json</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="text-lg text-muted-foreground font-mono">
            <span className="text-primary">/**</span> A comprehensive overview
            of my technical skills and proficiency levels{" "}
            <span className="text-primary">*/</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Tabs defaultValue="frontend" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8 font-mono">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center gap-1"
                >
                  <span className="text-primary">#</span> {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <SkillBar skill={skill} />
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
          <p className="text-muted-foreground">
            I'm constantly expanding my skill set and staying up-to-date with
            the latest technologies. Currently exploring: AI/ML integration,
            Web3 technologies, and advanced animation techniques.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
