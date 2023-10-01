import AboutMe from "./AboutMe";
import AnimatedText from "./AnimatedText";
import ContactMeButton from "./ContactMeButton";

const Introduction = () => {
  return (
    <section className="flex flex-col gap-4 md:flex-row md:items-center md:w-full md:justify-around">
      <div className="flex flex-col justify-between gap-4">
        <AnimatedText
          text="welcome to"
          delayDuration={1}
          textColor="text-gray-200"
        />
        <AnimatedText text="my" delayDuration={4} textColor="text-gray-200" />
        <AnimatedText
          text="workplace."
          delayDuration={5}
          textColor="text-gray-400"
        />
        <ContactMeButton />
      </div>
      <div className="flex flex-col">
        <img
          className="md:h-72 md:w-72 mx-auto"
          loading="lazy"
          src="/a.png"
          alt="image of some art"
        />
        <article className="hidden md:flex">
          <AboutMe />
        </article>
      </div>
    </section>
  );
};

export default Introduction;
