import React from 'react'
import Card from './companents/Card';
import Header from './companents/Header';
import Driwer from './companents/Driwer';
import axios from 'axios';



function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [searthValue, setSearthValue] = React.useState("");
  const [mangaItems, setMangaItems] = React.useState([]);

  const onChangeSearthInput = (event) => {
    setSearthValue(event.target.value)
  }

  React.useEffect(() => {
    axios.get('https://6426f89c556bad2a5b5c9fa3.mockapi.io/manga').then((res) => { setMangaItems(res.data) });
    axios.get('https://6426f89c556bad2a5b5c9fa3.mockapi.io/cart').then((res) => { setCartItems(res.data) });
  }, []);

  const onAddToCart = (cartItem) => {
    axios.post('https://6426f89c556bad2a5b5c9fa3.mockapi.io/cart', cartItem);
    setCartItems(prev => [...prev, cartItem])
  }

  const onRemoveCartItem = (id) => {
    axios.delete(`https://6426f89c556bad2a5b5c9fa3.mockapi.io/cart/${id}`);
    setCartItems(prev => [...prev.filter(item => item.id !== id)])
  }

  return (

    <div className="wrapper">
      {cartOpened && <Driwer items={cartItems} onClose={() => { setCartOpened(false) }} onRemove={onRemoveCartItem} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className='content'>
        <div className='content-top'>
          <h1>{searthValue ? `поиск по запросу:${searthValue}` : "Манга"}</h1>
          <div className='searth-block'>
            <img width={18} height={18} src="/img/loop.svg" alt="searth" />
            <input onChange={onChangeSearthInput} placeholder='Поиск...' value={searthValue} />
            {searthValue && <img onClick={() => { setSearthValue('') }} width={30} height={30} src='/img/close.svg' alt='' />}
          </div>
        </div>
        <div className='manga'>
          {mangaItems.filter((obj) => obj.title.toLowerCase().includes(searthValue.toLowerCase())).map((obj) => (
            <Card
              key={obj.title}
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onClickAdd={(cartItem) => onAddToCart(cartItem)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
