import React from "react";
import "./description-image.styles.scss";
import demo from "../../assets/leaderboard.png";

const DescriptionImage = ({
  information: { introText, hightlight, description, buttonText },textOnLeft
}) => {
  const descriptionText = (
      <div className="text-container">
        <span className="intro-text">{introText}</span>
        <h1 className="highlight">{hightlight}</h1>
        <span className="description">{description}</span>
        <button className="button">{buttonText}</button>
      </div>
  );

  return (
    <div className="description-image">
      <div className="inner-div">
        {textOnLeft?descriptionText:null}
        <img alt="demo" src={demo} className="demo-image" />
        {!textOnLeft?descriptionText:null}
      </div>
    </div>
  );
};

export default DescriptionImage;
