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

function App() {
  const ref = useRef();

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

        <ParallaxLayer
          offset={0.1}
          speed={1.5}
          factor={1.5}
          
        >
          <h1 className="text-center moon-heading">
            Hello Moon (JIYU❤️) . I know I'm quite at distance from you, but in
            the end, i wanna bask in the sparkle of the my moon's smile. This
            month has been exceptionally fortunate and blessed for both
            Chandrayan and me. We both harbored a heartfelt desire to gaze
            closely at our own moon, as if God had granted us that very wish.
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
            every moment of it for till I have it ♥️ ❤️.
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
            offset={1.6}
            speed={0.25}
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
          speed={0.5}
          factor={2} // Adjust this value
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: "cover",
            overflow: "hidden",
            // transform:"none"
            transform: "translate3d(0px, 2572px, 0px)",
          }}
        >
          <Timeline />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
