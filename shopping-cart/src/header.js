import logo from './assets/icons8-compass-east-100.png'

function Header() {
    return (
        <div className="HeaderWrapper">
            <div id='left-side-wrapper'>
                <div id="websiteTitle">Point East Clothing</div>
                </div>
        <div className='middleHeaderWrapper'>
                <img id="logo" src={logo}></img>
                </div>
            <div className="linkWrapper">
                <div>Shop</div>
                <div>Contact</div>
            </div>
        </div>
    )
}

export default Header;