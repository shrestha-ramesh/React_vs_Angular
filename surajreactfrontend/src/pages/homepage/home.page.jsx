import React from "react";
import "./home.page.styles.scss";
import information from "./description-image.content.js";
import cardContents from "./information-card.content";
import DescriptionImage from "../../components/description-image/description-image.component";
import InformationCard from "../../components/information-card/information-card.component";

const HomePage = (props) => {
  return (
    <div className="homepage">
      <DescriptionImage information={information.first} textOnLeft />
      <div className="company-context">
        <InformationCard content={cardContents.first} />
        <InformationCard content={cardContents.second} comeFront/>
        <InformationCard content={cardContents.third} />
      </div>
      
    </div>
  );
};

export default HomePage;
