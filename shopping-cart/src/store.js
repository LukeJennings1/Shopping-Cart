import {Link} from 'react-router-dom'
import logo from './assets/icons8-compass-east-100.png'
import basketIcon from './assets/basket.png'
import storeBackground from './assets/pexels-pixabay-220755.jpg'
import item1 from './assets/item1.jpg'
import ShoppingCart from './shoppingCart'
import Header from  './header'
import RouteSwitch from './RouteSwitch'
import { useState, createContext, useContext } from "react";
import { ContextMake } from './RouteSwitch'
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function Store() {

const [importedValue, setImportedValue] = useContext(ContextMake)

const updateImportedValue = () => {
    setImportedValue('Item: hose')
}


 return (
    <>

     <div className='StoreWrapper'>
                

        <Header />
<div className='itemWrappermain'>
        <div className='item1Wrapper'>
            
            <img id = 'item1' src={item1}></img>
        <div className='itemDetailsWrapper'>
    {/* <div className='importedValue'>{importedValue}</div> */}

            <div className='itemTitle'>Item Name</div>
            <div id = 'item1Details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con.</div>
            <button className='addToCart' onClick = {() => setImportedValue('please work')}>Add To Cart</button>

        </div>
        </div>

</div>
    </div>
    </>
 )
}

export default Store;