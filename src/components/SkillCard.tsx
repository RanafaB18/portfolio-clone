import { Skill } from "../interfaces";

const SkillCard = ({
  skillName,
  link,
  description,
}: Skill) => {
  return (
    <div className="flex flex-col p-6 text-sm gap-4 w-72 max-h-fit rounded-lg bg-[#1a1a1a]">
      <div className="flex items-center justify-between">
        <span className="font-bold">{skillName}</span>
        <span className="text-sm font-bold text-gray-500">
          <a href={link} target="_blank">
            learn more{" "}
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
        </span>
      </div>
      <span>{description}</span>
    </div>
  );
};

export default SkillCard;
