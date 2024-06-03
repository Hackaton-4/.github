import React from "react";
import logo from "../images/diaDeXepa.png";

function Welcome() {
  return (
    <>
      <section className="welcome">
        <div className="welcome__block">
          <div className="welcome__logo">
            <img src={logo} className="welcome__image_logo" alt="logo" />
          </div>
          <h1 className="welcome__paragraph">
            Conectamos feirantes que vendem cestas de produtos frescos e
            saudáveis a usuários interessados em economizar.{" "}
          </h1>
          <button className="welcome__button_feirante">Sou feirante</button>
          <button className="welcome__button_cliente">
            Encontrar xepas próximas a mim
          </button>
          <h1 className="welcome__title">
            Diga adeus ao desperdício de alimentos
          </h1>
        </div>
      </section>
    </>
  );
}

export default Welcome;
