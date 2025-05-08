// src/components/profile-card.tsx
"use client";

import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Briefcase, Youtube, Code } from "lucide-react";
import { TypingAnimation } from "./typing-animation"; // Import the new component

export function ProfileCard() {
  const name = "Robiul Hossain";
  const bio = "Passionate developer creating modern web experiences. Skilled in React, Node.js, and cloud technologies. Always learning and exploring new tech.";
  const initials = name.split(' ').map(n => n[0]).join('');
  const avatarUrl = "https://i.postimg.cc/FrbL3CbK/P-P.jpg?dl=1";
  const titles = ["Full Stack Developer", "Freelancer", "YouTuber"];
  const titleIcons = [<Code key="dev" className="inline-block h-7 w-7 mr-2 text-accent" />, <Briefcase key="freelance" className="inline-block h-7 w-7 mr-2 text-accent" />, <Youtube key="youtube" className="inline-block h-7 w-7 mr-2 text-accent" />];


  return (
    <section className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-background to-secondary/40 relative overflow-hidden">
      {/* Background shapes - subtle and decorative */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 mix-blend-overlay">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="hsl(var(--accent))" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern-circles)" />
        </svg>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-5 items-center">
          {/* Left Column: Avatar */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="relative group transform transition-all duration-500 hover:scale-105">
              <Avatar className="w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 border-4 border-background shadow-2xl ring-4 ring-accent/30 group-hover:ring-accent/50 transition-all duration-300">
                <AvatarImage src={avatarUrl} alt={name} className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <AvatarFallback className="text-6xl bg-secondary text-secondary-foreground">{initials}</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-lg group-hover:animate-pulse">
                <Code className="w-10 h-10 text-accent-foreground" />
              </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="lg:col-span-3 space-y-6 text-center lg:text-left">
            <span className="text-base font-semibold uppercase tracking-wider text-accent">
              Hello, I&apos;m
            </span>
            <h1 className="text-5xl font-extrabold tracking-tight text-primary sm:text-6xl md:text-7xl">
              {name}
            </h1>
            <div className="h-16 sm:h-12 md:h-10"> {/* Ensure consistent height for typing animation */}
              <TypingAnimation texts={titles} icons={titleIcons} />
            </div>
            <p className="max-w-xl text-lg text-muted-foreground mx-auto lg:mx-0 leading-relaxed">
              {bio}
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-6">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-300 shadow-lg transform hover:scale-105 focus:ring-4 focus:ring-accent/50">
                <Download className="mr-2 h-5 w-5" /> Download CV
              </Button>
              <div className="flex justify-center lg:justify-start space-x-3">
                <Button variant="outline" size="icon" asChild className="hover:bg-accent/10 shadow-md border-border/70 transform hover:scale-110 transition-transform duration-200 focus:ring-2 focus:ring-accent/50">
                  <a href="https://github.com/robiulhossain-dev" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                    <Github className="h-5 w-5 text-foreground/80" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="hover:bg-accent/10 shadow-md border-border/70 transform hover:scale-110 transition-transform duration-200 focus:ring-2 focus:ring-accent/50">
                  <a href="https://www.linkedin.com/in/robiul-hossain-dev/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                    <Linkedin className="h-5 w-5 text-foreground/80" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="hover:bg-accent/10 shadow-md border-border/70 transform hover:scale-110 transition-transform duration-200 focus:ring-2 focus:ring-accent/50">
                  <a href="mailto:info@robiulhossain.dev" aria-label="Email">
                    <Mail className="h-5 w-5 text-foreground/80" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
