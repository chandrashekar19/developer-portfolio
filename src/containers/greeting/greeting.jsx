import { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./greeting.css";
import landingPerson from "../../assets/lottie/landingPerson";
import SocialMedia from "../../components/social-media/social-media";
import manOnTable from "../../assets/images/manOnTable.svg"; // Corrected image import
import { Button } from "../../components/button/Button";
import { DisplayLottie } from "../../components/display-lottie/display-lottie";
import { greeting, illustration } from "../../data/portfolio";
import StyleContext from "../../contexts/style-contexrt";

export const Greeting = () => {
  const { isDark } = useContext(StyleContext);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img alt="man sitting on table" src={manOnTable} />
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
};
