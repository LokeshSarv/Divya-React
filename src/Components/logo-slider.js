import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";

function LogoSlider() {
  return (
    <div className="partners-slider">
      <OwlCarousel
        className="owl-theme"
        loop
        items={7}
        margin={10}
        autoplay={true}
      >
        <div className="item">
          <img src="images/logos/certin.png" alt="certin" className="img-fluid" />
        </div>
        <div className="item">
          <img src="images/logos/cmmi.png" alt="cmmi" className="img-fluid" />
        </div>
        <div className="item">
          <img src="images/logos/digitalindia.png" alt="digitalindia" className="img-fluid" />
        </div>
        <div className="item">
          <img src="images/logos/iso.png" alt="iso" className="img-fluid" />
        </div>
        <div className="item">
          <img src="images/logos/meity.png" alt="meity" className="img-fluid" />
        </div>
        <div className="item">
          <img src="images/logos/negd.png" alt="negd" className="img-fluid" />
        </div>
        <div className="item">
          <img src="images/logos/startupindia.png" alt="startupindia" className="img-fluid" />
        </div>
      </OwlCarousel>
    </div>
  );
}

export default LogoSlider;
