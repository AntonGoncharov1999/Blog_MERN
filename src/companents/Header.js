function Header() {
    return (
        <header>
            <div className='headerLeft'>
                <img width={40} height={40} src="/img/logo.png" />
                <div className='headerInfo'>
                    <h3>Netruner's team</h3>
                    <p>лучшее издательство манги</p>
                </div>
            </div>
            <div className='headerRight'>
                <ul>
                    <img width={18} height={18} src="/img/cart.svg" />
                    <span>1205 руб.</span>
                </ul>
                <ul>
                    <img width={18} height={18} src="/img/person.svg" />
                </ul>
            </div>
        </header>
    );
}

export default Header;