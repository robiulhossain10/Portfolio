import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function ProfileCard() {
  const name = "Alex Persona";
  const title = "Full Stack Developer";
  const bio = "Passionate developer creating modern web experiences. Skilled in React, Node.js, and cloud technologies. Always learning and exploring new tech.";
  const initials = name.split(' ').map(n => n[0]).join('');

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="bg-primary text-primary-foreground p-6 text-center">
        <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-accent">
          {/* Placeholder image */}
          <AvatarImage src="https://picsum.photos/seed/persona/200" alt={name} />
          <AvatarFallback className="text-3xl bg-secondary text-secondary-foreground">{initials}</AvatarFallback>
        </Avatar>
        <CardTitle className="text-2xl font-bold">{name}</CardTitle>
        <CardDescription className="text-primary-foreground/80 text-lg">{title}</CardDescription>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <p className="text-muted-foreground text-center">{bio}</p>
        <div className="flex justify-center space-x-4 pt-4">
          <Button variant="outline" size="icon" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
           <Button variant="outline" size="icon" asChild>
            <a href="mailto:email@example.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
