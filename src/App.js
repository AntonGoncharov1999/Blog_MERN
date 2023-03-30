import Card from './companents/Card';
import Header from './companents/Header';
import Driwer from './companents/Driwer';

function App() {
  return (
    <div className="wrapper">
      <Driwer />
      <Header />
      <div className='content'>
        <div className='content-top'>
          <h1>Манга</h1>
          <div className='searth-block'>
            <img width={18} height={18} src="/img/loop.svg" alt="searth" />
            <input placeholder='Поиск...' />
          </div>
        </div>
        <div className='manga'>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
