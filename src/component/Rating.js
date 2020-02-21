import React from "react";
import Stars from "./Stars";

const Rating = ({ onChange, etoile }) => (
  <div className="rating-filter">
    <span className="rating-filter-text">Minimum Rating</span>
    <Stars
      etoile={etoile}
      onChangeStars={newRating => {
        onChange(newRating);
      }}
    />
  </div>
);

export default Rating;
