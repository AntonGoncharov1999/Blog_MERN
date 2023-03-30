function Card(props) {
    return (
        <div className='card'>
            <div className='favorit'>
                <img height={18} width={18} src="/img/bookmark.svg" alt='unlike' />
            </div>
            <img width={133} height={157} src={props.imageUrl} alt='изображение товара' />
            <h5>{props.title}</h5>
            <div className='cardBottom'>
                <div className='cardBottomTop'>
                    <span>Цена:</span>
                    <b>{props.prise} руб.</b>
                </div>
                <button className='button'>
                    <img width={11} height={11} src="/img/plus.svg" />
                </button>
            </div>
        </div>
    );
}

export default Card; 
