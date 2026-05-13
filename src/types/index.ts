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
  diagramUrl: string;
  readmeUrl: string;
  technologies: string[];
  title: LocalizedString;
  description: LocalizedString;
  diagramDescription: LocalizedString;
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
