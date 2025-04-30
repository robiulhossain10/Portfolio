import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function ProfileCard() {
  const name = "Alex Persona";
  const title = "Full Stack Developer";
  const bio = "Passionate developer creating modern web experiences. Skilled in React, Node.js, and cloud technologies. Always learning and exploring new tech.";
  const initials = name.split(' ').map(n => n[0]).join('');

  return (
    <section className="w-full max-w-4xl mx-auto py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
        {/* Column 1: Avatar and Basic Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Avatar className="w-32 h-32 md:w-40 md:h-40 mb-4 border-4 border-accent shadow-lg">
            <AvatarImage src="https://picsum.photos/seed/persona/200" alt={name} />
            <AvatarFallback className="text-4xl bg-secondary text-secondary-foreground">{initials}</AvatarFallback>
          </Avatar>
          <h1 className="text-3xl md:text-4xl font-bold text-primary">{name}</h1>
          <p className="text-lg md:text-xl text-accent font-medium mt-1">{title}</p>
           <div className="flex justify-center md:justify-start space-x-3 mt-4">
             <Button variant="outline" size="icon" asChild className="hover:bg-accent/10">
               <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                 <Github className="h-5 w-5 text-foreground/80" />
               </a>
             </Button>
             <Button variant="outline" size="icon" asChild className="hover:bg-accent/10">
               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                 <Linkedin className="h-5 w-5 text-foreground/80" />
               </a>
             </Button>
              <Button variant="outline" size="icon" asChild className="hover:bg-accent/10">
               <a href="mailto:email@example.com" aria-label="Email">
                 <Mail className="h-5 w-5 text-foreground/80" />
               </a>
             </Button>
           </div>
        </div>

        {/* Column 2: Bio */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold text-primary mb-4 text-center md:text-left">About Me</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center md:text-left">{bio}</p>
           {/* Optional: Call to Action Button */}
           {/* <div className="mt-6 flex justify-center md:justify-start">
             <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
               View My Work
             </Button>
           </div> */}
        </div>
      </div>
    </section>
  );
}
