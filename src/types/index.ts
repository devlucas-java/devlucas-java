export type Language = 'es' | 'en';

export interface LocalizedString {
  es: string;
  en: string;
}

export interface ProfileLanguage {
  name: LocalizedString;
  level: LocalizedString;
  flag: string;
}

export interface Project {
  id: string;
  featured: boolean;
  githubUrl: string;
  liveUrl?: string;
  diagramUrl?: string;
  youtubeUrl?: string;
  readmeUrl: string;
  technologies: string[];
  title: LocalizedString;
  description: LocalizedString;
}

export interface Education {
  id: string;
  institution: string;
  degree: LocalizedString;
  field: LocalizedString;
  period: LocalizedString;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: LocalizedString;
  credentialUrl: string;
  skills: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: LocalizedString;
  period: LocalizedString;
  location: LocalizedString;
  description: LocalizedString;
  skills: string[];
  type: LocalizedString;
}

export interface Profile {
  name: string;
  role: LocalizedString;
  bio: LocalizedString;
  photo: string;
  github: string;
  linkedin: string;
  email: string;
  location: LocalizedString;
  languages: ProfileLanguage[];
}
