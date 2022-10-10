import logo from './assets/icons8-compass-east-100.png';
import basketIcon from './assets/basket.png';
import storePage from './store';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Header() {

const [mouseEnter, setMouseEnter] = useState(false)

    function Enter(e){
        console.log(e.target)
        setMouseEnter(true)
        e.target.style.color = 'blue';
    }
    function Exit(e){
        console.log(mouseEnter)
        setMouseEnter(false)
        e.target.style.color = 'red';

    }



    return (
        <div className="HeaderWrapper">
            <div id='left-side-wrapper'>
                <div id="websiteTitle">Point East Clothing</div>
                </div>

        <div className='middleHeaderWrapper'>
                <Link to = {'/'}>
               <img id="logo"  src={logo}></img>
                </Link>
                </div>

            <div className="linkWrapper">
                <Link to={'/store'}>
                <button id = 'store-button' onMouseEnter={(e) => {Enter(e)}} onMouseLeave ={(e) => {Exit(e)}}>Store</button> 
                </Link>
                <Link to={'/Basket'}>
                <input type='image' className='shoppingBasketIcon' src={basketIcon}></input> 
                </Link>

              
            </div>
        </div>
    )
}

export default Header;