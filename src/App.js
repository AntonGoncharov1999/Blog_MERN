function App() {
  return (
    <div className="wrapper">
      <div className='overlay'>
        <div className='driwer'>
          <h2>Корзина</h2>
          <div className='cartItem'>
            <img width={70} height={80} src='/img/manga/tokyo _evengers_1.webp' alt='' />
            <div>
              <p>Токийские мстители. Том 1</p>
              <b>1 119 руб</b>
            </div>
            <img className='removeBtn' width={30} height={30} src='/img/close.svg' alt=''></img>
          </div>
        </div>
      </div>
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
        <div className='content-top'>
          <h1>Манга</h1>
          <div className='searth-block'>
            <img width={18} height={18} src="/img/loop.svg" alt="searth" />
            <input placeholder='Поиск...' />
          </div>
        </div>
        <div className='manga'>
          <div className='card'>
            <div className='favorit'>
              <img height={18} width={18} src="/img/bookmark.svg" alt='unlike' />
            </div>
            <img width={133} height={157} src="/img//manga/tokyo _evengers_1.webp" />
            <h5>Токийские мстители. Том 1.</h5>
            <div className='cardBottom'>
              <div className='cardBottomTop'>
                <span>Цена:</span>
                <b>1 119 руб.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src="/img/plus.svg" />
              </button>
            </div>
          </div>
          <div className='card'>
            <img width={133} height={157} src="/img//manga/tokyo _evengers_2.webp" />
            <h5>Токийские мстители. Том 2.</h5>
            <div className='cardBottom'>
              <div className='cardBottomTop'>
                <span>Цена:</span>
                <b>1 119 руб.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src="/img/plus.svg" />
              </button>
            </div>
          </div>
          <div className='card'>
            <img width={133} height={157} src="/img//manga/tokyo _evengers_3.webp" />
            <h5>Токийские мстители. Том 3.</h5>
            <div className='cardBottom'>
              <div className='cardBottomTop'>
                <span>Цена:</span>
                <b>1 119 руб.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src="/img/plus.svg" />
              </button>
            </div>
          </div>
          <div className='card'>
            <img width={133} height={157} src="/img//manga/tokyo _evengers_4.webp" />
            <h5>Токийские мстители. Том 4.</h5>
            <div className='cardBottom'>
              <div className='cardBottomTop'>
                <span>Цена:</span>
                <b>1 119 руб.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src="/img/plus.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
