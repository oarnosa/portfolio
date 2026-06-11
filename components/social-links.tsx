import { cn } from "@/lib/utils";
import { socialLinks } from "@/lib/data";

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div
      className={cn("flex flex-wrap items-center gap-x-6 gap-y-2", className)}
    >
      {socialLinks.map((link) => {
        const isMail = link.href.startsWith("mailto:");
        return (
          <a
            key={link.platform}
            href={link.href}
            {...(isMail ? {} : { target: "_blank", rel: "noopener noreferrer" })}
            className="text-base font-medium text-accent underline decoration-transparent underline-offset-4 transition-colors hover:decoration-accent/60"
            aria-label={link.label}
          >
            {link.label}
          </a>
        );
      })}
    </div>
  );
}
