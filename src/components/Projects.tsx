import Project from "./Project";
import { projects } from "../data/projects";
const Projects = () => {
  return (
    <section id="projects" className="mb-20">
      <h2 className="text-2xl text-center font-bold mt-24">
        Projects I've worked on
      </h2>

      {projects.map((project) => {
        const {
          description,
          githubLink,
          imageUrl,
          projectName,
          toolsUsed,
          demo,
          live,
          id
        } = project;
        return (
          <Project
            description={description}
            githubLink={githubLink}
            imageUrl={imageUrl}
            projectName={projectName}
            toolsUsed={toolsUsed}
            demo={demo}
            live={live}
            key={id}
          />
        );
      })}
    </section>
  );
};

export default Projects;
