import { Link } from "react-scroll";

const ContactMeButton = () => {
  return (
    <Link
      to="contact"
      smooth={true}
      duration={500}
      delay={300}
      className="hidden md:flex cursor-pointer border mt-6 w-fit rounded-lg transition-all duration-500 hover:bg-[#e7e7e7] p-2 text-sm font-semibold text-[#8b8b8b]"
    >
      {"<build me a website />"}
    </Link>
  );
};

export default ContactMeButton;
