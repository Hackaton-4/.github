import logo from './images/diaDeXepa.png';

function App() {
  return (
    <>
      <section className="homePage">
        <div className="homePage__block">
          <div className="home__logo">
            <img src={logo} className="home__image_logo" alt="logo" />
          </div>
            <h1 className="homePage__paragraph">Conectamos feirantes que vendem cestas de produtos frescos e saudáveis a usuários interessados em economizar. </h1>
            <button className='homePage__button_feirante'>Sou feirante</button>
            <button className='homePage__button_cliente'>Encontrar xepas próximas a mim</button>
            <h1 className="homePage__title">Diga adeus ao desperdício de alimentos</h1>
        </div> 
      </section>
    </>
  );
}

export default App;