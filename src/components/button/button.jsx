import PropTypes from "prop-types";
import "./button.css";

export const Button = ({ text, className, href, newTab }) => {
  return (
    <div className={className}>
      <a className="main-button" href={href} target={newTab && "_blank"}>
        {text}
      </a>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
  newTab: PropTypes.bool,
};

Button.defaultProps = {
  className: "",
  newTab: false,
};
