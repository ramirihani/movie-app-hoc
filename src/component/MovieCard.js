import React from "react";
import Stars from "./Stars";
const MovieCard = props => {
  const { movie = {} } = props;
  const { title = "", rating = 0, image = "" } = movie;

  return (
    <div className="Cards">
      <div className="movieCard">
        <div className="rating-title">
          <p className="title">{title}</p>
          <Stars etoile={rating} />
        </div>
        <img src={image} width="300px" height="300px" alt="film" />
      </div>
    </div>
  );
};
export default MovieCard;
