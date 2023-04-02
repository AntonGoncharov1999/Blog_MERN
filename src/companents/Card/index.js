import React from 'react'
import style from './Card.module.scss'


function Card({ title, imageUrl, price, onClickFavorite, onClickAdd }) {
    const [isAdded, setIsAdded] = React.useState(false);

    const handleClickPlus = () => {
        onClickAdd({ title, imageUrl, price });
        setIsAdded(!isAdded);
    }

    return (
        <div className={style.card}>
            <div className={style.favorit}>
                <img height={18} width={18} src="/img/bookmark.svg" alt='unlike' onClick={onClickFavorite} />
            </div>
            <img width={133} height={157} src={imageUrl} alt='изображение товара' />
            <h5>{title}</h5>
            <div className={style.cardBottom}>
                <div className={style.cardBottomTop}>
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img onClick={handleClickPlus} className={style.button} width={30} height={30} src={isAdded ? '/img/check.svg' : '/img/plus.svg'} />
            </div>
        </div>
    );
}

export default Card; 
