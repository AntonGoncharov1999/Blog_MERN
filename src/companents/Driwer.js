function Driwer() {
    return (
        <div style={{ display: 'none' }} className='overlay'>
            <div className='driwer'>
                <h2>Корзина <img className='removeBtn' width={30} height={30} src='/img/close.svg' alt=''></img></h2>
                <div className='items'>
                    <div className='cartItem'>
                        <div style={{ backgroundImage: "url('/img/manga/tokyo _evengers_1.webp')" }} className='cartImage'></div>
                        <div>
                            <p>Токийские мстители. Том 1</p>
                            <b>1 119 руб</b>
                        </div>
                        <img className='removeBtn' width={30} height={30} src='/img/close.svg' alt=''></img>
                    </div>
                    <div className='cartItem'>
                        <div style={{ backgroundImage: "url('/img/manga/tokyo _evengers_2.webp')" }} className='cartImage'></div>
                        <div>
                            <p>Токийские мстители. Том 2</p>
                            <b>1 119 руб</b>
                        </div>
                        <img className='removeBtn' width={30} height={30} src='/img/close.svg' alt=''></img>
                    </div>
                </div>
                <div className='cardTotalBlock'>
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>2349,9 руб.</b>
                        </li>
                        <li>
                            <span>Налог: 5%</span>
                            <div></div>
                            <b>55,95 руб.</b>
                        </li>
                    </ul>
                    <button> Оформить заказ <img height={18} width={18} src='/img/arrow.svg' alt='' /> </button>
                </div>
            </div>
        </div>
    );
}

export default Driwer;