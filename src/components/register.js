import React from "react";
import Header from "./Header";

function Register() {
  return (
    <>
      <Header />
      <section className="register">
        <button className="register__button">Já tenho o cadastro</button>

        <p className="register__text">
          Informe seus dados para cadastrar a sua banca!
        </p>

        <p className="register__text">Qual o nome da sua banca?</p>
        <label>
          <input className="register__input" />
          <span className="" />
        </label>

        <p className="register__text">CEP</p>
        <label>
          <input className="register__input" />
          <span className="" />
        </label>

        <p className="register__text">Estado</p>
        <label>
          <input className="register__input" />
          <span className="" />
        </label>

        <p className="register__text">Cidade</p>
        <label>
          <input className="register__input" />
          <span className="" />
        </label>

        <p className="register__text">Rua</p>
        <label>
          <input className="register__input" />
          <span className="" />
        </label>

        <p className="register__text">Bairro</p>
        <label>
          <input className="register__input" />
          <span className="" />
        </label>

        <p className="register__text">Número</p>
        <label>
          <input className="register__input" />
          <span className="" />
        </label>

        <p className="register__text">Complemento</p>
        <label>
          <input className="register__input" />
          <span className="" />
        </label>

        <p className="register__text">Telefone</p>
        <label>
          <input className="register__input" />
          <span className="" />
        </label>

        <p className="register__text">Whatssapp</p>
        <label>
          <input className="register__input" />
          <span className="" />
        </label>

        <p className="register__text">Valor da Sacola</p>
        <label>
          <input className="register__input" />
          <span className="" />
        </label>

        <p className="register__text">Imagem</p>
        <button className="register__image_button">+</button>
        <span className="" />

        <div className="register__block_buttons">
          <button className="register__button_back">Voltar</button>
          <button className="register__button_submit">Cadastrar</button>
        </div>
      </section>
    </>
  );
}

export default Register;
