import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import ReactSimpleCarousel from "./react-spring-carousel";

import Image1 from "./images/1.jpg";
import Image2 from "./images/2.jpg";
import Image3 from "./images/3.jpg";
import Image4 from "./images/4.jpg";
import Image5 from "./images/5.jpg";

const slides = [
  {
    image: Image1,
    text: "Exercitation tempor"
  },
  {
    image: Image2,
    text: "dolore proident id"
  },
  {
    image: Image3,
    text: "proident id irure"
  },
  {
    image: Image4,
    text: "Exercitation irure"
  },
  {
    image: Image5,
    text: "dolore proident id irure"
  }
];
function App() {
  return (
    <div className="App">
      <ReactSimpleCarousel slidesToShow={3}>
        {slides.map(({ image, text }, i) => (
          <div key={i} className="App-slide">
            <a href={`#${i}`} draggable="false">
              <img src={image} alt="" />
            </a>
            <p
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translateX(-50%) translateY(-50%)"
              }}
            >
              {text}
            </p>
          </div>
        ))}
      </ReactSimpleCarousel>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
