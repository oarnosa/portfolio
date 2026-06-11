import { experiences } from "@/lib/data";
import type { Experience } from "@/lib/types";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/section-heading";
import { StatusDot } from "@/components/status-dot";

function RoleMeta({ exp, className }: { exp: Experience; className?: string }) {
  return (
    <div className={className}>
      <span>{exp.period}</span>
      {exp.type && <span>{exp.type}</span>}
      {exp.active && (
        <span className="flex items-center gap-1.5 text-accent">
          <StatusDot />
          Current
        </span>
      )}
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section className="pt-8 pb-12">
      <SectionHeading
        title="Experience"
        className="animate-reveal [animation-delay:240ms]"
      />

      <div>
        {experiences.map((exp, i) => {
          const isFirst = i === 0;
          const isLast = i === experiences.length - 1;

          return (
            <article
              key={`${exp.company}-${exp.period}`}
              className="animate-reveal grid grid-cols-[24px_1fr] sm:grid-cols-[104px_32px_1fr]"
              style={{ animationDelay: `${280 + i * 40}ms` }}
            >
              {/* Date label — desktop, right-aligned against the spine */}
              <RoleMeta
                exp={exp}
                className="hidden flex-col items-end gap-1 pt-1 text-right font-mono text-xs text-muted-foreground/80 sm:flex"
              />

              {/* Spine */}
              <div className="relative" aria-hidden>
                <span
                  className={cn(
                    "absolute left-1/2 w-px -translate-x-1/2 bg-muted-foreground/30",
                    isFirst
                      ? "top-2 bottom-0 sm:top-3"
                      : isLast
                        ? "top-0 h-2 sm:h-3"
                        : "inset-y-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-1/2 top-1 h-2 w-2 -translate-x-1/2 rounded-full sm:top-2",
                    exp.active
                      ? "animate-pulse-orb bg-accent shadow-orb-active"
                      : "bg-muted-foreground/50 shadow-orb-idle",
                  )}
                />
              </div>

              {/* Content — bottom padding lives here so the spine cell
                  stretches through the gap and the line stays continuous */}
              <div className={cn("pl-6 sm:pl-8", !isLast && "pb-8")}>
                <RoleMeta
                  exp={exp}
                  className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground/80 sm:hidden"
                />

                <h3 className="text-base font-semibold">
                  {exp.title}{" "}
                  <span className="font-normal text-muted-foreground">
                    · {exp.company}
                  </span>
                </h3>

                <p className="mt-2 text-base text-muted-foreground">
                  {exp.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
