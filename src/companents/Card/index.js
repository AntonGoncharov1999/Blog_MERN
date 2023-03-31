import style from './Card.module.scss'

function Card(props) {
    console.log(props);
    return (
        <div className={style.card}>
            <div className={style.favorit}>
                <img height={18} width={18} src="/img/bookmark.svg" alt='unlike' />
            </div>
            <img width={133} height={157} src={props.imageUrl} alt='изображение товара' />
            <h5>{props.title}</h5>
            <div className={style.cardBottom}>
                <div className={style.cardBottomTop}>
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <button className={style.button} onClick={() => { alert('123') }}>
                    <img width={11} height={11} src="/img/plus.svg" />
                </button>
            </div>
        </div>
    );
}

export default Card; 
