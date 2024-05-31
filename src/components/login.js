import React from "react";
import diadexepa from "./images/diaDeXepa.png";
import logo from "./images/logo.png";

function Login() {
  return (
    <>
      <section className="login">
        <img
          className="login__image_logo"
          alt="Imagem do logo"
          src={diadexepa}
        />
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
        <img className="login__image_logo" alt="imagem do logo" src={logo} />
      </section>

      <section className="forgot__password">
        <h1 className="forgot__password_header">Dia de xepa</h1>
        <img className="forgot__image_logo" alt="Imagem do logo" src={logo} />
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
      </section>
    </>
  );
}

export default Login;
