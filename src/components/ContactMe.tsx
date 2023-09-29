import { ChangeEvent, FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SentAnimation from "./SentAnimation";
const ContactMe = () => {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    setSent(true);
    emailjs
      .sendForm(
        "service_c6gre7n",
        "template_n9pqy3o",
        form.current,
        "e6eC6UrX3ALYDLLA1"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          setTimeout(() => {
            setSent(false);
          }, 1400);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="relative">
      <h2 className="text-2xl text-center font-bold mt-24 mb-10">
        Send me a message
      </h2>
      <div className="p-8 pb-6 bg-[#6e6e6e] bg-opacity-20 text-sm ">
        <p>
          Thank you for taking the time to check out my portfolio. Feel free to
          contact me if you're interested in hiring me or if you would like me
          to build a product for you.
        </p>
        <div className="mt-2">
          <a
            className=""
            target="_blank"
            href="https://www.linkedin.com/in/abdul-raziq-baba-8347911a1/"
          >
            <svg
              className="w-6 h-6 fill-white"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="LinkedInIcon"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="bg-[#6e6e6e] bg-opacity-10">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-3 pt-8 pb-3 px-4"
        >
          <input
            className="bg-[#6e6e6e] bg-opacity-20 outline-none rounded p-1.5"
            type="text"
            name="name"
            placeholder="name"
            onChange={handleChange}
            value={formData.name}
            required
          />
          <input
            className="bg-[#6e6e6e] bg-opacity-20 outline-none rounded p-1.5"
            type="email"
            name="email"
            placeholder="email"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <textarea
            className="bg-[#6e6e6e] bg-opacity-20 outline-none rounded p-1.5 resize-none"
            rows={4}
            name="message"
            placeholder="message"
            onChange={handleChange}
            value={formData.message}
            required
          ></textarea>
          <button
            className="relative bg-[#e7e7e7] h-9 tracking-wide rounded text-black font-bold"
            type="submit"
          >
            {sent ? <SentAnimation /> : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
