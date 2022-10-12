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
import binIcon from './assets/bin.png'
import jacket1 from './assets/jacket1.png'
import jacket2 from './assets/jacket22.png'
import jacket3 from './assets/jacket3.png'
import jacket4 from './assets/jacket4.png'
import top1 from './assets/top1.png'
import top2 from './assets/top2.png'
import top3 from './assets/top3.png'
import top4 from './assets/top4.png'
import shirt1 from './assets/shirt1.png'
import shirt2 from './assets/shirt22.png'
import shirt3 from './assets/shirt3.png'
import shirt4 from './assets/shirt4.png'
import bottom1 from './assets/bottom1.png'
import bottom2 from './assets/bottom2.png'
import bottom3 from './assets/bottom3.png'
import bottom4 from './assets/bottom4.png'
import knitwear1 from './assets/knit1.png'
import knitwear2 from './assets/knit2.png'
import knitwear3 from './assets/knit3.png'
import knitwear4 from './assets/knit4.png'
import addtobasket from './assets/addtobasket.png'




function Store() {

const [importedValue, setImportedValue] = useContext(MakeContext)

const [itemQuantity, setItemQuantity] = useState(1)
const [id, setId] = useState(0)

let itemNum1 = {
item: 'Point East PeaCoat',
price: '£' + 360.00,
quantity: itemQuantity,
id: 0,
button: (index) => {
    return (
        <input type='image' src={binIcon} className = 'itemBinIcon' onClick={() => {
            const removeFromArray = importedValue.slice(index)
            setImportedValue(removeFromArray)
        }}></input>
    )
}
}
// its deleting its own array value and all others above it
// when we add the index we are essentially saying to slice anything from the index number upwards (from,to)
let itemNum2 = {
    item: 'Pioneers Jacket',
    price: '£' + 125.00,
    quantity: itemQuantity,
    id: 1,
    button: (index) => {
        return (
            <input type='image' src={binIcon} className = 'itemBinIcon' onClick={() => {
                const removeFromArray = importedValue.slice(index)
                setImportedValue(removeFromArray)
            }}></input>
        )
    }
    }
    let itemNum3 = {
        item: 'Bowling Jacket',
        price: '£' + 120.00,
        quantity: itemQuantity,
        id: 2,
        button: (index) => {
            return (
                <input type='image' src={binIcon} className = 'itemBinIcon' onClick={() => {
                    const removeFromArray = importedValue.slice(index)
                    setImportedValue(removeFromArray)
                }}></input>
            )
        }
        }
// let itemNum2 = {item: 'T-Shirt', price: '£' + 56.76, id: 2}

function updateImportedValue(input) {
    var index = importedValue.map(importedValue => importedValue.item).indexOf(input.item);
    if (index < 0) {
    return (
        setImportedValue([...importedValue, input])
    )
    }
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
<Header />

<div className='StoreWrapper'>

    {/* <div className='itemWrappermain'>
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

    </div> */}
    
    <div className='itemsWrapper'>
        <div className='Jackets'>
            <div className='individual-item'>Point East PeaCoat
                <img className = 'individual-item-image' src={jacket1}></img>
                <div className='lower-item-row'>£360.00 <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum1)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>
            </div>
            <div className='individual-item'>Pioneers Jacket
                <img className = 'individual-item-image' src={jacket2}></img>
                <div className='lower-item-row'>£125.00 <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum2)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>
            </div> 
            <div className='individual-item'>Bowling Jacket
                <img className = 'individual-item-image' src={jacket3}></img>
                <div className='lower-item-row'>£120.00 <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum3)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>
            </div>
            <div className='individual-item'>Shooting Jacket
                <img className = 'individual-item-image' src={jacket4}></img>
                <div className='lower-item-row'>£185.00 <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum1)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>
            </div>
        </div>

        <div className='Tops'>
            <div className='individual-item'>Elder Henley T-Shirt
                <img className = 'individual-item-image' src={top1}></img>
                <div className='lower-item-row'>£95.00 <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum1)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>

            </div>
            <div className='individual-item'>Old Man Dudley T-Shirt
                <img className = 'individual-item-image' src={top2}></img>
                <div className='lower-item-row'>£65.00 <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum1)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>
            </div>
            <div className='individual-item'>Everyday Miner T-Shirt
                <img className = 'individual-item-image' src={top3}></img>
                <div className='lower-item-row'>£45.00 <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum1)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>
            </div>
            <div className='individual-item'>Grandpa T-Shirt
                <img className = 'individual-item-image' src={top4}></img>
                <div className='lower-item-row'>£55.00 <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum1)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>
            </div>
        </div>

        <div className='Shirts'>
            <div className='individual-item'>Dutch Casual Shirt 
                <img className = 'individual-item-image' src={shirt1}></img>
                <div className='lower-item-row'>£110.00 <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum1)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>
            </div>
            <div className='individual-item'>Lumberjack Shirt
                <img className = 'individual-item-image' src={shirt2}></img>
                <div className='lower-item-row'>£110.00 <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum1)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>
            </div>
            <div className='individual-item'>Cotton Winter Shirt 
                <img className = 'individual-item-image' src={shirt3}></img>
                <div className='lower-item-row'>£140.00 <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum1)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>
            </div>
            <div className='individual-item'>Casual Open Shirt
                <img className = 'individual-item-image' src={shirt4}></img>
                <div className='lower-item-row'>£110.00 <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum1)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>
            </div>
        </div>

        <div className='Bottoms'>
            <div className='individual-item'>Frontier Jeans
                <img className = 'individual-item-image' src={bottom1}></img>
                <div className='lower-item-row'>£130.00 <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum1)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>
            </div>
            <div className='individual-item'>Corduroy Bottoms
                <img className = 'individual-item-image' src={bottom2}></img>
                <div className='lower-item-row'>£130.00 <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum1)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>
            </div>
            <div className='individual-item'>Silky Adventurers Jeans
                <img className = 'individual-item-image' src={bottom3}></img>
                <div className='lower-item-row'>£110.00 <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum1)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>
            </div>
            <div className='individual-item'>Pioneer Jeans
                <img className = 'individual-item-image' src={bottom4}></img>
                <div className='lower-item-row'>£175.00 <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum1)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>
            </div>
        </div>

        <div className='Knitwear'>
            <div className='individual-item'>Patched Cardigan
                <img className = 'individual-item-image' src={knitwear1}></img>
                <div className='lower-item-row'>£150.00 <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum1)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>
            </div>
            <div className='individual-item'>Knitted Cardigan
                <img className = 'individual-item-image' src={knitwear2}></img>
                <div className='lower-item-row'>£160.00 <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum1)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>
            </div>
            <div className='individual-item'>Fleeced Top
                <img className = 'individual-item-image' src={knitwear3}></img>
                <div className='lower-item-row'>£125.00 <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum1)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>
            </div>
            <div className='individual-item'>Varsity Top
                <img className = 'individual-item-image' src={knitwear4}></img>
                <div className='lower-item-row'>£125.00 <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum1)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>
            </div>
        </div>
    </div>
</div>
</>
 )
}

export default Store;