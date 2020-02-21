import React from "react";
const Stars = ({ etoile, onChangeStars = () => {} }) => {
  let et = [];
  for (let i = 0; i < 5; i++) {
    if (i < etoile) {
      et.push(
        <span className="Stars" onClick={() => onChangeStars(i + 1)} key={i}>
          ★
        </span>
      );
    } else {
      et.push(
        <span className="Stars" onClick={() => onChangeStars(i + 1)} key={i}>
          ☆
        </span>
      );
    }
  }
  return <div>{et}</div>;
};

export default Stars;
