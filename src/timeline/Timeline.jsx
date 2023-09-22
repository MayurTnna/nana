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
            23/09/2004
          </a>
        </li>
        <li>
          <a
            href="#1930"
            className={selectedYear === 1930 ? "selected" : ""}
            onClick={() => handleYearClick(1930)}
          >
            11th June
          </a>
        </li>
        <li>
          <a
            href="#1944"
            className={selectedYear === 1944 ? "selected" : ""}
            onClick={() => handleYearClick(1944)}
          >
            06th Sept
          </a>
        </li>
        <li>
          <a
            href="#1950"
            className={selectedYear === 1950 ? "selected" : ""}
            onClick={() => handleYearClick(1950)}
          >
            17th Aug
          </a>
        </li>
        <li>
          <a
            href="#1971"
            className={selectedYear === 1971 ? "selected" : ""}
            onClick={() => handleYearClick(1971)}
          >
            07th Oct
          </a>
        </li>
        <li>
          <a
            href="#1977"
            className={selectedYear === 1977 ? "selected" : ""}
            onClick={() => handleYearClick(1977)}
          >
            08th Jan
          </a>
        </li>

        <li>
          <a
            href="#1999"
            className={selectedYear === 1999 ? "selected" : ""}
            onClick={() => handleYearClick(1999)}
          >
            31st Oct
          </a>
        </li>
        <li>
          <a
            href="#2001"
            className={selectedYear === 2001 ? "selected" : ""}
            onClick={() => handleYearClick(2001)}
          >
            24th Apr
          </a>
        </li>
        <li>
          <a
            href="#2002"
            className={selectedYear === 2002 ? "selected" : ""}
            onClick={() => handleYearClick(2002)}
          >
            30th Apr{" "}
          </a>
        </li>
        <li>
          <a
            href="#2003"
            className={selectedYear === 2003 ? "selected" : ""}
            onClick={() => handleYearClick(2003)}
          >
            05th July
          </a>
        </li>
        <li>
          <a
            href="#2004"
            className={selectedYear === 2004 ? "selected" : ""}
            onClick={() => handleYearClick(2004)}
          >
            16th Aug
          </a>
        </li>
        <li>
          <a
            href="#2005"
            className={selectedYear === 2005 ? "selected" : ""}
            onClick={() => handleYearClick(2005)}
          >
            09th Sept
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
          <h1 className="h1_class"> 11th June 2017</h1>
          <p>
            When I saw you for the first time ever at the Vadilal Ice Cream🍦
            factory, a lot of things happened inside me😁, but If I were to
            describe you in one word, it would be 'magical,' because you've just
            cast a spell on my heart
          </p>
        </li>
        <li id="1944" className={selectedYear === 1944 ? "selected" : ""}>
          <img
            src="http://www.csslab.cl/ejemplos/timelinr/latest/images/3.png"
            alt=""
          />
          <h1 className="h1_class">06th September 2018 </h1>
          <p>
            After our first encounter, my app has been enriched with beautiful
            updates, and my luck has been exceptional to bring us together under
            one roof for Garba classes. I must admit, I was quite shy, lost for
            words, but in that moment, I discovered something about you that
            makes me blush even now - it's 'JIYA'
          </p>
        </li>
        <li id="1950" className={selectedYear === 1950 ? "selected" : ""}>
          <img
            src="http://www.csslab.cl/ejemplos/timelinr/latest/images/4.png"
            alt=""
          />
          <h1>18th Aug 2021</h1>
          <p>
            Our initial encounter or first meet at VJ Modha Garden, one of my
            cherished places (second only to this moment 😁), left me a bit
            jittery; I must admit, I was behaving rather eccentrically, but hey,
            I still recall it vividly – my apologies for that! 🙈 Not to
            mention, I kept you waiting for 15 minutes beyond our agreed time –
            thank you for being so patient! 😁
          </p>
        </li>
        <li id="1971" className={selectedYear === 1971 ? "selected" : ""}>
          <img
            src="http://www.csslab.cl/ejemplos/timelinr/latest/images/5.png"
            alt=""
          />
          <h1 className="h1_class">11th October 2021</h1>
          <p>
            I was feeling a bit down because I couldn't be with you on your
            birthday to express my emotions in person. I understand the
            circumstances, so it's alright. However, this day allows me to give
            you a small gift and pour out my bundle of emotions. 🎁❤️
          </p>
        </li>
        <li id="1977" className={selectedYear === 1977 ? "selected" : ""}>
          <img
            src="http://www.csslab.cl/ejemplos/timelinr/latest/images/6.png"
            alt=""
          />
          <h1 className="h1_class">08th January 2022</h1>
          <p>
            We've met many times since then, but I especially cherish this day.
            You came to Birla Hall (Bhagvad saptah) at my request, even though
            we had just met an hour before. Your willingness to be there despite
            your busy schedule means the world to me. Thanks for it, Jiyu.😊
          </p>
        </li>
        <li id="1989" className={selectedYear === 1989 ? "selected" : ""}>
          <img
            src="http://www.csslab.cl/ejemplos/timelinr/latest/images/7.png"
            alt=""
          />
          <h1 className="h1_class">21st March 2022</h1>
          <p>
            I can't forget this day; it's etched in my memory. On the 17th, I
            planned a surprise for you at your tuition class. I even guessed
            correctly where to find you, but I lacked the courage to approach
            and reveal the surprise. However, on the 21st, we finally met as I
            had wished. It turned out to be our last meeting before your 12th
            exams. 😊🌟
          </p>
          z``
        </li>
        <li id="1999" className={selectedYear === 1999 ? "selected" : ""}>
          <img
            src="http://www.csslab.cl/ejemplos/timelinr/latest/images/8.png"
            alt=""
          />
          <h1 className="h1_class">31st October 2022</h1>
          <p>
            On this day, I wasn't expecting anything at all. It hadn't even
            crossed my mind. But as they say, with strong will and the magic of
            Jalaram Bapa, anything is possible. And on the auspicious occasion
            of Jalaram Jayanti, I had the incredible opportunity to see you
            again after such a long time. It was truly magical. ✨😊 emotinally
            attached moment
          </p>
        </li>
        <li id="2001" className={selectedYear === 2001 ? "selected" : ""}>
          <img
            src="http://www.csslab.cl/ejemplos/timelinr/latest/images/9.png"
            alt=""
          />
          <h1 className="h1_class">24th April 2023</h1>
          <p>
            I'm at a loss for words to describe that moment. It was truly
            magical, astonishing, heartwarming, and amazing in so many ways.
            When I saw you, when i was getting off the BRTS bus, believe me,
            Jiyu, it was the most incredible moment of my life. Seeing you so
            close after such a long year was absolutely amazing. 😍✨
          </p>
        </li>
        <li id="2002" className={selectedYear === 2002 ? "selected" : ""}>
          <img
            src="http://www.csslab.cl/ejemplos/timelinr/latest/images/10.png"
            alt=""
          />
          <h1 className="h1_class">30th April 2023</h1>
          <p>
            Last weekend, we met at Law Garden with your friend, but it left me
            yearning for more. You, being the amazing person you are, arranged
            for us to meet on another day. I'll always remember that day; it
            gave me another forever moment to cherish. The atmosphere with the
            gentle rain during our nighttime stroll was incredible. This, my
            dear, was, is, and will forever be my top dream in life for ages😊💫
          </p>
        </li>
        <li id="2003" className={selectedYear === 2003 ? "selected" : ""}>
          <img
            src="http://www.csslab.cl/ejemplos/timelinr/latest/images/7.png"
            alt=""
          />
          <h1 className="h1_class">05th July 2023</h1>
          <p>
            This was a dream come true moment for me, Jiyu. Knowing you were in
            Gandhinagar for the entire day, despite the hot weather(very sorry
            for that Jiyu😢), made it a beautiful day. And sitting behind you on
            the Activa was a 'moment hai bhai' kind of moment. 😉❤️
          </p>
        </li>
        <li id="2004" className={selectedYear === 2004 ? "selected" : ""}>
          <img
            src="http://www.csslab.cl/ejemplos/timelinr/latest/images/3.png"
            alt=""
          />
          <h1 className="h1_class">16th August 2023</h1>
          <p>
            This was the last time I saw you. There were so many things I wanted
            to say, but I kept them in my heart for Paldi, and unfortunately,
            that didn't happen. However, spending that day with you was a huge
            morale boost, especially when I was feeling completely down. You
            were there to encourage me. Thank you so much for that day and for
            every moment we've shared!❤️😔
          </p>
        </li>
        <li id="2005" className={selectedYear === 2005 ? "selected" : ""}>
          <img
            src="http://www.csslab.cl/ejemplos/timelinr/latest/images/3.png"
            alt=""
          />
          <h1 className="h1_class">09th Sept</h1>
          <p>
            When we met last time in Ahm, I thought it might be our last meeting
            for a long time. But then, at Lokmela, I wasn't expecting it, and I
            was absolutely stunned and excited. A mix of nervousness and
            excitement made me behave a bit oddly that day. I'm sorry , I knew i
            didn't act appropriately. 😅😊
          </p>
        </li>
        <li id="2006" className={selectedYear === 2006 ? "selected" : ""}>
          <img
            src="http://www.csslab.cl/ejemplos/timelinr/latest/images/3.png"
            alt=""
          />
          <h1 className="h1_class">For ages</h1>
          <p>
            Just wanted to express my gratitude, Jiyu, for everything and all
            these incredible moments we've shared. I hope and wish we can
            continue filling the memory bar together as much as possible. You
            know, they say, 'Memories are the key not to the past, but to the
            future.' 😊🌟
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
