import { useRef } from "react";
import moon from "./moon.png";
import land from "./land.png";
import cat from "./cat.gif";
import "./assets/styles/main.scss";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Card from "./card/Card";
import Carousel from "./Carousel/Carousel";

function App() {
  const ref = useRef();

  return (
    <div>
      <Parallax pages={5} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >djjdjsjdksjdj</ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.9, end: 7.9 }}
          style={{ textAlign: "right" }}
        >
          <img src={cat} />
        </ParallaxLayer>
        <div className="geelo">
          <ParallaxLayer
            offset={0.2}
            speed={0.05}
            onClick={() => ref.current.scrollTo(3)}
          >
            <Card />
          </ParallaxLayer>
        </div>

        <ParallaxLayer
          offset={3}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
       <Carousel/>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={2}
          factor={4}
          // onClick={() => ref.current.scrollTo(0)}
          style={{ backgroundImage: `url(${land})`, backgroundSize: "cover" }}
        ></ParallaxLayer>
      </Parallax>
      {/* <Card /> */}
    </div>
   
  );
}

export default App;
