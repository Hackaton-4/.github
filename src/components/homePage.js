import React from "react";
import logo1 from "../images/logo-white.png";
import cancel from "../images/cancel.png";
import abobora from "../images/abobora.png";
import text1 from "../images/text-one.png";
import cenoura from "../images/cenoura.png";
import text2 from "../images/text-two.png";
import alface from "../images/alface.png";
import text3 from "../images/text-tree.png";
import planta from "../images/planta.png";
import text4 from "../images/text-four.png";
import beterraba from "../images/beterraba.png";
import text5 from "../images/text-five.png";
import cogumelo from "../images/cogumelo.png";
import text6 from "../images/text-six.png";
import pimentao from "../images/pimentao.png";
import text7 from "../images/text-seven.png";
import negocios from "../images/negocios.png";

function HomePage() {
  return (
    <>
      <section className="homePage">
        <div className="homePage__image_logo-container">
          <img
            className="homePage__image_logo"
            src={logo1}
            alt="Imagem do logo"
          ></img>
        </div>
        <a className="homePage__image_link">
          <img
            className="homePage__image_cancel"
            src={cancel}
            alt="Botão cancelar"
          ></img>
        </a>
        <div className="homePage__image_container">
          <img
            className="homePage__image_vegetable"
            src={abobora}
            alt="Imagem de uma abóbora"
          ></img>
          <img className="homePage__image_text" src={text1} alt="Texto"></img>
          <div className="homePage__image_container-one">
            <img
              className="homePage__image_vegetable-one"
              src={cenoura}
              alt="Imagem de uma cenoura"
            ></img>
          </div>
          <img className="homePage__image_text" src={text2} alt="Texto"></img>
          <div className="homePage__image_container-two">
            <img
              className="homePage__image_vegetable-two"
              src={alface}
              alt="Imagem de uma alface"
            ></img>
          </div>
          <img className="homePage__image_text" src={text3} alt="Texto"></img>
          <div className="homePage__image_container-tree">
            <img
              className="homePage__image_vegetable-tree"
              src={planta}
              alt="Imagem de uma planta"
            ></img>
          </div>
          <img className="homePage__image_text" src={text4} alt="Texto"></img>
          <div className="homePage__image_container-four">
            <img
              className="homePage__image_vegetable-four"
              src={beterraba}
              alt="Imagem de uma beterraba"
            ></img>
          </div>
          <img className="homePage__image_text" src={text5} alt="Texto"></img>
          <div className="homePage__image_container-five">
            <img
              className="homePage__image_vegetable-five"
              src={cogumelo}
              alt="Imagem de um cogumelo"
            ></img>
          </div>
          <img className="homePage__image_text" src={text6} alt="Texto"></img>
          <div className="homePage__image_container-six">
            <img
              className="homePage__image_vegetable-six"
              src={pimentao}
              alt="Imagem de um pimentão"
            ></img>
            <img className="homePage__image_text" src={text7} alt="Texto"></img>
            <img
              className="homePage__image_business"
              src={negocios}
              alt="Imagem do feirante fechando negócio com um cliente"
            ></img>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
