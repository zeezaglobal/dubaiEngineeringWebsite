import React from "react";
import { Carousel } from "antd";
import "./BannerSection.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";

const images = [img1, img2, img3];

const BannerSection = () => (
  <div className="banner-section">
    <h1 className="fw-bold sf-font">Your Trusted Partner in Engineering Solutions</h1>
    <Carousel autoplay>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
        </div>
      ))}
    </Carousel>
  </div>
);

export default BannerSection;
