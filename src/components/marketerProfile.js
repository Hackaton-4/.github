import React from "react";
import feirante from "../images/feirante.png";

function MarketerProfile() {
  return (
    <>
      <section className="marketerProfile">
        <h1 className="marketerProfile__header">Dia de xepa</h1>
        <img
          className="marketerProfile__image"
          alt="Feirante em sua barraca"
          src={feirante}
        />
        <p className="marketerProfile__text">
          Minha barraca:{" "}
          <span className="marketerProfile__span">Banca do Zezinho</span>
        </p>
        <p className="marketerProfile__text">
          CEP: <span className="marketerProfile__span">22410-030</span>
        </p>
        <p className="marketerProfile__text">
          Estado: <span className="marketerProfile__span">Rio de Janeiro</span>
        </p>
        <p className="marketerProfile__text">
          Cidade: <span className="marketerProfile__span">Rio de Janeiro</span>
        </p>
        <p className="marketerProfile__text">
          Rua:{" "}
          <span className="marketerProfile__span">
            Praça Nossa Senhora da Paz
          </span>
        </p>
        <p className="marketerProfile__text">
          Bairro: <span className="marketerProfile__span">Ipanema</span>
        </p>
        <p className="marketerProfile__text">
          Número: <span className="marketerProfile__span">100</span>
        </p>
        <p className="marketerProfile__text">
          Complemento: <span className="marketerProfile__span">Barraca 13</span>
        </p>
        <p className="marketerProfile__text">
          Telefone:{" "}
          <span className="marketerProfile__span">(99) 99999-9999</span>
        </p>
        <p className="marketerProfile__text">
          Watsapp:{" "}
          <span className="marketerProfile__span">(99) 99999-9999</span>
        </p>
        <p className="marketerProfile__text">
          Valor da sacola:{" "}
          <span className="marketerProfile__span">R$ 10,00</span>
        </p>
        <a className="marketerProfile__link" href="">
          Excluir cadastro
        </a>
        <div className="marketerProfile__button_container">
          <button className="marketerProfile__button">Voltar</button>
          <button className="marketerProfile__button">Alterar cadastro</button>
        </div>
      </section>
    </>
  );
}

export default MarketerProfile;
