import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";
const Services = () => {
  return (
    <Carousel
      infiniteLoop
      autoPlay
      showStatus={false}
      showArrows={false}
      interval={1000}
      showThumbs={false}
      showIndicators={false}
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <div>
        <img
          style={{
            width: "100%",
            height: "100vh",
          }}
          src={img1}
        />
        <p className="legend">Full-Stack</p>
      </div>
      <div>
        <img
          style={{
            width: "100%",
            height: "100vh",
          }}
          src={img2}
        />
        <p className="legend">Peer-to-Peer Support</p>
      </div>
    </Carousel>
  );
};

export default Services;
