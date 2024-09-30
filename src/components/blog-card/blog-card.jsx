import PropTypes from "prop-types";
import "./blog-card.css";

export default function BlogCard({ blog, isDark }) {
  function openUrlInNewTab(url) {
    if (url !== undefined) {
      const win = window.open(url, "_blank");
      if (win) win.focus();
    }
  }

  return (
    <div onClick={() => openUrlInNewTab(blog.url)}>
      <div className={isDark ? "blog-container dark-mode" : "blog-container"}>
        <a
          className={
            isDark ? "dark-mode blog-card blog-card-shadow" : "blog-card"
          }
          href="#blog"
        >
          <h3 className={isDark ? "small-dark blog-title" : "blog-title"}>
            {blog.title}
          </h3>
          <p className={isDark ? "small-dark small" : "small"}>
            {blog.description}
          </p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </a>
      </div>
    </div>
  );
}

// PropTypes validation
BlogCard.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string, // URL is optional
  }).isRequired,
  isDark: PropTypes.bool,
};

// Default prop for isDark
BlogCard.defaultProps = {
  isDark: false,
};
