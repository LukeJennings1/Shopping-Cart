import {Link} from 'react-router-dom'
import logo from './assets/icons8-compass-east-100.png'
import basketIcon from './assets/basket.png'
import storeBackground from './assets/pexels-pixabay-220755.jpg'
import item1 from './assets/item1.jpg'
import ShoppingCart from './shoppingCart'
import Header from  './header'
import RouteSwitch from './RouteSwitch'
import { useState, createContext, useContext, useEffect } from "react";
import { MakeContext } from './RouteSwitch'
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function Store() {

const [importedValue, setImportedValue] = useContext(MakeContext)
const [itemQuantity, setItemQuantity] = useState(1)
// const [id, setId] = useState(0)

let itemNum1 = {
item: 'Adventurers Cloak',
price: '£' + 143.99,
quantity: itemQuantity,
// id: id
}


// let itemNum2 = {item: 'T-Shirt', price: '£' + 56.76, id: 2}
console.log(importedValue)

function updateImportedValue() {
    // var index = importedValue.map(importedValue => importedValue.item).indexOf('Adventurers Cloak');
    // if (index < 0) {
    // return (
        setImportedValue([itemNum1])
  

}
const subtract = () => {
    if (itemQuantity > 1) {
    setItemQuantity(itemQuantity -1)
    }
}
const add = () => {
    setItemQuantity(itemQuantity +1)
}
 return (
    <>

     <div className='StoreWrapper'>
                
    
        <Header />
<div className='itemWrappermain'>
        <div className='item1Wrapper'>
            
            <img id = 'item1' src={item1}></img>
        <div className='itemDetailsWrapper'>

            <div className='itemTitle'>Item Name</div>
            <div id = 'item1Details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con.</div>
        <div className='amountButtons'>
            <button onClick={subtract}>-</button><div>{itemNum1.quantity}</div><button onClick={add}>+</button>
        </div>
            <button className='addToCart' onClick = {() => {updateImportedValue()}}>Add To Cart</button>

        </div>
        </div>

</div>
    </div>
    </>
 )
}

export default Store;