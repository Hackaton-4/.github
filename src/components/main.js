import React from "react";
import imageCard from "../images/imageCard.jpg";
import imageWhatss from "../images/simboloWhatss.png";
import imagePhone from "../images/simboloTelefone.png";
import imageMaps from "../images/simboloMaps.png";

function Main() {
  return (
    <>
      <section className="main">
        <div className="main__block">
          <p className="main__paragraph">
            Olá Zezinho, onde vamos salvar alimentos hoje?{" "}
          </p>
          <label>
            <input className="main__input_cep" placeholder="insira seu CEP" />
            <span className="" />
          </label>
          <h1 className="main__title">
            É a economia aliada à sustentabilidade!
          </h1>
          <div className="main__card">
            <img className="main__image" src={imageCard} alt="" />
            <h2 className="main__card_title">Luízo da barraca TudoTem</h2>
            <div className="main__card_block">
              <h3 className="main__card_price">R$ 15,00</h3>
              <img className="main__simbol" src={imageWhatss} alt="" />
              <img className="main__simbol" src={imagePhone} alt="" />
              <img className="main__simbol" src={imageMaps} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
