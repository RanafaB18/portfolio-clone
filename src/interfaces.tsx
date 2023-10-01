export interface IProject {
  projectName: string;
  toolsUsed: string[];
  description: string;
  imageUrl: string;
  githubLink: string;
  demo?: IDemo;
  live?: ILive;
  id?: number
}

export interface IDemo {
  hasDemo: boolean;
  demoLink: string;
}

export interface ILive {
  siteUrl: string;
}

export interface Skill {
  skillName: string;
  link: string;
  description: string;
  id?: number;
}
