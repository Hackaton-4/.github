import React from "react";
import imageIGN from "../images/simbolIGN.png";
import imageFacebook from "../images/simbolFacebook.png";
import imageYoutube from "../images/simbolYoutube.png";
import imageX from "../images/simbolX.png";

function Footer() {
  return (
    <>
      <section className="footer">
        <div className="footer__block">
          <div className="footer__block_primary">
            <p className="footer__paragraph">Saiba mais</p>
            <p className="footer__paragraph">Quem somos nós</p>
            <p className="footer__paragraph">Contato</p>
            <p className="footer__paragraph">Perguntas frequentes</p>
          </div>
          <div className="footer__block_primary">
            <img className="footer__socialMediasIgn" src={imageIGN} />
            <img className="footer__socialMediasFacebook" src={imageFacebook} />
            <img className="footer__socialMediasYoutube" src={imageYoutube} />
            <img className="footer__socialMediasX" src={imageX} />
          </div>
        </div>
        <div className="footer__block_secondary">
          <p className="footer__block_paragraph">Termos de uso</p>
          <p className="footer__block_paragraph">Política de privacidade</p>
        </div>
        <p className="footer__baseboard">
          ©2024. Time 1. Todos os direitos reservados
        </p>
      </section>
    </>
  );
}

export default Footer;
