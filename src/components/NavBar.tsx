import { AnimatePresence, motion } from "framer-motion";
import { DataContext } from "../context/DataContext";
import { useContext } from "react";
import NavItems from "./NavItems";

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
  const { open } = contextData;
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
          <NavItems />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavBar;
