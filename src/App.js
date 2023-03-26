function App() {
  return (
    <div className="wrapper">
      <header>
        <div className='headerLeft'>
          <img width={40} height={40} src="/img/logo.png" />
          <div className='headerInfo'>
            <h3>Netruner's team</h3>
            <p>лучшее издательство манги</p>
          </div>
        </div>
        <div className='headerRight'>
          <ul>
            <img width={18} height={18} src="/img/cart.svg" />
            <span>1205 руб.</span>
          </ul>
          <ul>
            <img width={18} height={18} src="/img/person.svg" />
          </ul>
        </div>
      </header>
      <div className='content'>
        <h1>Манга</h1>
        <div className='card'>
          <img width={133} height={157} src="/img//manga/tokyo _evengers_1.webp" />
          <p>Токийские мстители. Том 1.</p>
          <div className='cardBottom'>
            <div className='cardBottomTop'>
              <span>Цена:</span>
              <b>1 119 руб.</b>
            </div>
            <button>
              <img width={11} height={11} src="/img/plus.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
