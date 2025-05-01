import { ProfileCard } from "@/components/profile-card";
import { SkillsSection } from "@/components/skills-section";
import { ProjectGallery } from "@/components/project-gallery";
import { ContactForm } from "@/components/contact-form";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header/Nav Placeholder - Can be added later */}
      {/* <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          NAV CONTENT
        </div>
      </header> */}

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
      <footer className="py-6 md:px-8 md:py-0 border-t bg-secondary/50">
        <div className="container flex flex-col items-center justify-center gap-4 md:h-20 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground">
            Built by Robiul Hossain. © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
