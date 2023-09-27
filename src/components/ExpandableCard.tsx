import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const expandedVariant = {
  isExpanded: {
    height: "auto",
    opacity: 1,
  },
  isNotExpanded: {
    height: 0,
    opacity: 0,
  },
  isRotated: {
    rotate: 180,
  },
  isNotRotated: {
    rotate: 0,
  },
};
const ExpandableCard = ({
  skillName,
  link,
  description,
}: {
  skillName: string;
  link: string;
  description: string;
}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <div
        onClick={() => setExpanded(!expanded)}
        className="relative max-w-sm mx-auto w-full rounded-lg p-3 bg-[#1a1a1a]"
      >
        <div className="flex items-center justify-between">
          <p className="font-bold">{skillName}</p>
          <span className="text-sm font-bold text-gray-500">
            <motion.svg
              variants={expandedVariant}
              initial="isNotRotated"
              animate={expanded ? "isRotated" : "isNotRotated"}
              transition={{
                duration: 0.3,
              }}
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
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </motion.svg>
          </span>
        </div>
        <AnimatePresence>
          {expanded && (
            <motion.div
              variants={expandedVariant}
              initial="isNotExpanded"
              animate="isExpanded"
              transition={{
                duration: 0.3,
              }}
              exit="isNotExpanded"
              className="overflow-clip"
            >
              <p className="pt-3">{description}</p>
              <div className="w-full flex justify-end">
                <a
                  target="_blank"
                  href={link}
                  className=" text-sm font-bold text-gray-500"
                >
                  learn more
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 inline ml-1 mb-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ExpandableCard;
