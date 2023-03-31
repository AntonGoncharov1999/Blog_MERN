import React from 'react'
import Card from './companents/Card';
import Header from './companents/Header';
import Driwer from './companents/Driwer';



function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [mangaItems, setMangaItems] = React.useState([]);

  fetch('https://6426f89c556bad2a5b5c9fa3.mockapi.io/manga').then((res) => {
    return res.json();
  }).then((json) => {
    setMangaItems(json)
  });

  return (

    <div className="wrapper">
      {cartOpened && <Driwer onClose={() => { setCartOpened(false) }} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className='content'>
        <div className='content-top'>
          <h1>Манга</h1>
          <div className='searth-block'>
            <img width={18} height={18} src="/img/loop.svg" alt="searth" />
            <input placeholder='Поиск...' />
          </div>
        </div>
        <div className='manga'>
          {mangaItems.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onClickAdd={() => console.log('Добавили в корзину')}
              onClickFavorite={() => console.log('Добавили в закладки')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
