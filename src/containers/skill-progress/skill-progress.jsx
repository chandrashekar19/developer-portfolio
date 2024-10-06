import "./progress.css";
import { Fade } from "react-reveal";
import Build from "../../assets/lottie/build";
import skillImage from "../../assets/images/skill.svg"; // Correct image import
import { illustration, techStack } from "../../data/portfolio";
import { DisplayLottie } from "../../components/display-lottie/display-lottie";

const StackProgress = () => {
  if (!techStack.viewSkillBars) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="skills-container">
        <div className="skills-bar">
          <h1 className="skills-heading">Proficiency</h1>
          {techStack.experience.map((exp, index) => (
            <div key={index} className="skill">
              <p>{exp.Stack}</p>
              <div className="meter">
                <span style={{ width: exp.progressPercentage }}></span>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-image">
          {illustration.animated ? (
            <DisplayLottie animationData={Build} />
          ) : (
            <img alt="Skills" src={skillImage} />
          )}
        </div>
      </div>
    </Fade>
  );
};

export default StackProgress;
