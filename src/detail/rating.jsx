import React, { useState } from "react";
import './index.css'

const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star" style={{ fontSize: "30px", margin:"8px"}}>&#9733;&#xFE0E;</span>
            </button>
          );
        })}
      </div>
    );
  };

export default StarRating;
