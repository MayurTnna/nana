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
              Happy Birthday to someone who isn't just my best friend but also a
              cherished confidant, the one I turn to at any hour. With you, time
              seems to fly by at ten times its usual pace—well, in my case, it's
              more like 20 times! You have a magical effect on me; I glow, act
              differently, and simply become a better version of myself. To me,
              you are that special person! Once again, on this day of
              celebration, I want to express how much you inspire me, support me
              daily, have faith in me, and always trust me. You listen to my
              nonsense and graciously fulfill my every request. I have so much
              to say, but words fall short. It could turn into countless
              paragraphs, essays, or even books, and yet, there would always be
              more to tell you. You understand the profound role you play in my
              life. It takes just a few seconds to say 'I adore you,' but it
              would take me a lifetime to demonstrate how deeply I feel. Not
              only for me, but you've always been a beacon of help to everyone.
              You consistently give your all, and please remember always to take
              pride in yourself for it. In the end, I wish you an abundance of
              success, happiness that encompasses the world, a life filled with
              beauty and health for both you and your loved ones. Stay healthy,
              stay blessed, and keep that radiant smile of yours. You might not
              realize it, but your smile alone can brighten someone's entire day
            </p>
            <p className="end-text">Mayur</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
