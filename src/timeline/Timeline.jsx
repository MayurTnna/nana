  import React, { useState } from "react";
  import "./Timeline.css";

  const Timeline = () => {
    const [selectedYear, setSelectedYear] = useState(1900);

    const handleYearClick = (year) => {
      setSelectedYear(year);
    };

    return (
      <div id="timeline">
        <ul id="dates">
          <li>
            <a
              href="#1900"
              className={selectedYear === 1900 ? "selected" : ""}
              onClick={() => handleYearClick(1900)}
            >
              1900
            </a>
          </li>
          <li>
            <a
              href="#1930"
              className={selectedYear === 1930 ? "selected" : ""}
              onClick={() => handleYearClick(1930)}
            >
              1930
            </a>
          </li>
          <li>
            <a
              href="#1944"
              className={selectedYear === 1944 ? "selected" : ""}
              onClick={() => handleYearClick(1944)}
            >
              1944
            </a>
          </li>
          <li>
            <a
              href="#1950"
              className={selectedYear === 1950 ? "selected" : ""}
              onClick={() => handleYearClick(1950)}
            >
              1950
            </a>
          </li>
          <li>
            <a
              href="#1971"
              className={selectedYear === 1971 ? "selected" : ""}
              onClick={() => handleYearClick(1971)}
            >
              1971
            </a>
          </li>
          <li>
            <a
              href="#1977"
              className={selectedYear === 1977 ? "selected" : ""}
              onClick={() => handleYearClick(1977)}
            >
              1977
            </a>
          </li>
          <li>
            <a
              href="#1989"
              className={selectedYear === 1989 ? "selected" : ""}
              onClick={() => handleYearClick(1989)}
            >
              1989
            </a>
          </li>
          <li>
            <a
              href="#1999"
              className={selectedYear === 1999 ? "selected" : ""}
              onClick={() => handleYearClick(1999)}
            >
              1999
            </a>
          </li>
          <li>
            <a
              href="#2001"
              className={selectedYear === 2001 ? "selected" : ""}
              onClick={() => handleYearClick(2001)}
            >
              2001
            </a>
          </li>
          <li>
            <a
              href="#2011"
              className={selectedYear === 2011 ? "selected" : ""}
              onClick={() => handleYearClick(2011)}
            >
              2011
            </a>
          </li>
        </ul>
        <ul id="issues">
          <li id="1900" className={selectedYear === 1900 ? "selected" : ""}>
            <img
              src="http://www.csslab.cl/ejemplos/timelinr/latest/images/1.png"
              alt=""
            />
            <h1 className="h1_class" >1900</h1>
            <p>Scroll down</p>
          </li>
          <li id="1930" className={selectedYear === 1930 ? "selected" : ""}>
            <img
              src="http://www.csslab.cl/ejemplos/timelinr/latest/images/2.png"
              alt=""
            />
            <h1 className="h1_class">1930</h1>
            <p>
              Donec semper quam scelerisque tortor dictum gravida. In hac
              habitasse platea dictumst...
            </p>
          </li>
          <li id="1944" className={selectedYear === 1944 ? "selected" : ""}>
            <img
              src="http://www.csslab.cl/ejemplos/timelinr/latest/images/3.png"
              alt=""
            />
            <h1 className="h1_class">1944</h1>
            <p>
              Donec semper quam scelerisque tortor dictum gravida. In hac
              habitasse platea dictumst...
            </p>
          </li>
          <li id="1950" className={selectedYear === 1950 ? "selected" : ""}>
            <img
              src="http://www.csslab.cl/ejemplos/timelinr/latest/images/4.png"
              alt=""
            />
            <h1 >1950</h1>
            <p>
              Donec semper quam scelerisque tortor dictum gravida. In hac
              habitasse platea dictumst...
            </p>
          </li>
          <li id="1971" className={selectedYear === 1971 ? "selected" : ""}>
            <img
              src="http://www.csslab.cl/ejemplos/timelinr/latest/images/5.png"
              alt=""
            />
            <h1 className="h1_class">1971</h1>
            <p>
              Donec semper quam scelerisque tortor dictum gravida. In hac
              habitasse platea dictumst...
            </p>
          </li>
          <li id="1977" className={selectedYear === 1977 ? "selected" : ""}>
            <img
              src="http://www.csslab.cl/ejemplos/timelinr/latest/images/6.png"
              alt=""
            />
            <h1 className="h1_class">1977</h1>
            <p>
              Donec semper quam scelerisque tortor dictum gravida. In hac
              habitasse platea dictumst...
            </p>
          </li>
          <li id="1989" className={selectedYear === 1989 ? "selected" : ""}>
            <img
              src="http://www.csslab.cl/ejemplos/timelinr/latest/images/7.png"
              alt=""
            />
            <h1 className="h1_class">1989</h1>
            <p>
              Donec semper quam scelerisque tortor dictum gravida. In hac
              habitasse platea dictumst...
            </p>
          </li>
          <li id="1999" className={selectedYear === 1999 ? "selected" : ""}>
            <img
              src="http://www.csslab.cl/ejemplos/timelinr/latest/images/8.png"
              alt=""
            />
            <h1 className="h1_class">1999</h1>
            <p>
              Donec semper quam scelerisque tortor dictum gravida. In hac
              habitasse platea dictumst...
            </p>
          </li>
          <li id="2001" className={selectedYear === 2001 ? "selected" : ""}>
            <img
              src="http://www.csslab.cl/ejemplos/timelinr/latest/images/9.png"
              alt=""
            />
            <h1 className="h1_class">2001</h1>
            <p>
              Donec semper quam scelerisque tortor dictum gravida. In hac
              habitasse platea dictumst...
            </p>
          </li>
          <li id="2011" className={selectedYear === 2011 ? "selected" : ""}>
            <img
              src="http://www.csslab.cl/ejemplos/timelinr/latest/images/10.png"
              alt=""
            />
            <h1 className="h1_class">2011</h1>
            <p>
              Donec semper quam scelerisque tortor dictum gravida. In hac
              habitasse platea dictumst...
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
