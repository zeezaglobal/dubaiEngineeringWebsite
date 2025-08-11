import React from "react";
import { Carousel } from "antd";
import "./BannerSection.css";

const images = [
  "/src/assets/solidworks.jpeg",
  "/src/assets/solidworks.jpeg",
  "/src/assets/solidworks.jpeg",
  "/src/assets/solidworks.jpeg",
];



const BannerSection = () => (
  <div className="banner-section">
    <Carousel autoplay className="banner-carousel">
      {images.map((src, index) => (
        <div key={index}>
          <img
            src={src}
            alt={`Banner ${index + 1}`}
          />
        </div>
      ))}
    </Carousel>
  </div>
);

export default BannerSection;
