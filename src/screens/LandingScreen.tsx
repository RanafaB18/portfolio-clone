import AboutMe from "../components/AboutMe";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import NavBar from "../components/NavBar";
import TechnicalSkills from "../components/TechnicalSkills";
const LandingScreen = () => {
  return (
    <>
      <Header />
      <main className="p-8 font-urbanist">
        <Introduction />
        <AboutMe />
        <TechnicalSkills />
      </main>
      <NavBar />
      <footer></footer>
    </>
  );
};

export default LandingScreen;
