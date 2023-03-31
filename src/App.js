import React from 'react'
import Card from './companents/Card';
import Header from './companents/Header';
import Driwer from './companents/Driwer';

const arr = [
  { title: 'Токийские мстители. Том 1.', price: '990', imageUrl: '/img//manga/tokyo _evengers_1.webp' },
  { title: 'Токийские мстители. Том 2.', price: '990', imageUrl: '/img//manga/tokyo _evengers_2.webp' },
  { title: 'Токийские мстители. Том 3.', price: '1119', imageUrl: '/img//manga/tokyo _evengers_3.webp' },
  { title: 'Токийские мстители. Том 4.', price: '1119', imageUrl: '/img//manga/tokyo _evengers_4.webp' },
  { title: 'Токийские мстители. Том 5.', price: '1119', imageUrl: '/img//manga/tokyo _evengers_5.webp' },
  { title: 'Токийские мстители. Том 6.', price: '1119', imageUrl: '/img//manga/tokyo _evengers_6.webp' },
  { title: 'Токийские мстители. Том 7.', price: '1119', imageUrl: '/img//manga/tokyo _evengers_7.webp' },
  { title: 'Токийские мстители. Том 8.', price: '1119', imageUrl: '/img//manga/tokyo _evengers_8.webp' }
]

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
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
          {arr.map((obj) => (
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
