import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import TechnicalSkills from "../components/TechnicalSkills";
const LandingScreen = () => {
  return (
    <>
      <Header />
      <main className="p-6 font-urbanist overflow-hidden">
        <Introduction />
        <article className="md:hidden">
          <AboutMe />
        </article>
        <TechnicalSkills />
        <Projects />
        <ContactMe />
      </main>
      <NavBar />
      <Footer />
    </>
  );
};

export default LandingScreen;
