import "./../../app.scss";

import FlowerThreeImg from "../../assets/images/Flower 3.png";
import PhotoProfileImg from "../../assets/images/Photo Profil.png";

function Welcome() {
  return (
    <>
      <header>
        <div className="header__top__image">
          <img src={FlowerThreeImg} alt="" width="40%" />
        </div>
        <div className="header__title">
          <h1>The Wedding Of</h1>
        </div>
        <div className="header__profile">
          <img src={PhotoProfileImg} alt="" width="50%" />
          <h1>
            Mustika
            <br />& Wira
          </h1>
          <p>Dimohon kehadirannya</p>
        </div>
      </header>
    </>
  );
}

export default Welcome;
