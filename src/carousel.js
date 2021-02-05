import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import carousel1 from './carousel-1.jpg';
import carousel2 from './carousel-2.jpg';
import carousel3 from './carousel-3.jpg';


function Carousel() {
  return (
    <div className="carousel">
    <OwlCarousel className="owl-theme" loop margin={10} items={1} autoplay nav={false} dots={false}>
      <div className="carousel-item">
        <div className="carousel-img">
          <img src={carousel1} alt="Image"/>
        </div>
          <div className="carousel-text">
            <h1>Best <span>Quality</span> Ingredients</h1>
            <p>
              Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac consequat at lectus in malesuada
                            </p>
            <div class="carousel-btn">
              <a class="btn custom-btn" href="">View Menu</a>
              <a class="btn custom-btn" href="">Book Table</a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
        <div className="carousel-img">
          <img src={carousel2} alt="Image"/>
        </div>
          <div className="carousel-text">
            <h1>Best <span>Quality</span> Ingredients</h1>
            <p>
              Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac consequat at lectus in malesuada
                            </p>
            <div class="carousel-btn">
              <a class="btn custom-btn" href="">View Menu</a>
              <a class="btn custom-btn" href="">Book Table</a>
            </div>
          </div>
        </div>

        <div className="carousel-item">
        <div className="carousel-img">
          <img src={carousel3} alt="Image"/>
        </div>
          <div className="carousel-text">
            <h1>Best <span>Quality</span> Ingredients</h1>
            <p>
              Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac consequat at lectus in malesuada
                            </p>
            <div class="carousel-btn">
              <a class="btn custom-btn" href="">View Menu</a>
              <a class="btn custom-btn" href="">Book Table</a>
            </div>
          </div>
        </div>
     
    </OwlCarousel>
    </div>
  );
}

export default Carousel;
