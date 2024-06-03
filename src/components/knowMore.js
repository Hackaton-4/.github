import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

import banca from "../images/banca.png";
import vegetais from "../images/vegetais.png";
import pessoa from "../images/pessoa.png";
import verduras from "../images/vegetais2.png";
import mundoverde from "../images/mundoverde.png";
import healt from "../images/healt.png";
import depoimento from "../images/depoimento.png";
import monique from "../images/monique.png";
import dhara from "../images/dhara.png";
import petros from "../images/petros.png";
import guilherme from "../images/guilherme.png";
import jheimys from "../images/jheimys.png";
import isael from "../images/isael.png";
import julio from "../images/julio.png";
import fernando from "../images/fernando.png";
import instagram from "../images/instagram.png";
import facebook from "../images/facebook.png";
import x from "../images/x.png";

function KnowMore() {
  return (
    <>
      <section className="knowMore">
        <h1 className="knowMore__header">Dia de xepa</h1>
        <h2 className="knowMore__title">Saiba mais</h2>
        <p className="knowMore__text">
          Dia de Xepa tem como propósito conectar pessoas que buscam uma
          alimentação saudável com produtores rurais e feirantes, com o intuito
          de acabar com o desperdício de alimentos e economizar ao mesmo tempo.
        </p>
        <div className="knowMore__images_container">
          <img className="knowMore__image" alt="Banca" src={banca} />
          <img
            className="knowMore__image"
            alt="Caixa de vegetais"
            src={vegetais}
          />
          <img className="knowMore__image" alt="Pessoa" src={pessoa} />
        </div>
        <p className="knowMore__text">
          A plataforma exibe feirantes parceiros que comercializam sacos
          surpresa com hortifruti variados.
        </p>
        <div className="knowMore__text_container">
          <img
            className="knowMore__image"
            alt="Caixa de verduras"
            src={verduras}
          />
          <p className="knowMore__text_right">
            Tais alimentos seriam destinados ao descarte ao final do dia, porém
            podem ser “resgatados” pelos usuários do Dia de Xepa.
          </p>
        </div>
        <div className="knowMore__text_container">
          <p className="knowMore__text_left">
            Nossa missão é promover a sustentabilidade e reduzir o desperdício
            alimentar. Incentivando o consumo consciente, economia e a prática
            de hábitos sustentáveis.
          </p>
          <img className="knowMore__image" alt="Pessoa" src={mundoverde} />
        </div>
        <p className="knowMore__text">
          Segundo dados do Instituto Akatu, estima-se que aproximadamente 26,3
          milhões de toneladas de alimentos são desperdiçadas anualmente no
          país. Iniciativas como o aplicativo "Dia de Xepa" podem ajudar a
          combater o desperdício de frutas e verduras ao conectar consumidores
          interessados em adquirir esses alimentos com desconto.
        </p>
        <p className="knowMore__text">
          Venha fazer parte desse movimento de conscientização ambiental e
          contribuir com esses 4 objetivos de desenvolvimento sustentável da
          ONU!
        </p>
        <img
          className="knowmore__image_block"
          alt="Quadrinhos com dicas sustentáveis"
          src={healt}
        />
        <p className="knowMore__text">#DesperdícioZERO!</p>
        <h2 className="knowMore__title">Depoimentos</h2>
        <img
          className="knowMore__image_testimony"
          alt="Depoimento e foto do Luízo "
          src={depoimento}
        />
        <h2 className="knowMore__title">Quem somos nós</h2>
        <div className="knowMore__carousel">
          <Carousel>
            <Carousel.Item interval={2000}>
              <img
                className="knowMore__image_profile"
                alt="Perfil de Monique"
                src={monique}
              />
              <img
                className="knowMore__image_profile"
                alt="Perfil de Dhara"
                src={dhara}
              />
              <img
                className="knowMore__image_profile"
                alt="Perfil de Petros"
                src={petros}
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="knowMore__image_profile"
                alt="Perfil de Guilherme"
                src={guilherme}
              />
              <img
                className="knowMore__image_profile"
                alt="Perfil de Jheimys"
                src={jheimys}
              />
              <img
                className="knowMore__image_profile"
                alt="Perfil de Isael"
                src={isael}
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="knowMore__image_profile"
                alt="Perfil de Júlio"
                src={julio}
              />
              <img
                className="knowMore__image_profile"
                alt="Perfil de Fernando"
                src={fernando}
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <h2 className="knowMore__title">Contato</h2>
        <div className="knowMore__text_container">
          <p className="knowMore__text_right">
            Entre em contato conosco através do email{" "}
            <a
              className="knowMore__link"
              href="https://www.google.com/intl/pt-BR/gmail/about/"
              target="_blank"
            >
              suporte@diadexepa.com.br
            </a>{" "}
            ou através de nossas redes sociais:
          </p>
          <a
            className="knowMore__link"
            href="https://www.instagram.com/"
            target="_blank"
          >
            <img
              className="knowMore__image_icon"
              alt="Logo Instagram"
              src={instagram}
            />
          </a>
          <a
            className="knowMore__link"
            href="https://www.facebook.com/?locale=pt_BR"
            target="_blank"
          >
            <img
              className="knowMore__image_icon"
              alt="Logo Facebook"
              src={facebook}
            />
          </a>
          <a
            className="knowMore__link"
            href="https://x.com/?lang=pt-br"
            target="_blank"
          >
            <img className="knowMore__image_icon" alt="Logo X" src={x} />
          </a>
        </div>
        <h2 className="knowMore__title">Perguntas frequentes</h2>
        <p className="knowMore__text">
          Baixe{" "}
          <a className="knowMore__link" href="#forgotPassword">
            aqui
          </a>{" "}
          o arquivo com as dúvidas mais frequentes.
        </p>
      </section>
    </>
  );
}

export default KnowMore;
