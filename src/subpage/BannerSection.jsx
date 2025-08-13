import React from "react";
import { Carousel } from "antd";
import "./BannerSection.css";

const images = [
  "/src/assets/1.jpg",
  "/src/assets/2.jpg",
  "/src/assets/3.jpg",
];



const BannerSection = () => (
  <div className="banner-section">
    <Carousel autoplay className="banner-carousel">
      {images.map((src, index) => (
        <div key={index}>
          <img
            src={src}
            alt={`Banner ${index + 1}`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      ))}
    </Carousel>
  </div>
);

export default BannerSection;
