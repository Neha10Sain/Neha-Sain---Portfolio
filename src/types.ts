export interface ContactInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  portfolioUrl: string;
  summary: string;
  availableForHire: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  clientAccount?: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
  highlight?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full Stack' | 'Data Engineering & ETL' | 'Enterprise Systems' | 'Cloud & Web' | 'Enterprise Website';
  period: string;
  description: string;
  bulletPoints: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
  architecture?: {
    frontend?: string;
    backend?: string;
    database?: string;
    security?: string;
    reporting?: string;
  };
  featured: boolean;
  link?: string;
  githubRepo?: string;
  image?: string;
  badge?: string;
}

export interface SkillCategory {
  categoryName: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    tags: string[];
    isKeySkill?: boolean;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  gpa: string;
  highlights: string[];
}

export interface PipelineStep {
  id: number;
  name: string;
  category: 'Extract' | 'Transform' | 'Load' | 'Visualize';
  status: 'idle' | 'running' | 'completed' | 'error';
  latencyMs: number;
  recordsProcessed: number;
  details: string;
}
