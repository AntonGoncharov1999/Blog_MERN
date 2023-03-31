import style from './Driwer.module.scss'

function Driwer() {
    return (
        <div style={{ display: 'none' }} className={style.overlay}>
            <div className={style.driwer}>
                <h2>Корзина <img className={style.removeBtn} width={30} height={30} src='/img/close.svg' alt=''></img></h2>
                <div className={style.items}>
                    <div className={style.cartItem}>
                        <div style={{ backgroundImage: "url('/img/manga/tokyo _evengers_1.webp')" }} className={style.cartImage}></div>
                        <div>
                            <p>Токийские мстители. Том 1</p>
                            <b>1 119 руб</b>
                        </div>
                        <img className={style.removeBtn} width={30} height={30} src='/img/close.svg' alt=''></img>
                    </div>
                    <div className={style.cartItem}>
                        <div style={{ backgroundImage: "url('/img/manga/tokyo _evengers_2.webp')" }} className={style.cartImage}></div>
                        <div>
                            <p>Токийские мстители. Том 2</p>
                            <b>1 119 руб</b>
                        </div>
                        <img className={style.removeBtn} width={30} height={30} src='/img/close.svg' alt=''></img>
                    </div>
                </div>
                <div className={style.cardTotalBlock}>
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