import logo from './images/logo.png';

function App() {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <img src={logo} className="header__image_logo" alt="logo" />
        </div>
      </header>
    </>
  );
}

export default App;