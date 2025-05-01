import { ProfileCard } from "@/components/profile-card";
import { SkillsSection } from "@/components/skills-section";

import { ProjectGallery } from "@/components/project-gallery";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Github, Linkedin, Facebook, Instagram, Twitter } from "lucide-react";

import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
      <div className="flex flex-col min-h-screen bg-background">

        {/* Header/Nav Placeholder - Can be added later */}
        {/*
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
              NAV CONTENT
            </div>
          </header>
        */}

        <main className="flex-grow container mx-auto px-4 space-y-12 md:space-y-20">
        {/* Profile Section */}
        <ProfileCard />

        {/* Skills Section */}
        <section id="skills" className="pt-8 md:pt-12">
          <SkillsSection />
        </section>

        <Separator className="my-12 md:my-16" />

        {/* Projects Section */}
        <section id="projects" className="pt-8 md:pt-12">
          <ProjectGallery />
        </section>

        <Separator className="my-12 md:my-16" />

        {/* Contact Section */}
        <section id="contact" className="pt-8 md:pt-12 pb-16 md:pb-24">
          <ContactForm />
        </section>
      </main>

      {/* Footer Placeholder */}
      <footer className="w-full bg-secondary/10 mt-20">
        <Separator />
        <div className="container py-10 px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Robiul Hossain. All rights reserved.
              </p>
            </div>
            {/* Social Links */}
            <div className="flex gap-6 items-center order-first md:order-last">
                <Link
                  href="https://www.linkedin.com/in/robiul-hossain-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <span className="w-10 h-10 rounded-full bg-gray-200 inline-flex items-center justify-center hover:rotate-[360deg] duration-500">
                    <Linkedin className="w-7 h-7 text-foreground hover:text-primary transition-colors" />
                  </span>
                </Link>
                <Link 
                  href="https://github.com/robiulhossain-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                   <span className="w-10 h-10 rounded-full inline-flex items-center justify-center hover:rotate-[360deg] duration-500">
                      <Github className="w-7 h-7 text-foreground hover:text-primary transition-colors" />
                   </span>
                </Link>
                <Link
                  href="https://www.facebook.com/robiul.hossain.5076798/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Profile"
                >
                  <span className="w-10 h-10 rounded-full inline-flex items-center justify-center hover:rotate-[360deg] duration-500">
                   <Facebook className="w-7 h-7 text-foreground hover:text-primary transition-colors" />
                  </span>
                </Link>
                <Link
                  href="https://twitter.com/Robiul_dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter Profile"
                >
                  <span className="w-10 h-10 rounded-full inline-flex items-center justify-center hover:rotate-[360deg] duration-500">
                   <Twitter className="w-7 h-7 text-foreground hover:text-primary transition-colors" />
                  </span>
                </Link>
                <Link

                  href="https://www.instagram.com/robiul_dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                >
                  <span className="w-10 h-10 rounded-full inline-flex items-center justify-center hover:rotate-[360deg] duration-500">
                   <Instagram className="w-7 h-7 text-foreground hover:text-primary transition-colors" />
                  </span>
                </Link> 
            </div> 
          </div>
        </div>
      </footer>
      </div>
  );
}
