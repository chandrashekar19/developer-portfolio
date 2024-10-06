import { useContext } from "react";
import "./skills.css";
import { Fade } from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
// Importing the image using ES module syntax
import developerActivityImage from "../../assets/images/developerActivity.svg";
import StyleContext from "../../contexts/style-contexrt";
import { illustration, skillsSection } from "../../data/portfolio";
import SoftwareSkill from "../../components/software-skills/software-skills";
import { DisplayLottie } from "../../components/display-lottie/display-lottie";

export default function Skills() {
  const { isDark } = useContext(StyleContext);

  // Return null if the skills section is not to be displayed
  if (!skillsSection.display) {
    return null;
  }

  // Helper function to determine className for dark mode
  const getClassName = (baseClass) =>
    isDark ? `dark-mode ${baseClass}` : baseClass;

  // Helper function to render skills
  const renderSkills = () => {
    return skillsSection.skills.map((skill, i) => (
      <p key={i} className={getClassName("subTitle skills-text")}>
        {skill}
      </p>
    ));
  };

  return (
    <div className={getClassName("main")} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img alt="Man Working" src={developerActivityImage} />
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1 className={getClassName("skills-heading")}>
              {skillsSection.title}
            </h1>
            <p className={getClassName("subTitle skills-text-subtitle")}>
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>{renderSkills()}</div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
