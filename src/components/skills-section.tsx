import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Settings, Terminal } from "lucide-react"; // Example icons

// Define skills with categories and icons
const skillsData = [
  { category: "Frontend", skills: ["React", "Angular", "Next.js", "Tailwind CSS", "TypeScript"], icon: Code },
  { category: "Backend", skills: ["Node.js", "Express", "Python", "Django"], icon: Terminal },
  { category: "Databases", skills: ["PostgreSQL", "MongoDB", "Firebase"], icon: Database },
  { category: "DevOps & Cloud", skills: ["Docker", "AWS", "GCP", "CI/CD"], icon: Cloud },
  { category: "Tools", skills: ["Git", "Webpack", "Jest", "Figma"], icon: Settings },
];

export function SkillsSection() {
  return (
    <Card className="w-full max-w-6xl mx-auto shadow-lg rounded-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Skills</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {skillsData.map(({ category, skills, icon: Icon }) => (
          <div key={category} className="space-y-3 p-4 border rounded-md bg-card hover:shadow-md transition-shadow duration-200">
            <h3 className="text-lg font-semibold flex items-center gap-2 text-primary">
              <Icon className="w-5 h-5 text-accent" />
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="hover:bg-accent hover:text-accent-foreground transition-colors duration-200 cursor-default">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
