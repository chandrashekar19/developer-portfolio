import { useContext } from "react";
import "./podcast.css";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/style-contexrt";
import { podcastSection } from "../../data/portfolio";

const Podcast = () => {
  const { isDark } = useContext(StyleContext);

  if (!podcastSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main">
        <div className="podcast-header">
          <h1 className="podcast-header-title">{podcastSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode podcast-header-subtitle"
                : "subTitle podcast-header-subtitle"
            }
          >
            {podcastSection.subtitle}
          </p>
        </div>
        <div className="podcast-main-div">
          {podcastSection.podcast.map((podcastLink, index) => (
            <div key={index}>
              <iframe
                className="podcast"
                src={podcastLink}
                frameBorder="0"
                scrolling="no"
                title={`Podcast ${index + 1}`}
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
};

export default Podcast;
