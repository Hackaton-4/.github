import React from "react";
import logo1 from "../images/logo-white.png";
import cesta from "../images/cesta.png";

function Login() {
  return (
    <>
      <section className="login">
        <h1 className="login__password_header">Dia de xepa</h1>
        <div className="login__image_logo-container">
          <img className="login__image_logo" alt="Imagem do logo" src={logo1} />
        </div>
        <form className="login__form">
          <label className="login__form_title">Telefone</label>
          <input
            className="login__form_input"
            type="number"
            minLength={9}
            maxLength={9}
            placeholder="Insira seu telefone"
            required=""
          ></input>
          <label className="login__form_title">Senha</label>
          <input
            className="login__form_input"
            type="text"
            minLength={4}
            maxLength={9}
            placeholder="Insira sua senha"
            required=""
          ></input>
          <a className="login__forgot" href="#forgotPassword">
            Esqueci minha senha
          </a>
        </form>
        <div className="login__button_container">
          <button className="login__button">Voltar</button>
          <button className="login__button">Login</button>
        </div>
        <img className="login__image_cesta" alt="imagem do logo" src={cesta} />
      </section>

      <section className="forgot__password">
        <h1 className="forgot__password_header">Dia de xepa</h1>
        <div className="forgot__image_logo-container">
          <img
            className="forgot__image_logo"
            alt="Imagem do logo"
            src={logo1}
          />
        </div>
        <form className="forgot__form_cel">
          <label className="forgot__password_title">
            Insira seu telefone. Um SMS será enviado com a nova senha
          </label>
          <input
            className="forgot__form_input"
            type="number"
            minLength={9}
            maxLength={9}
            placeholder="(99) 99999-9999"
            required=""
          ></input>
        </form>
        <div className="forgot__button_container">
          <button className="forgot__button">Cancelar</button>
          <button className="forgot__button">Enviar</button>
        </div>
        <img className="login__image_cesta" alt="imagem do logo" src={cesta} />
      </section>
    </>
  );
}

export default Login;
