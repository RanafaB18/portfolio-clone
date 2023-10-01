import { IProject } from "../interfaces";
import { motion } from "framer-motion";

const animation = {
  opacity: 1,
  transition: { delay: 0.4, duration: 1, ease: "easeOut" },
  x: 0,
  translateX: 0,
  rotateY: 0
};

const variant = {
  slideLeft: {
    opacity: 0,
    translateX: "-50%",
    rotateY: "-20deg",
    transformPerspective: "800px",


  },
  slideRight: {
    opacity: 0,
    translateX: "50%",
    rotateY: "20deg",
    transformPerspective: "800px",
  },
  visible: {
    opacity: 1,
    translateX: 0
  },
  hidden: {
    opacity: 0
  }
}

const Project = ({
  projectName,
  toolsUsed,
  description,
  imageUrl,
  githubLink,
  demo,
  live,
}: IProject) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-0 mt-12 md:max-w-5xl md:mx-auto md:h-[470px]">
      <motion.div
        initial="slideLeft"
        variants={variant}
        whileInView={animation}
        viewport={{ once: true }}
        className="flex flex-col md:w-96 md:gap-10 gap-5 bg-[#6e6e6e] bg-opacity-20 p-3 rounded md:rounded-l-md"
      >
        <div className="flex flex-wrap gap-3 w-full">
          {toolsUsed.map((tool, index) => {
            return (
              <div
                className="px-2 py-1 rounded w-max bg-[#6e6e6e] bg-opacity-20  text-sm"
                key={index}
              >
                {tool}
              </div>
            );
          })}
        </div>
        <h2 className="text-4xl bg-clip-text font-bold text-transparent inline-block bg-gradient-to-r from-[#fa91d0] via-purple-300 to-[#3d91d2]">
          {projectName}.
        </h2>
        <p>{description}</p>
        <div className="flex justify-around md:mt-12">
          <a
            target="_blank"
            href={githubLink}
            className="flex items-center gap-2"
          >
            <svg
              className="w-6 h-6 fill-white"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="GitHubIcon"
            >
              <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
            </svg>
            <p className="text-sm">Source</p>
          </a>
          {demo?.hasDemo ? (
            <a
              target="_blank"
              href={demo.demoLink}
              className="flex items-center gap-2"
            >
              <svg
                className="w-6 h-6 fill-white"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="YouTubeIcon"
              >
                <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"></path>
              </svg>
              <p>Demo</p>
            </a>
          ) : (
            <a
              target="_blank"
              href={live?.siteUrl}
              className="flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
                />
              </svg>
              <p>Live link</p>
            </a>
          )}
        </div>
      </motion.div>
      <motion.div
        initial="slideRight"
        variants={variant}
        whileInView={animation}
        viewport={{ once: true }}
        className="w-full rounded h-fit md:h-full"
      >
        <img
          className="rounded-lg md:rounded h-full w-full "
          loading="lazy"
          src={imageUrl}
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default Project;
