import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/AnimalCard.css";

import murrah from "../img/goat.jpeg";

const Goatcard = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: calculateSlidesToShow(), // Adjust slidesToShow dynamically
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Function to calculate the number of slides to show based on screen width
  function calculateSlidesToShow() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
      return 5;
    } else if (screenWidth >= 600) {
      return 3;
    } else {
      return 1;
    }
  }

  return (
    <div>
      <div className="header">
        <h1 className="sec_title">
          <i class="fas fa-hourglass-half">
            {/* <i class="fas fa-caret-right"></i> */}
          </i>
          Newly Added Cows Livestock
        </h1>
        <h2 className="view_all">
          <i class="fas fa-eye"></i>view All
        </h2>
      </div>
      <Slider {...settings}>
      <div className="custom-product-card">
      <img src={murrah} alt="Product" className="custom-product-image" />
      <div className="custom-product-info">
        <h3 className="custom-product-title">Product Title</h3>
        <p className="custom-product-description">Description of the product goes here.</p>
        <button className="custom-add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
    <div className="custom-product-card">
      <img src={murrah} alt="Product" className="custom-product-image" />
      <div className="custom-product-info">
        <h3 className="custom-product-title">Product Title</h3>
        <p className="custom-product-description">Description of the product goes here.</p>
        <button className="custom-add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
    <div className="custom-product-card">
      <img src={murrah} alt="Product" className="custom-product-image" />
      <div className="custom-product-info">
        <h3 className="custom-product-title">Product Title</h3>
        <p className="custom-product-description">Description of the product goes here.</p>
        <button className="custom-add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
    <div className="custom-product-card">
      <img src={murrah} alt="Product" className="custom-product-image" />
      <div className="custom-product-info">
        <h3 className="custom-product-title">Product Title</h3>
        <p className="custom-product-description">Description of the product goes here.</p>
        <button className="custom-add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
    <div className="custom-product-card">
      <img src={murrah} alt="Product" className="custom-product-image" />
      <div className="custom-product-info">
        <h3 className="custom-product-title">Product Title</h3>
        <p className="custom-product-description">Description of the product goes here.</p>
        <button className="custom-add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
    <div className="custom-product-card">
      <img src={murrah} alt="Product" className="custom-product-image" />
      <div className="custom-product-info">
        <h3 className="custom-product-title">Product Title</h3>
        <p className="custom-product-description">Description of the product goes here.</p>
        <button className="custom-add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
    <div className="custom-product-card">
      <img src={murrah} alt="Product" className="custom-product-image" />
      <div className="custom-product-info">
        <h3 className="custom-product-title">Product Title</h3>
        <p className="custom-product-description">Description of the product goes here.</p>
        <button className="custom-add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
      </Slider>
    </div>
  );
};

export default Goatcard;
