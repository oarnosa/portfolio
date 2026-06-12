import { ExperienceSection } from "@/components/experience-section";
import { SocialLinks } from "@/components/social-links";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-[50rem] px-6 pb-16 pt-12 sm:pt-28">
        <header className="space-y-6">
          <h1 className="animate-reveal text-[2rem] font-semibold leading-10 tracking-tight">
            Hey, I&apos;m Orlando.
          </h1>

          <div className="animate-reveal [animation-delay:80ms] space-y-4 text-base text-muted-foreground">
            <p>
              I&apos;ve spent the last seven years wiring frontends to the
              systems that actually run businesses. ERPs, marketplaces, legacy
              databases that don&apos;t play nice with anything. These days
              it&apos;s ecommerce integrations, data pipelines, and teaching
              warehouse robots to take orders from an ERP.
            </p>
            <p>
              TypeScript, C#, or Python, whatever the job needs. AI in the loop
              to ship fast without cutting corners. Proud girl dad with a boy on
              the way.
            </p>
          </div>

          <SocialLinks className="animate-reveal [animation-delay:160ms]" />
        </header>

        <main>
          <ExperienceSection />

          <p className="animate-reveal text-base text-muted-foreground [animation-delay:600ms]">
            Always up for an interesting problem, or sharing toddler survival
            tips.{" "}
            <a
              href="mailto:oarnosa@gmail.com"
              className="link-draw font-medium text-accent"
            >
              Say hi
            </a>
            .
          </p>

          <footer className="animate-reveal mt-12 flex items-center justify-between border-t border-border pt-6 font-mono text-xs text-muted-foreground/80 [animation-delay:640ms]">
            <span>© 2026 Orlando Arnosa</span>
            <span>Miami, FL</span>
          </footer>
        </main>
      </div>
    </div>
  );
}
