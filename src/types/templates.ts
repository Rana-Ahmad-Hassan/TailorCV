export interface PersonalInfo {
  fullName: string;
  title: string;
  email: string;
  phone: string;
  website: string;
  github: string;
  linkedin: string;
  location: string;
  image?: string | any;
}

export interface Skill {
  id: string;
  name: string;
}

export interface WorkExperience {
  id: string;
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  details: string;
  isExpanded: boolean;
  isCurrent: boolean;
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  details: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  date?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  dateEarned: string;
}

export interface VolunteerEntry {
  id: string;
  title: string;
  description: string;
  date: string;
}

export interface Language {
  id: string;
  name: string;
  proficiency: string;
}


export type resumeDataType = {
  personal: PersonalInfo;
  summary?: string;
  skills: Skill[];
  experience: WorkExperience[];
  education: Education[];
  projects: Project[];
  certifications?: Certification[];
  mentorship?: VolunteerEntry[];
  languages?: Language[];
};
