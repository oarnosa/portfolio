import type { Experience, SocialLink } from "@/lib/types";

export const socialLinks: SocialLink[] = [
  {
    platform: "linkedin",
    href: "https://www.linkedin.com/in/oarnosa/",
    label: "LinkedIn",
  },
  {
    platform: "github",
    href: "https://github.com/oarnosa",
    label: "GitHub",
  },
  {
    platform: "email",
    href: "mailto:oarnosa@gmail.com",
    label: "Email",
  },
];

export const resumeLink: SocialLink = {
  platform: "resume",
  href: "/orlando-arnosa-resume.pdf",
  label: "Resume",
};

export const experiences: Experience[] = [
  {
    period: "2025–present",
    active: true,
    title: "Senior Full Stack Developer",
    company: "Artivo Surfaces",
    description:
      "Three ERPs, 18+ storefronts, and the C#/.NET middleware keeping a 225K+ SKU catalog in sync.",
  },
  {
    period: "2026–present",
    type: "Contract",
    active: true,
    title: "Senior Software Engineer",
    company: "RAFTRx",
    description:
      "Solo-built Python ELT platform pushing ~19M rows into an Azure warehouse.",
  },
  {
    period: "2025–2026",
    type: "Contract",
    title: "Senior Full Stack Developer",
    company: "Palladian Partners / Altarum",
    description:
      "State of Michigan's peer-certification platform. Took 4,000+ behavioral health pros off paper.",
  },
  {
    period: "2024–2025",
    title: "Senior Full Stack Developer",
    company: "Mosaic Companies",
    description:
      "A dozen ecommerce sites, 420K+ monthly visits, and the marketplace pipes behind them.",
  },
  {
    period: "2023–2024",
    title: "Full Stack Developer",
    company: "Mosaic Companies",
    description:
      "Shipped a pre-sales app that did $250K+ in its first quarter, plus the integrations everything else ran on.",
  },
  {
    period: "2021–2023",
    title: "Full Stack Developer",
    company: "Surfaces Southeast",
    description:
      "Built the whole digital ecosystem, including an offline PWA for sales teams pitching Lowe's and Floor & Decor.",
  },
  {
    period: "2018–2021",
    title: "Implementation & Support Engineer",
    company: "Magaya Corporation",
    description: "Logistics SaaS. Where it all started.",
  },
];
