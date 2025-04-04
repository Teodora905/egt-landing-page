import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://picsum.photos/id/1015/1200/600",
  "https://picsum.photos/id/1016/1200/600",
  "https://picsum.photos/id/1018/1200/600"
];

function ImageSlider() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1200, // за таблети и мобилни
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="hero-slider">
      <div className="slider-text">
        <div className="text-row">
          <span>Your</span><strong>Best</strong>
        </div>
        <div className="text-row">
          <strong>Gaming Experience</strong>
        </div>
      </div>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index}`} className="slider-img" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;