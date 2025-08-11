import React from "react";
import { Carousel } from "antd";
import "./BannerSection.css";

const images = [
  "/src/assets/solidworks.jpeg",
  "/images/banner2.jpg",
  "/images/banner3.jpg",
  "/images/banner4.jpg",
];

const contentStyle = {
  height: "50vh",
  textAlign: "center",
  background: "#364d79",
  lineHeight: "160px",
};

const BannerSection = () => (
  <div className="banner-section scroll-section">
    <Carousel autoplay className="banner-carousel">
      {images.map((src, index) => (
        <div key={index}>
          <img
            src={src}
            alt={`Banner ${index + 1}`}
            style={{ width: "100%", height: "160px", objectFit: "cover" }}
          />
        </div>
      ))}
    </Carousel>
  </div>
);

export default BannerSection;
