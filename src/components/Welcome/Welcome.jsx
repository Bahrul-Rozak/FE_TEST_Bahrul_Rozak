import "./../../app.scss";

import FlowerThreeImg from "../../assets/images/Flower 3.png";
import LeafOneImg from "../../assets/images/Leaf 1.png";

import PhotoProfileImg from "../../assets/images/Photo Profil.png";
import FooterImg from "../../assets/images/Flower 4.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Welcome() {
  useEffect(() => {
    $(".example4").arctext({ radius: 200 });
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <>
      <header>
      
        <div className="header__title ">
          <h1 className="example4" data-aos="zoom-out">The Wedding Of</h1>
        </div>

        <div className="header__profile">
          <img src={PhotoProfileImg} alt="profile" width="50%" loading="lazy"/>
          <h1 data-aos="zoom-out">
            Mustika
            <br />& Wira
          </h1>
        </div>

        <div className="header_top__image" data-aos="fade-right">
          <img src={LeafOneImg} alt="flower"/>
        </div>

        <div className="header__date">
          <h3>25 | 05 | 2022</h3>
        </div>
        <div className="header__description">
          <p>di mohon kehadirannya</p>
        </div>
        
      </header>
    </>
  );
}

export default Welcome;
