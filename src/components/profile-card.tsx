"use client"; // Add "use client" directive

import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export function ProfileCard() {
  const name = "Robiul Hossain";
  const title = "Full Stack Developer";
  const bio = "Passionate developer creating modern web experiences. Skilled in React, Node.js, and cloud technologies. Always learning and exploring new tech.";
  const initials = name.split(' ').map(n => n[0]).join('');
  const avatarUrl = "https://i.postimg.cc/FrbL3CbK/P-P.jpg?dl=1"; // Keep consistent avatar

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-4 text-center lg:text-left">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Hello, I&apos;m
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
              {name}
            </h1>
            <h2 className="text-2xl font-medium text-accent sm:text-3xl">
              {title}
            </h2>
            <p className="max-w-xl text-lg text-muted-foreground mx-auto lg:mx-0">
              {bio}
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 pt-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-200 shadow-md">
                 <Download className="mr-2 h-5 w-5" /> Download CV
              </Button>
              <div className="flex justify-center lg:justify-start space-x-3">
                 <Button variant="outline" size="icon" asChild className="hover:bg-accent/10 shadow-sm border-border/70">
                   <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                     <Github className="h-5 w-5 text-foreground/80" />
                   </a>
                 </Button>
                 <Button variant="outline" size="icon" asChild className="hover:bg-accent/10 shadow-sm border-border/70">
                   <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                     <Linkedin className="h-5 w-5 text-foreground/80" />
                   </a>
                 </Button>
                  <Button variant="outline" size="icon" asChild className="hover:bg-accent/10 shadow-sm border-border/70">
                   <a href="mailto:email@example.com" aria-label="Email">
                     <Mail className="h-5 w-5 text-foreground/80" />
                   </a>
                 </Button>
               </div>
            </div>
          </div>

          {/* Right Column: Avatar */}
          <div className="flex justify-center lg:justify-end">
             <div className="relative group">
                {/* Removed animate-tilt div as styled-jsx is not allowed in Server Components */}
                 <Avatar className="relative w-64 h-64 md:w-80 md:h-80 border-4 border-background shadow-xl">
                    <AvatarImage src={avatarUrl} alt={name} className="object-cover"/>
                    <AvatarFallback className="text-6xl bg-secondary text-secondary-foreground">{initials}</AvatarFallback>
                </Avatar>
            </div>
          </div>
        </div>
      </div>
       {/* Optional subtle pattern or shape in background */}
       {/* <div className="absolute top-0 left-0 -z-10 opacity-5">
         <svg width="100%" height="100%" > ... complex background pattern ... </svg>
       </div> */}
       {/* Removed styled-jsx block */}
    </section>
  );
}
