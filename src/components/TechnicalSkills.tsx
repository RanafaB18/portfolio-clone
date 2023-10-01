import { skills } from "../data/skills";
import SkillCard from "./SkillCard";

const TechnicalSkills = () => {
  return (
    <section
      id="skills"
      className="text-xs md:flex md:flex-col md:items-center "
    >
      <h2 className="text-2xl text-center font-bold mt-24 mb-10 md:text-4xl">
        Technical Skills
      </h2>
      <div className="grid grid-rows-2 grid-flow-col gap-3 overflow-scroll md:overflow-hidden">
        {skills.map((skill) => {
          const { description, link, skillName, id } = skill;
          return (
            <SkillCard
              description={description}
              link={link}
              skillName={skillName}
              key={id}
            />
          );
        })}
      </div>
      <div className="flex items-center justify-center mt-6 md:hidden">
        <svg
          className="w-6 h-6 fill-white"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="SwipeLeftAltRoundedIcon"
        >
          <path d="M10.1 13c.46 2.28 2.48 4 4.9 4 2.76 0 5-2.24 5-5s-2.24-5-5-5c-2.42 0-4.44 1.72-4.9 4H5.83l.88-.88c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0L2.71 11.3c-.39.39-.39 1.02 0 1.41L5.3 15.3c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L5.83 13h4.27z"></path>
        </svg>
        <p className="font-bold tracking-wider">SCROLLABLE</p>
        <svg
          className="w-6 h-6 fill-white rotate-180"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="SwipeLeftAltRoundedIcon"
        >
          <path d="M10.1 13c.46 2.28 2.48 4 4.9 4 2.76 0 5-2.24 5-5s-2.24-5-5-5c-2.42 0-4.44 1.72-4.9 4H5.83l.88-.88c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0L2.71 11.3c-.39.39-.39 1.02 0 1.41L5.3 15.3c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L5.83 13h4.27z"></path>
        </svg>
      </div>
    </section>
  );
};

export default TechnicalSkills;
