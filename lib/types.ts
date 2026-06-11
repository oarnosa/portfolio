export interface Experience {
  period: string;
  type?: string;
  active?: boolean;
  title: string;
  company: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  label: string;
}
