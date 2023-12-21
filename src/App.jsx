import { useRef } from "react";
import moon from "./moon.png";
import land from "./land.png";
import cat from "./cat.gif";
import "./assets/styles/main.scss";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Card from "./card/Card";
import Carousel from "./Carousel/Carousel";
import Demo1 from "./demo/Demo1";
import Timeline from "./timeline/Timeline";
import uni from "./assets/images/bg1.jpg";
import uni2 from "./assets/images/astro.jpg";
import finalRain from "./assets/videos/rain.mp4";

function App() {
  const ref = useRef();
  const heartEmoji = String.fromCodePoint(0x2764);
  const smileEmoji = String.fromCodePoint(0x1f604);

  return (
    <div>
      <Parallax pages={5} ref={ref} scrolling={false}>
        <ParallaxLayer
          sticky={{ start: 0.9, end: 6.0 }}
          style={{ textAlign: "right", zIndex: "-1000" }}
        >
          <img src={cat} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={3}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.5,
          }}
        />

        <ParallaxLayer offset={0.1} speed={1.5} factor={1.5}>
          <h1 className="text-center moon-heading">
            Hello Moon (Ninu{heartEmoji}
            {smileEmoji}); I know I'm quite at distance from you, but in the
            end, i wanna bask in the sparkle of the my moon's smile. This month
            has been exceptionally fortunate and blessed for both Chandrayan and
            me. We both harbored a heartfelt desire to gaze closely at our own
            moon, as if God had granted us that very wish.
          </h1>
        </ParallaxLayer>
        <ParallaxLayer offset={0.8} speed={1} factor={2}>
          <h1 className="text-center moon-heading">
            I humbly beseech the moon for a closer gaze upon the Earth, with the
            hope of discovering moments that ignite joy and elation and I gotta
            ignite those moments wid my 🌙.. When the moon grins it's radiant
            light ✨️ rejuvenates as I my spirit gets rejuvenated by moons
            radiating infectious smile . I do not seek to captivate the moon's
            attention, for billions gaze upon it daily, making wishes. I am
            among those who simply wish to bask in my moon's beauty and savor
            every moment of it for till I have it ♥️ ❤️. (Very sorry for below
            text in small size , you can zoom it and have also sended that
            message directly to you)
          </h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.3}
          speed={0.05}
          // onClick={() => ref.current.scrollTo(3)}
          style={{
            backgroundImage: `url(${uni})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.9,
          }}
        ></ParallaxLayer>

        <div className="geelo">
          <ParallaxLayer
            offset={1.5}
            speed={0.25}
            factor={3}
            // onClick={() => ref.current.scrollTo(3)}
          >
            <Card />
          </ParallaxLayer>
        </div>

        <ParallaxLayer
          offset={2}
          speed={0.5}
          factor={2}
          // onClick={() => ref.current.scrollTo(0)}
          style={{
            backgroundImage: `url(${uni2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.5,
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={2.3}
          speed={0.6}
          factor={2}
          // onClick={() => ref.current.scrollTo(0)}
        >
          <Carousel />
        </ParallaxLayer>
        <ParallaxLayer
          offset={3} // Adjust this value
          speed={2.5}
          factor={3} // Adjust this value
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: "cover",

            overflow: "initial",

            transform: "translate3d(0px, 2223px, 0px)",
          }}
        >
          <Timeline />
        </ParallaxLayer>
        <ParallaxLayer
          offset={4.8} // Adjust this value as needed
          speed={0.5}
          factor={2} // Adjust this value as needed
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <video
            autoPlay
            muted
            loop
            style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
          >
            <source src={finalRain} type="video/mp4" />
            {/* Add more source tags for different video formats if needed */}
          </video>
        </ParallaxLayer>
        <ParallaxLayer offset={4.9} factor={1} speed={2}>
          <h1
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="final-text"
          >
            If ever there is a tomorrow when we're not together, there is
            something you must always remember: You are braver than you believe,
            stronger than you seem, and smarter than you think. But the most
            important thing is, even if we're apart, I'll always be with you in
            spirit.
          </h1>
          <h1
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="final-text"
          >
            Take care, Ninu! 😊 Missing you immensely, with so much left to
            express. Hoping for the chance to share it all someday. Thank you
            deeply for everything, Ninu. 🫠❤️
          </h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
