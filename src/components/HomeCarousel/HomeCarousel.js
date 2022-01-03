import React from "react";
import Flickity from "react-flickity-component";

import "./flickity.min.css";
import "./HomeCarousel.css";
import Image1 from "../../images/1.jpg";
import Image2 from "../../images/2.jpg";
import Image3 from "../../images/3.jpg";
import Image4 from "../../images/4.jpg";
import Image5 from "../../images/5.jpg";
import Image6 from "../../images/6.jpg";
import Image7 from "../../images/7.jpg";
import Image8 from "../../images/8.jpg";
import Image9 from "../../images/9.jpg";

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
];

const flickityOptions = {
  autoPlay: true,
  percentPosition: false,
  imagesLoaded: true,
};

export default (props) => {
  console.log("Rendering Home Carousel");

  return (
    <Flickity className={"carousel"} options={flickityOptions}>
      {images.map((image) => (
        <img src={image} alt="" />
      ))}
    </Flickity>
  );
};
