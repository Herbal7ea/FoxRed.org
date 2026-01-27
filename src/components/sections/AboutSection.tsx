import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[var(--warm-background)] px-4 py-20 md:py-28"
    >
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
          <Avatar className="h-40 w-40 shrink-0 md:h-48 md:w-48">
            <AvatarImage src="/profile.jpg" alt="Jon Bott" />
            <AvatarFallback className="bg-[var(--brand-accent)] text-4xl text-[var(--brand-accent-text)] md:text-5xl">
              JB
            </AvatarFallback>
          </Avatar>

          <div className="text-center md:text-left">
            <h2 className="mb-6 text-3xl font-bold text-[var(--warm-ink)] md:text-4xl">
              About Me
            </h2>
            <div className="space-y-4 text-lg text-[var(--warm-ink-medium)]">
              <p>
                25 years of software engineering. 15 years on iOS and Android. 10 years of
                back-end work. One constant: making complex things approachable.
              </p>
              <p>
                I teach because I believe everyone deserves access to these skills. I build
                apps with focused interfaces because simplicity is a feature. I take photos
                because people deserve to see themselves happy.
              </p>
              <p>
                AI changed my workflow. It lets me think like an architect and ship like a
                team. I&apos;m building more than ever.
              </p>
              <p>
                I draw inspiration from design around the world including: Japanese mon, Arabic geometry, and Greek mosaics — traditional
                patterns that solved design problems centuries ago. Good ideas transcend time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
