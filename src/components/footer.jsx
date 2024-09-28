import PropTypes from "prop-types";

const Footer = (props) => {
  const { data } = props;

  let networks;
  if (data) {
    networks = data.social.map((network) => {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">{networks}</ul>

          <ul>
            <li>Made with ♥️ by Kalal Chandrashekar</li>
          </ul>

          <ul className="copyright">
            <li>&copy; Copyright 2023 Chandrashekar</li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

// Prop validation
Footer.propTypes = {
  data: PropTypes.shape({
    social: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        className: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired, // Marking data as required
};

export default Footer;
