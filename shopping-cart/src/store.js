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
import Sizedropdownmenu from './sizedropdown'
import Footer from './footer'
import { BasketNum } from './RouteSwitch'



function Store() {

const [importedValue, setImportedValue] = useContext(MakeContext)

const [itemQuantity, setItemQuantity] = useState(1)
const [size, setSize] = useState()


const [itemNum, SetItemNum] = useContext(BasketNum) // global context to set the basket value

    let itemNum1 = {
    item: 'Point East PeaCoat',
    price: 360.00,
    baseprice: 360.00,
    id: 0,
    size: size,
    img: jacket1,
    quantity: itemQuantity,
}
let itemNum2 = {
    item: 'Pioneers Jacket',
    price: 125.00,
    quantity: itemQuantity,
    baseprice: 125.00,
    id: 1,
    size: size,
    img: jacket2
}
let itemNum3 = {
    item: 'Bowling Jacket',
    price: 120.00,
    quantity: itemQuantity,
    id: 3,
    size: size,
    img: jacket3

}
let itemNum4 = {
    item: 'Shooting Jacket',
    price: 185.00,
    quantity: itemQuantity,
    id: 4,
    size: size,
    img: jacket4
}
let itemNum5 = {
    item: 'Elder Henley T-Shirt',
    price: 95.00,
    quantity: itemQuantity,
    id: 5,
    size: size,
    img: top1
}
let itemNum6 = {
    item: 'Old Man Dudley T-Shirt',
    price: 65.00,
    quantity: itemQuantity,
    id: 6,
    size: size,
    img: top2
}
let itemNum7 = {
    item: 'Everyday Miner T-Shirt',
    price: 45.00,
    quantity: itemQuantity,
    id: 7,
    size: size,
    img: top3

}
let itemNum8 = {
    item: 'Grandpa T-Shirt',
    price: 55.00,
    quantity: itemQuantity,
    id: 8,
    size: size,
    img: top4

}
let itemNum9 = {
    item: 'Dutch Casual Shirt',
    price: 110.00,
    quantity: itemQuantity,
    id: 9,
    size: size,
    img: shirt1

}
let itemNum10 = {
    item: 'Lumberjack Shirt',
    price: 110.00,
    quantity: itemQuantity,
    id: 10,
    size: size,
    img: shirt2

}
let itemNum11 = {
    item: 'Cotton Winter Shirt',
    price: 140.00,
    quantity: itemQuantity,
    id: 11,
    size: size,
    img: shirt3

}
let itemNum12 = {
    item: 'Casual Open Shirt',
    price: 110.00,
    quantity: itemQuantity,
    id: 12,
    size: size,
    img: shirt4

}
let itemNum13 = {
    item: 'Frontier Jeans',
    price: 130.00,
    quantity: itemQuantity,
    id: 13,
    size: size,
    img: bottom1

}
let itemNum14 = {
    item: 'Corduroy Bottoms',
    price: 130.00,
    quantity: itemQuantity,
    id: 14,
    size: size,
    img: bottom2

}
let itemNum15 = {
    item: 'Silky Adventurers Jeans',
    price: 110.00,
    quantity: itemQuantity,
    id: 15,
    size: size,
    img: bottom3

}
let itemNum16 = {
    item: 'Pioneer Jeans',
    price: 175.00,
    quantity: itemQuantity,
    id: 16,
    size: size,
    img: bottom4

}
let itemNum17 = {
    item: 'Patched Cardigan',
    price: 150.00,
    quantity: itemQuantity,
    id: 17,
    size: size,
    img: knitwear1

}
let itemNum18 = {
    item: 'Knitted Cardigan',
    price: 160.00,
    quantity: itemQuantity,
    id: 18,
    size: size,
    img: knitwear2

}
let itemNum19 = {
    item: 'Fleeced Top',
    price: 125.00,
    quantity: itemQuantity,
    id: 19,
    size: size,
    img: knitwear3

}
let itemNum20 = {
    item: 'Varsity Top',
    price: 125.00,
    quantity: itemQuantity,
    id: 20,
    size: size,
    img: knitwear4

}
function updateImportedValue(input) {
    var index = importedValue.map(importedValue => importedValue.item).indexOf(input.item);
    if (index < 0) {
    return (
        setImportedValue([...importedValue, input]),
        SetItemNum(importedValue.length + 1)

    )
    }
}

 return (
<>
<Header />

<div className='StoreWrapper'>
<h1 id = 'all-items-header'> - Shop All - </h1>

    <div className='itemsWrapper'>
        <div className='Jackets'>
            <div className='individual-item'>Point East PeaCoat
                <img className = 'individual-item-image' src={jacket1}></img>
                <div className='lower-item-row'>
                <Sizedropdownmenu size = { setSize }/>

                         £360.00
                <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum1)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>
            </div>
            <div className='individual-item'>Pioneers Jacket
                <img className = 'individual-item-image' src={jacket2}></img>
                <div className='lower-item-row'>
                <Sizedropdownmenu size = { setSize }/>

                          £125.00
                 <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum2)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>
            </div> 
            <div className='individual-item'>Bowling Jacket
                <img className = 'individual-item-image' src={jacket3}></img>
                <div className='lower-item-row'>               
                <Sizedropdownmenu size = { setSize }/>
                £120.00
                <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum3)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>
            </div>
            <div className='individual-item'>Shooting Jacket
                <img className = 'individual-item-image' src={jacket4}></img>
                <div className='lower-item-row'>
                <Sizedropdownmenu size = { setSize }/>
                £185.00
                <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum4)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>
            </div>
        </div>
        <div className='Tops'>
            <div className='individual-item'>Elder Henley T-Shirt
                <img className = 'individual-item-image' src={top1}></img>
                <div className='lower-item-row'>
                <Sizedropdownmenu size = { setSize }/>
                £95.00
                <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum5)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>

            </div>
            <div className='individual-item'>Old Man Dudley T-Shirt
                <img className = 'individual-item-image' src={top2}></img>
                <div className='lower-item-row'>
                <Sizedropdownmenu size = { setSize }/>
                £65.00 
                <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum6)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>
            </div>
            <div className='individual-item'>Everyday Miner T-Shirt
                <img className = 'individual-item-image' src={top3}></img>
                <div className='lower-item-row'>
                <Sizedropdownmenu size = { setSize }/>
                £45.00
                <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum7)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>
            </div>
            <div className='individual-item'>Grandpa T-Shirt
                <img className = 'individual-item-image' src={top4}></img>
                <div className='lower-item-row'>
                <Sizedropdownmenu size = { setSize }/>
                £55.00
                <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum8)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>
            </div>
        </div>

        <div className='Shirts'>
            <div className='individual-item'>Dutch Casual Shirt 
                <img className = 'individual-item-image' src={shirt1}></img>
                <div className='lower-item-row'>
                <Sizedropdownmenu size = { setSize }/>
                £110.00
                <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum9)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>
            </div>
            <div className='individual-item'>Lumberjack Shirt
                <img className = 'individual-item-image' src={shirt2}></img>
                <div className='lower-item-row'>
                <Sizedropdownmenu size = { setSize }/>
                £110.00 
                <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum10)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>
            </div>
            <div className='individual-item'>Cotton Winter Shirt 
                <img className = 'individual-item-image' src={shirt3}></img>
                <div className='lower-item-row'>
                <Sizedropdownmenu size = { setSize }/>
                £140.00
                <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum11)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>
            </div>
            <div className='individual-item'>Casual Open Shirt
                <img className = 'individual-item-image' src={shirt4}></img>
                <div className='lower-item-row'>
                <Sizedropdownmenu size = { setSize }/>
                £110.00
                <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum12)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>
            </div>
        </div>

        <div className='Bottoms'>
            <div className='individual-item'>Frontier Jeans
                <img className = 'individual-item-image' src={bottom1}></img>
                <div className='lower-item-row'>
                <Sizedropdownmenu size = { setSize }/>
                £130.00 
                <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum13)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>
            </div>
            <div className='individual-item'>Corduroy Bottoms
                <img className = 'individual-item-image' src={bottom2}></img>
                <div className='lower-item-row'>
                <Sizedropdownmenu size = { setSize }/>
                £130.00 
                <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum14)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>
            </div>
            <div className='individual-item'>Silky Adventurers Jeans
                <img className = 'individual-item-image' src={bottom3}></img>
                <div className='lower-item-row'>
                <Sizedropdownmenu size = { setSize }/>
                £110.00 
                <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum15)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>
            </div>
            <div className='individual-item'>Pioneer Jeans
                <img className = 'individual-item-image' src={bottom4}></img>
                <div className='lower-item-row'>
                <Sizedropdownmenu size = { setSize }/>
                £175.00
                <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum16)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>
            </div>
        </div>

        <div className='Knitwear'>
            <div className='individual-item'>Patched Cardigan
                <img className = 'individual-item-image' src={knitwear1}></img>
                <div className='lower-item-row'>
                <Sizedropdownmenu size = { setSize }/>
                £150.00
                <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum17)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>
            </div>
            <div className='individual-item'>Knitted Cardigan
                <img className = 'individual-item-image' src={knitwear2}></img>
                <div className='lower-item-row'>
                <Sizedropdownmenu size = { setSize }/>
                £160.00 
                <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum18)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>
            </div>
            <div className='individual-item'>Fleeced Top
                <img className = 'individual-item-image' src={knitwear3}></img>
                <div className='lower-item-row'>
                <Sizedropdownmenu size = { setSize }/>
                £125.00 
                <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum19)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>
            </div>
            <div className='individual-item'>Varsity Top
                <img className = 'individual-item-image' src={knitwear4}></img>
                <div className='lower-item-row'>
                <Sizedropdownmenu size = { setSize }/>
                £125.00
                <button className='add-to-basket-icon' onClick = {() => {updateImportedValue(itemNum20)}} ><img src={addtobasket} className='add-to-basket-icon'></img></button></div>
            </div>
        </div>
    </div>
</div>
    <Footer />
</>
 )
 
}

export default Store;