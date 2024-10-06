import PropTypes from "prop-types";
import "./achievement-card.css";

export default function AchievementCard({ cardInfo, isDark }) {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    if (win) win.focus();
  }

  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div className="certificate-image-div">
        <img src={cardInfo.image} alt="PWA" className="card-image" />
      </div>
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => (
          <span
            key={i}
            className={isDark ? "dark-mode certificate-tag" : "certificate-tag"}
            onClick={() => openUrlInNewTab(v.url)}
          >
            {v.name}
          </span>
        ))}
      </div>
    </div>
  );
}

// PropTypes validation
AchievementCard.propTypes = {
  cardInfo: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    footer: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  isDark: PropTypes.bool,
};

// Default prop for isDark
AchievementCard.defaultProps = {
  isDark: false,
};
