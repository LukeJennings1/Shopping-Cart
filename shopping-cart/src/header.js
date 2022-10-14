import logo from './assets/icons8-compass-east-100.png';
import basketIcon from './assets/basket.png';
import storePage from './store';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import Modal from './modal'
import {BasketNum} from './RouteSwitch'

function Header() {

const [mouseEnter, setMouseEnter] = useState(false)
const [itemNum, SetItemNum] = useContext(BasketNum)


    function Enter(e){
        setMouseEnter(true)
    }

    return (
        <>
    {mouseEnter && <Modal closeModal = {setMouseEnter}/>}

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
                <Link to={'/store'} className='store'>
                <button id = 'store-button' onMouseEnter={(e) => {Enter(e)}} onClick = {() => { setMouseEnter(false)} }> Store</button> 
                </Link>
                <Link to={'/Basket'}>
                <input type='image' className='shoppingBasketIcon' src={basketIcon}></input>
                </Link>
                <div id = 'basket-number-value'>{itemNum}</div>
                

              
            </div>

        </div>
        </>
    )
}

export default Header;