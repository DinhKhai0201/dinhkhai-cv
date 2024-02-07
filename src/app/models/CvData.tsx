export interface CvData {
  fullName: string;
  title: string;
  about: string;
  hobbies: string;
  imageUrl: string;
  contactItems: ContactItem[];
  skills: string[];
  experiences: Experience[];
  works: Certificate[];
}

export interface ContactItem {
  label: string;
  value: string;
  href: string;
}

export interface Experience {
  startYear: string;
  endYear: string;
  position: string;
  company: string;
  jobDescription: string[] | string;
  technologies: string;
  website: string;
}

export interface Certificate {
  startYear: string;
  endYear: string;
  position: string;
  company: string;
}
