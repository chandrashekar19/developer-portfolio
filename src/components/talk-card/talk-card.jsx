import PropTypes from "prop-types";
import "./talk-card.css";

export default function TalkCard({ talkDetails }) {
  return (
    <div>
      <div className="container">
        <div
          className={
            talkDetails.isDark ? "dark-rectangle rectangle" : "rectangle"
          }
        >
          <div className="diagonal-fill"></div>
          <div className="talk-card-title">{talkDetails.title}</div>
          <p className="talk-card-subtitle">{talkDetails.subtitle}</p>

          <div className="card-footer-button-div">
            <a href={talkDetails.slides_url} target="_" className="talk-button">
              Slides
            </a>
            <a href={talkDetails.event_url} target="_" className="talk-button">
              Event
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

TalkCard.propTypes = {
  talkDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    slides_url: PropTypes.string,
    event_url: PropTypes.string,
    isDark: PropTypes.bool,
  }).isRequired,
};

TalkCard.defaultProps = {
  talkDetails: {
    subtitle: "",
    slides_url: "#",
    event_url: "#",
    isDark: false,
  },
};
