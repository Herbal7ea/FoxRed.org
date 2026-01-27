import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { ChevronDown, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  primaryLink: { label: string; href: string };
  secondaryLink?: { label: string; href: string };
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Danki",
    description:
      "A flashcard app for iOS designed to make learning Japanese efficient and enjoyable. Built with spaced repetition and a clean, focused interface.",
    primaryLink: { label: "Visit danki.net", href: "https://danki.net" },
    secondaryLink: {
      label: "App Store",
      href: "https://apps.apple.com/us/app/danki/id6758115512",
    },
    tags: ["iOS App", "Learning"],
  },
  {
    title: "FoxFoto",
    description:
      "Professional photography and media services capturing moments that matter. From events to portraits, bringing creative vision to life.",
    primaryLink: { label: "Visit foxfoto.org", href: "https://foxfoto.org" },
    tags: ["Photography", "Business"],
  },
  {
    title: "FoxRed Film",
    description:
      "Video production and filmmaking services. Crafting compelling visual stories through professional cinematography and editing.",
    primaryLink: { label: "Visit film.foxred.org", href: "https://film.foxred.org" },
    tags: ["Video", "Production"],
  },
];

function HeroProjectCard({ project, className }: { project: Project; className?: string }) {
  return (
    <Card className={`flex h-full flex-col border-[var(--warm-border)] bg-[var(--warm-surface)] ${className}`}>
      <CardHeader>
        <div className="mb-2 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[var(--warm-background)] px-3 py-1 text-xs font-medium text-[var(--warm-ink-medium)]"
            >
              {tag}
            </span>
          ))}
        </div>
        <CardTitle className="text-2xl text-[var(--warm-ink)]">{project.title}</CardTitle>
        <CardDescription className="text-base text-[var(--warm-ink-medium)]">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto space-y-3">
        <Button
          asChild
          className="w-full bg-[var(--brand-accent)] text-white hover:bg-[var(--brand-accent-pressed)]"
        >
          <a href={project.primaryLink.href} target="_blank" rel="noopener noreferrer">
            {project.primaryLink.label}
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
        {project.secondaryLink && (
          <a
            href={project.secondaryLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-sm text-[var(--warm-ink-light)] underline-offset-4 hover:text-[var(--brand-accent)] hover:underline"
          >
            {project.secondaryLink.label}
          </a>
        )}
      </CardContent>
    </Card>
  );
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-[var(--brand-accent)] px-4 text-[var(--brand-accent-text)]">
      {/* Center hero content */}
      <div className="text-center">
        <h1 className="mb-4 text-5xl font-bold md:text-7xl">Jon Bott</h1>
        <p className="mb-8 text-xl text-[var(--brand-accent-text)]/80 md:text-2xl">
          Developer & Creative
        </p>

        <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            className="bg-[var(--brand-accent-text)] text-[var(--brand-accent)] hover:bg-white"
          >
            <a href="#projects">View Projects</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-[var(--brand-accent-text)] bg-transparent text-[var(--brand-accent-text)] hover:bg-[var(--brand-accent-text)]/10"
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        <SocialLinks
          className="justify-center"
          iconClassName="w-6 h-6 md:w-7 md:h-7"
        />
      </div>

      {/* Project cards row */}
      <div className="mt-12 grid w-full max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-3">
        {projects.map((project) => (
          <HeroProjectCard key={project.title} project={project} />
        ))}
      </div>

      <a
        href="#about"
        className="absolute bottom-8 animate-bounce text-[var(--brand-accent-text)]/60 hover:text-[var(--brand-accent-text)]"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
}
