import React, { useState } from "react";
import "./Card.scss";

import rebin from "../assets/images/rebin.png";
import demo from "../assets/videos/card-2.mp4";

const Card = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  console.log(isHovering);
  return (
    <>
      <div
        className="birth-card-container"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div
          id="c"
          className={
            isHovering ? "card-hover cardMain mx-auto" : "cardMain mx-auto"
          }
        >
          <div className="vid-container" id="vid">
            <img src="http://santoshg.com/codepen/iron_man.jpg" alt="" />
            <video autoPlay muted loop width="100%" height="100%">
              <source src={demo} />
            </video>
          </div>
          <div className="card-details">
            <img
              src={rebin}
              alt="rebin"
              className="rebin
                  "
            />
            <h2 className="b-title">Happy Birthday Mayur</h2>
            <p>
              Iron Man is a fictional superhero appearing in American comic
              books published by Marvel Comics. The character was co-created by
              writer and editor Stan Lee, developed by scripter Larry Lieber,
              and designed by artists Don Heck and Jack Kirby nwjh ijeidjie
              jdjdjed jbdsbd dbjkbdjsd swkjbw kndkjsdn wklnmddn klmdklwmd.{" "}
            </p>
            <p className="end-text">Mayur</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
