import AnimatedText from "./AnimatedText";

const Introduction = () => {
  return (
    <section className="flex flex-col gap-4">
      <>
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
      </>
      <img src="src/assets/a.png" alt="image of some art" />
    </section>
  );
};

export default Introduction;
