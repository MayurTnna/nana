import React, { useState } from "react";
import "./Timeline.css";

const Timeline = () => {
  const [selectedYear, setSelectedYear] = useState(1900);

  const handleYearClick = (year) => {
    setSelectedYear(year);
  };
  const cryEmoji = String.fromCodePoint(0x1f622);

  return (
    <div id="timeline">
      <ul id="dates">
        <li>
          <a
            href="#1900"
            className={selectedYear === 1900 ? "selected" : ""}
            onClick={() => handleYearClick(1900)}
          >
            21/12/2004
          </a>
        </li>
        <li>
          <a
            href="#1930"
            className={selectedYear === 1930 ? "selected" : ""}
            onClick={() => handleYearClick(1930)}
          >
            Your class
          </a>
        </li>
        <li>
          <a
            href="#1944"
            className={selectedYear === 1944 ? "selected" : ""}
            onClick={() => handleYearClick(1944)}
          >
            Dance class
          </a>
        </li>
        <li>
          <a
            href="#1950"
            className={selectedYear === 1950 ? "selected" : ""}
            onClick={() => handleYearClick(1950)}
          >
            Rickshaw room
          </a>
        </li>
        <li>
          <a
            href="#1971"
            className={selectedYear === 1971 ? "selected" : ""}
            onClick={() => handleYearClick(1971)}
          >
            12thVAC
          </a>
        </li>

        <li>
          <a
            href="#2006"
            className={selectedYear === 2006 ? "selected" : ""}
            onClick={() => handleYearClick(2006)}
          >
            ∞
          </a>
        </li>
      </ul>
      <ul id="issues">
        <li id="1900" className={selectedYear === 1900 ? "selected" : ""}>
          <img
            src="http://www.csslab.cl/ejemplos/timelinr/latest/images/1.png"
            alt=""
          />
          <h1 className="h1_class">Our Memories</h1>
          <p className="fs-5">
            please just scroll down and click at dates at left of screen, Keep
            refreshing, if it behaves weirdly(sorry{cryEmoji})
          </p>
        </li>
        <li id="1930" className={selectedYear === 1930 ? "selected" : ""}>
          <img
            src="http://www.csslab.cl/ejemplos/timelinr/latest/images/2.png"
            alt=""
          />
          <h1 className="h1_class"> First shown you in your class</h1>
          <p>
            When I saw you for the first time ever at the your class factory, a
            lot of things happened inside me, but If I were to describe you in
            one word, it would be 'magical,' because you've just cast a spell on
            my heart as Friend😁
          </p>
        </li>
        <li id="1944" className={selectedYear === 1944 ? "selected" : ""}>
          <img
            src="http://www.csslab.cl/ejemplos/timelinr/latest/images/3.png"
            alt=""
          />
          <h1 className="h1_class">Annual Function preparation </h1>
          <p>
            After our first encounter, my app has been enriched with beautiful
            updates, and my luck has been exceptional to bring us together under
            one roof for Annual day practise . I must admit, I was quite shy,
            lost for words, but in that moment, I discovered something about you
            that makes me blush even now - it's 'Nandini'
          </p>
        </li>
        <li id="1950" className={selectedYear === 1950 ? "selected" : ""}>
          <img
            src="http://www.csslab.cl/ejemplos/timelinr/latest/images/4.png"
            alt=""
          />
          <h1>Rickshaw room</h1>
          <p>
            Our initial encounter or first meet at practise, one of my cherished
            places (second only to this moment 😁), left me a bit jittery; I
            must admit, I was behaving rather eccentrically, but hey, I still
            recall it vividly – my apologies for that! 🙈 Not to mention,like i
            was quite excited to get in that same room which you also belong to
            it😁
          </p>
        </li>
        <li id="1971" className={selectedYear === 1971 ? "selected" : ""}>
          <img
            src="http://www.csslab.cl/ejemplos/timelinr/latest/images/5.png"
            alt=""
          />
          <h1 className="h1_class">Mine's 12th vacation</h1>
          <p>
            I was feeling a bit down because due to 12th results tension , all
            of sudden i got message from my old and the best friend from my old
            school none other than YOU! I was wordless , amazed , happy at that
            precious moment 🎁❤️
          </p>
        </li>

        <li id="2006" className={selectedYear === 2006 ? "selected" : ""}>
          <img
            src="http://www.csslab.cl/ejemplos/timelinr/latest/images/3.png"
            alt=""
          />
          <h1 className="h1_class">For ages</h1>
          <p>
            Just wanted to express my gratitude, Ninu, for everything and all
            these incredible moments we've shared , its fine we are unable to
            meet . I hope and wish we can continue filling the memory bar
            together as much as possible. You know, they say, 'Memories are the
            key not to the past, but to the future.' 😊🌟
          </p>
        </li>
      </ul>
      <div id="grad_top"></div>
      <div id="grad_bottom"></div>
      <a href="#" id="next">
        +
      </a>
      <a href="#" id="prev">
        -
      </a>
    </div>
  );
};

export default Timeline;
