import style from './Driwer.module.scss'

function Driwer({ onClose, items = [], onRemove }) {
    return (
        <div className={style.overlay}>
            <div className={style.driwer}>
                <h2>Корзина <img className={style.removeBtn} onClick={onClose} width={30} height={30} src='/img/close.svg' alt=''></img></h2>
                <div className={style.items}>
                    {items.map((obj) => (
                        <div className={style.cartItem}>
                            <div style={{ backgroundImage: `url('${obj.imageUrl}')` }} className={style.cartImage}></div>
                            <div>
                                <p>{obj.title}</p>
                                <b>{obj.price} руб</b>
                            </div>
                            <img onClick={() => onRemove(obj.id)} className={style.removeBtn} width={30} height={30} src='/img/close.svg' alt='' />
                        </div>
                    ))}
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