/* eslint-disable react/prop-types */
import { useState, createRef } from "react";
import PropTypes from "prop-types";
import "./experience-card.css";

export default function ExperienceCard({ cardInfo, isDark }) {
  const [bgColor, setBgColor] = useState("#ffffff"); // Default background color
  const imgRef = createRef();

  // Function to get the dominant color from an image
  function getDominantColor(img) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    canvas.width = img.width;
    canvas.height = img.height;
    context.drawImage(img, 0, 0);

    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    let r = 0,
      g = 0,
      b = 0,
      count = 0;

    // Calculate the average color
    for (let i = 0; i < data.length; i += 4) {
      r += data[i];
      g += data[i + 1];
      b += data[i + 2];
      count++;
    }

    return `rgb(${Math.floor(r / count)}, ${Math.floor(
      g / count
    )}, ${Math.floor(b / count)})`;
  }

  function setBackgroundColor() {
    const imgElement = imgRef.current;
    if (imgElement.complete) {
      const color = getDominantColor(imgElement);
      setBgColor(color);
    } else {
      imgElement.onload = () => {
        const color = getDominantColor(imgElement);
        setBgColor(color);
      };
    }
  }

  const GetDescBullets = ({ descBullets, isDark }) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div
        style={{ background: bgColor }} // Set the background color here
        className="experience-banner"
      >
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin="anonymous"
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => setBackgroundColor()} // Set background color on load
        />
      </div>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>
    </div>
  );
}

// PropTypes validation
ExperienceCard.propTypes = {
  cardInfo: PropTypes.shape({
    company: PropTypes.string.isRequired,
    companylogo: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    descBullets: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  isDark: PropTypes.bool.isRequired,
};
