import { motion } from "framer-motion";

const AnimatedText = ({
  text,
  delayDuration,
  textColor
}: {
  text: string;
  delayDuration: number;
  textColor: string
}) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.09, delayChildren: delayDuration * 0.3 },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex max-w-sm mx-auto items-baseline flex-wrap whitespace-pre-wrap"
    >
      {letters.map((letter: string, index: number) => {
        return (
          <motion.span
            variants={container}
            className={`text-5xl font-bold ${textColor}`}
            key={index}
          >
            {letter === "." ? (
              <span
                className="block w-2 h-2 md:w-2 md:h-2 rounded-full bg-orange-600"
              ></span>
            ) : (
              letter
            )}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export default AnimatedText;
