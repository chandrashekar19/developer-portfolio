import { useEffect, useState } from "react";
import Profile from "./profile/Profile";
import Header from "../components/header/header";
import Achievement from "./achievement/achievement";
import Podcast from "./podcast/podcast";
import WorkExperience from "./work-experience/work-experience";
import Skills from "./skills/skills";
import StackProgress from "./skill-progress/skill-progress";
import Education from "./education/education";
import Projects from "./projects/project";
import StartupProject from "./startup-projects/startup-project";
import Blogs from "./blogs/blog";
import Talks from "./talks/talks";
import Twitter from "./twitter-embed/twitter";
import Footer from "../components/footer/footer";
import Top from "./top-button/top";
import { StyleProvider } from "../contexts/style-contexrt";
import { Greeting } from "./greeting/Greeting";

const Main = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isDark") === null) {
      const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
      localStorage.setItem("isDark", darkPref.matches);
    }
    setIsDark(JSON.parse(localStorage.getItem("isDark")));
  }, []);

  const changeTheme = () => {
    setIsDark((prevIsDark) => {
      const newIsDark = !prevIsDark;
      localStorage.setItem("isDark", newIsDark);
      return newIsDark;
    });
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark, changeTheme }}>
        <Header />
        <Greeting />
        <Skills />
        <StackProgress />
        <Education />
        <WorkExperience />
        <Projects />
        <StartupProject />
        <Achievement />
        <Blogs />
        <Talks />
        <Twitter />
        <Podcast />
        <Profile />
        <Footer />
        <Top />
      </StyleProvider>
    </div>
  );
};

export default Main;
