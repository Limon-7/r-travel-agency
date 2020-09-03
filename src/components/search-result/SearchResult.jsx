import React from "react";
import "./SearchResult.css";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div className="serachResult">
      <img src={img} alt="" />
      <FavoriteBorderIcon className="serachResult__heart" />
      <div className="serachResult__info">
        <div className="serachResult__info__top">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>__</p>
          <p>{description}</p>
        </div>
        <div className="serachResult__info__bottom">
          <div className="serachResult__info__bottom__star">
            <StarIcon className="serachResult__star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="serachResult__info__bottom__price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
