export type Technologies =
  | "cloudinary"
  | "css"
  | "express"
  | "javascript"
  | "jwt"
  | "mongodb"
  | "mongoose"
  | "netlify"
  | "nextjs"
  | "node"
  | "openai"
  | "postgresql"
  | "railway"
  | "react"
  | "tailwind"
  | "typescript"
  | "vercel"
  | "vite";

export type Categories = 
  | "fullstack"
  | "frontend"
  | "backend"
  | "misc";

export type ProjectProps = {
  category: Categories,
  src?: `${string}.webp`
  site: `https://${string}`;
  repo: `https://github.com/M47O/${string}`;
  title: string;
  description: string;
  technologies: Technologies[];
};

export const projects: ProjectProps[] = [
  {
    category: "fullstack",
    src: "quickdream.webp",
    site: "https://quickdream.netlify.app",
    title: "Quickdream",
    repo: "https://github.com/M47O/quickdream",
    technologies: [
      "react",
      "jwt",
      "openai",
      "express",
      "cloudinary",
      "mongoose",
      "mongodb",
      "railway",
      "netlify"
    ],
    description:
      "A full-stack social media application I created as an easy-to-use and more accessible alternative to Midjourney for AI image generation, as Midjourney no longer offers free image generation and is only accessible via Discord's platform."
  },
  // {
  //   category: "frontend",
  //   src: "masonturnerdev.webp",
  //   site: "https://masonturner.dev",
  //   title: "masonturner.dev",
  //   repo: "https://github.com/M47O/masonturner.dev",
  //   technologies: [
  //     "react",
  //     "typescript",
  //     "nextjs",
  //     "vercel"
  //   ],
  //   description:
  //     "A portfolio site (this one, in fact) created as a visual update to my old portfolio. I created this to play around with some new-to-me technologies and new specifications of CSS."
  // },
  {
    category: "frontend",
    src: "oldportfolio.webp",
    site: "https://m47o.github.io/personal-portfolio/",
    title: "Old Portfolio",
    repo:"https://github.com/M47O/personal-portfolio",
    technologies: [
      "tailwind",
      "javascript",
      "netlify"
    ],
    description: "My old portfolio site I made to learn Tailwind. It was a blast to make and a fun way to stretch my creative muscles."
  },
  {
    category: "misc",
    src: "calculator.webp",
    site: "https://m47o.github.io/calculator/",
    title: "Calculator",
    repo: "https://github.com/M47O/calculator",
    technologies: [
      "css",
      "typescript"
    ],
    description: "A modern and responsive calculator built with TypeScript. Features a user-friendly interface with intuitive functionality. Take a second or two and read the documentation (and the footnotes) for it. I think this project sealed my position as one of the best doc writers in the industry."
  },
  {
    category: "misc",
    src: "tenzies.webp",
    site: "https://m47o.github.io/tenzies/",
    title: "Tenzies",
    repo: "https://github.com/M47O/tenzies",
    technologies: [
      "react",
      "vite",
      "javascript",
      "css"
    ],
    description: "A modern and responsive calculator built with TypeScript. Features a user-friendly interface with intuitive functionality. Take a second or two and read the documentation (and the footnotes) for it. I think this project sealed my position as one of the best doc writers in the industry."
  }
]