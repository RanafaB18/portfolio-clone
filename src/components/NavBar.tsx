import { AnimatePresence, motion } from "framer-motion";
import { DataContext } from "../context/DataContext";
import { useContext } from "react";
import { Link } from "react-scroll";

const slideInVariant = {
  hidden: {
    translateX: "100vw",
  },
  visible: {
    translateX: 0,
  },
};
const NavBar = () => {
  const contextData = useContext(DataContext);
  if (!contextData) return null;
  const { open, setOpen } = contextData;
  const closeSideBar = () => {
    setOpen(false);
  };
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={slideInVariant}
          initial="hidden"
          animate={open ? "visible" : "hidden"}
          exit={"hidden"}
          transition={{
            ease: "linear",
            type: "tween",
          }}
          className="absolute p-8 top-[64px] right-0 bottom-0 h-full overflow-clip w-full bg-[#1b1b1b]"
        >
          <ul className="max-h-96 font-bold text-gray-300 h-44 w-full flex flex-col justify-around">
            <li className="flex flex-col gap-2 border-b-2 border-b-[#424242] pb-4">
              <a
                href={`/BabaAbdulRaziq_Wumpini_CV(A).pdf`}
                download={"Abdul-Raziq's Resume"}
                className="flex items-center gap-1"
              >
                <svg
                  className="w-6 h-6 fill-green-500"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="ArticleRoundedIcon"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 14H8c-.55 0-1-.45-1-1s.45-1 1-1h5c.55 0 1 .45 1 1s-.45 1-1 1zm3-4H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1zm0-4H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z"></path>
                </svg>
                <p>resume</p>
              </a>
            </li>
            <li className="flex flex-col gap-2 border-b-2 border-b-[#424242] pb-4">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
                onClick={closeSideBar}
                href="#skills"
                className="flex items-center gap-1"
              >
                <svg
                  className="w-6 h-6 fill-pink-300"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="AnalyticsRoundedIcon"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8 17c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1zm4 0c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1s1 .45 1 1v1c0 .55-.45 1-1 1zm0-5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 5c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v8c0 .55-.45 1-1 1z"></path>
                </svg>
                <p>skills</p>
              </Link>
            </li>
            <li className="flex flex-col gap-2 border-b-2 border-b-[#424242] pb-4">
              <a href="#projects" className="flex items-center gap-1">
                <svg
                  className="w-6 h-6 fill-blue-300"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="BathroomRoundedIcon"
                >
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm3 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm3 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-8-4c0-2.76 2.24-5 5-5s5 2.24 5 5c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1z"></path>
                </svg>
                <p>projects</p>
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavBar;
