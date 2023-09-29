import { IProject } from "../interfaces";

export const projects: IProject[] = [
  {
    description:
      "Product Feedback app is a Frontend mentor challenge. It doesn't really do much apart from showcasing my frontend skills. The app allows users to receive feedback and suggestions to improve their products",
    githubLink: "https://github.com/Abdul-Raziq1/ProductFeedback",
    imageUrl: "/PF.png",
    projectName: "Product Feedback",
    toolsUsed: ["React", "TailwindCSS"],
    live: { siteUrl: "https://product-feedback-six.vercel.app/" },
    id: 1,
  },
  {
    description:
      "CodeFusion is a platform which provides an online code and text editor for real-time collaboration",
    githubLink: "https://github.com/RanafaB18/CodeFusion-React",
    imageUrl: "/CF.png",
    projectName: "CodeFusion",
    toolsUsed: ["React", "TailwindCSS", "Socket.io", "Yjs", "Peer.js", "MongoDB", "ExpressJS", "NodeJS"],
    live: { siteUrl: "https://code-fusion-react.vercel.app/" },
    id: 2,
  },
];
