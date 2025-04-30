import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Project Alpha",
    description: "An innovative web application leveraging modern technologies for seamless user experience.",
    imageUrl: "https://picsum.photos/seed/alpha/600/400",
    liveUrl: "#",
    repoUrl: "#",
    tags: ["React", "Node.js", "PostgreSQL"]
  },
  {
    title: "Project Beta",
    description: "A mobile-first platform designed for on-the-go productivity and collaboration.",
    imageUrl: "https://picsum.photos/seed/beta/600/400",
    liveUrl: "#",
    repoUrl: "#",
    tags: ["Angular", "Firebase", "PWA"]
  },
  {
    title: "Project Gamma",
    description: "Data visualization dashboard providing real-time insights for business intelligence.",
    imageUrl: "https://picsum.photos/seed/gamma/600/400",
    liveUrl: "#",
    repoUrl: "#",
    tags: ["Next.js", "Tailwind", "Chart.js"]
  },
   {
    title: "Project Delta",
    description: "E-commerce site with secure payments and inventory management.",
    imageUrl: "https://picsum.photos/seed/delta/600/400",
    liveUrl: "#",
    repoUrl: "#",
    tags: ["TypeScript", "Stripe", "AWS"]
  }
];

export function ProjectGallery() {
  return (
    <div className="w-full max-w-9/10 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card key={project.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader className="p-0">
               <div className="relative w-full h-48">
                 <Image
                    src={project.imageUrl}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                 />
               </div>
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <CardTitle className="text-xl font-semibold mb-2">{project.title}</CardTitle>
              <CardDescription className="text-muted-foreground mb-4">{project.description}</CardDescription>
               <div className="flex flex-wrap gap-2 mb-4">
                 {project.tags.map(tag => (
                   <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                     {tag}
                   </span>
                 ))}
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex justify-end space-x-3 bg-secondary/30">
               <Button variant="outline" size="sm" asChild>
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub Repository`}>
                  <Github className="mr-2 h-4 w-4" /> Code
                </a>
              </Button>
              <Button variant="default" size="sm" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} Live Demo`}>
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
