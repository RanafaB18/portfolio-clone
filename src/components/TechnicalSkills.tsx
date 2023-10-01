import SkillCard from "./SkillCard";

const TechnicalSkills = () => {
  return (
    <section id="skills">
      <h2 className="text-2xl text-center font-bold mt-24 mb-10 md:text-4xl">Technical Skills</h2>
      <div className="grid grid-rows-2 grid-cols-2 gap-3 overflow-scroll">
        <SkillCard
            description="HTML is a standard markup language used to create and structure content on the web."
            link="https://developer.mozilla.org/en-US/docs/Web/HTML"
            skillName="HTML"
        />
        <SkillCard
            description="JavaScript is a programming language used for creating interactive and dynamic web pages. It is widely used for both client-side and server-side development."
            link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            skillName="JavaScript"
        />
        <SkillCard
            description="Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript code outside of a web browser, commonly used for building server-side applications."
            link="https://developer.mozilla.org/en-US/docs/Web/HTML"
            skillName="Node.js"
        />
        <SkillCard
            description="It is a stylesheet language used for describing the presentation of a document written in HTML, including colors, fonts, layouts, and animations."
            link="https://developer.mozilla.org/en-US/docs/Web/HTML"
            skillName="CSS"
        />
        <SkillCard
            description="Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript code outside of a web browser, commonly used for building server-side applications."
            link="https://developer.mozilla.org/en-US/docs/Web/HTML"
            skillName="Node.js"
        />
        <SkillCard
            description="It is a stylesheet language used for describing the presentation of a document written in HTML, including colors, fonts, layouts, and animations."
            link="https://developer.mozilla.org/en-US/docs/Web/HTML"
            skillName="CSS"
        />
        <SkillCard
            description="Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript code outside of a web browser, commonly used for building server-side applications."
            link="https://developer.mozilla.org/en-US/docs/Web/HTML"
            skillName="Node.js"
        />
        <SkillCard
            description="It is a stylesheet language used for describing the presentation of a document written in HTML, including colors, fonts, layouts, and animations."
            link="https://developer.mozilla.org/en-US/docs/Web/HTML"
            skillName="CSS"
        />
      </div>
    </section>
  );
};

export default TechnicalSkills;
