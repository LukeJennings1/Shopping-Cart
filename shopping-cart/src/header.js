import logo from './assets/icons8-compass-east-100.png'
import basketIcon from './assets/basket.png'
import storePage from './store'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="HeaderWrapper">
            <div id='left-side-wrapper'>
                <div id="websiteTitle">Point East Clothing</div>
                </div>
        <div className='middleHeaderWrapper'>
        <Link to = {'/'}>
               <img id="logo" src={logo}></img>
           </Link>
    
                </div>
            <div className="linkWrapper">
                <Link to={'/store'}>
                <button>Store</button> 
                </Link>
                <Link to={'/Basket'}>
                <input type='image' className='shoppingBasketIcon' src={basketIcon}></input> 
                </Link>

              
            </div>
        </div>
    )
}

export default Header;