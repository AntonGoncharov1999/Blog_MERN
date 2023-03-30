function Card() {
    return (
        <div className='card'>
            <div className='favorit'>
                <img height={18} width={18} src="/img/bookmark.svg" alt='unlike' />
            </div>
            <img width={133} height={157} src="/img//manga/tokyo _evengers_1.webp" />
            <h5>Токийские мстители. Том 1.</h5>
            <div className='cardBottom'>
                <div className='cardBottomTop'>
                    <span>Цена:</span>
                    <b>1 119 руб.</b>
                </div>
                <button className='button'>
                    <img width={11} height={11} src="/img/plus.svg" />
                </button>
            </div>
        </div>
    );
}

export default Card; 
