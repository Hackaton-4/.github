function ChangeRegistration() {
  return (
    <>
      <section className="changeRegistration">
        <button className="changeRegistration__button">
          Já tenho o cadastro
        </button>

        <p className="changeRegistration__text">
          Informe seus dados para cadastrar a sua banca!
        </p>

        <p className="changeRegistration__text">Qual o nome da sua banca?</p>
        <label>
          <input className="changeRegistration__input" />
          <span className="" />
        </label>

        <p className="changeRegistration__text">CEP</p>
        <label>
          <input className="changeRegistration__input" />
          <span className="" />
        </label>

        <p className="changeRegistration__text">Estado</p>
        <label>
          <input className="changeRegistration__input" />
          <span className="" />
        </label>

        <p className="changeRegistration__text">Cidade</p>
        <label>
          <input className="changeRegistration__input" />
          <span className="" />
        </label>

        <p className="changeRegistration__text">Rua</p>
        <label>
          <input className="changeRegistration__input" />
          <span className="" />
        </label>

        <p className="changeRegistration__text">Bairro</p>
        <label>
          <input className="changeRegistration__input" />
          <span className="" />
        </label>

        <p className="changeRegistration__text">Número</p>
        <label>
          <input className="changeRegistration__input" />
          <span className="" />
        </label>

        <p className="changeRegistration__text">Complemento</p>
        <label>
          <input className="changeRegistration__input" />
          <span className="" />
        </label>

        <p className="changeRegistration__text">Telefone</p>
        <label>
          <input className="changeRegistration__input" />
          <span className="" />
        </label>

        <p className="changeRegistration__text">Whatssapp</p>
        <label>
          <input className="changeRegistration__input" />
          <span className="" />
        </label>

        <p className="changeRegistration__text">Valor da Sacola</p>
        <label>
          <input className="changeRegistration__input" />
          <span className="" />
        </label>

        <p className="changeRegistration__text">Imagem</p>
        <button className="changeRegistration__image_button">+</button>
        <span className="" />

        <div className="changeRegistration__block_buttons">
          <button className="changeRegistration__button_back">Voltar</button>
          <button className="changeRegistration__button_submit">
            Cadastrar
          </button>
        </div>
      </section>
    </>
  );
}

export default ChangeRegistration;
