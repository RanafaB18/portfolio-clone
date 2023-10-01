import { motion } from "framer-motion";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const top = {
  opened: {
    rotate: 140,
    translateY: 6,
  },
  closed: {
    rotate: 0,
  },
};

const middle = {
  opened: {
    height: 0,
  },
  closed: {
    height: "4px",
  },
};
const bottom = {
  opened: {
    rotate: -140,
    translateY: -6,
  },
  closed: {
    rotate: 0,
  },
};

const Menu = () => {
  const data = useContext(DataContext)
  if (!data) {
    return null;
  }
  const { open, setOpen } = data

  const handleClick = () => {
    setOpen(!open)
  };
  return (
    <motion.div
      onClick={handleClick}
      className="flex flex-col gap-1 cursor-pointer md:hidden"
    >
      <motion.div
        variants={top}
        initial="closed"
        animate={open ? "opened" : "closed"}
        transition={{ duration: 0.3 }}
        className="w-5 h-1 bg-gray-300 rounded-full"
      ></motion.div>
      <motion.div
        variants={middle}
        initial="closed"
        animate={open ? "opened" : "closed"}
        transition={{ duration: 0.3 }}
        className="w-3 h-1 bg-gray-300 rounded-full"
      ></motion.div>
      <motion.div
        variants={bottom}
        initial="closed"
        animate={open ? "opened" : "closed"}
        transition={{ duration: 0.3 }}
        className="w-5 h-1 bg-gray-300 rounded-full"
      ></motion.div>
    </motion.div>
  );
};

export default Menu;
