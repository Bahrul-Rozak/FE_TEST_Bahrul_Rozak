import "./../../app.scss";

import LeafOneImg from "../../assets/images/Leaf 1.png";
import LeafTwoImg from "../../assets/images/Leaf 2.png";
import FooterImg from "../../assets/images/Flower 2.png";
import { useEffect } from "react";
import AOS from "aos";

function Agenda() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <main>
        <div className="title animation" data-aos="zoom-in">
          <i>Assalamualaikum Wr.Wb</i>
        </div>
        <div className="description">
          <p>
            Tanpa mengurangi rasa hormat, kami mengundang <br />
            Bapak/Ibu/Saudara/i pada acara pernikahan kami:
          </p>
        </div>
        <div className="name">
          <div className="name__title">
            <div className="name__image_right">
              <img src={LeafOneImg} alt />
            </div>
            <h1>Mustika</h1>
          </div>
          <p>Putri dari Bpk Winarno & Ibu Julaikah</p>
          <h1 className="name__title">&</h1>

          <div className="name__title">
            <div className="name__image_left">
              <img src={LeafTwoImg} alt />
            </div>
            <h1>Wira</h1>
          </div>
          <p>Putri dari Bpk Winarno & Ibu Julaikah</p>
        </div>
        <div className="surah">
          <i>QS.Ar-Rum Ayat 21</i>
        </div>
        <div className="surah__description">
          <p>
            Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia <br />
            menciptakan pasangan-pasangan untukmu dari jenismu sendiri,,
            <br />
            agar kamu cenderung dan merasa tenteram kepadanya, dan Dia <br />
            menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada <br />
            yang demikian itu benar-benar terdapat tanda-tanda (kebesaran <br />
            Allah) bagi kaum yang berpikir.
          </p>
        </div>
        <div className="footer-image">
          <img src={FooterImg} alt="flower" width="100%" />
        </div>
      </main>
    </>
  );
}

export default Agenda;
