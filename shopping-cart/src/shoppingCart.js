import {Link} from 'react-router-dom'
import logo from './assets/icons8-compass-east-100.png'
import Header from  './header'
import Cartlogic from './cartlogic'
import { useState, createContext, useContext, useEffect, useReducer } from "react";
import { MakeContext } from './RouteSwitch'
import item1 from './assets/item1.jpg'
import binIcon from './assets/bin.png'
import Footer from './footer'
import { BasketNum } from './RouteSwitch'




function ShoppingCart() {

    const [importedItem, setValue] = useContext(MakeContext)
    const [itemNum, SetItemNum] = useContext(BasketNum) // global context to set the basket value
    // const [itemQuantity, setItemQuantity] = useState(1)
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    const [sumPrice, setTotal] = useState(0)
    const [priceUpdate, setPriceUpdate] = useState()


    const resetArray = (element) => {
    
        setValue(importedItem.filter(item => item.id != element.id))
        SetItemNum(importedItem.length - 1)
    }
    const subtract = (element) => {
        let index = importedItem.map(importedItem => importedItem.id).indexOf(element.id);

        if (importedItem[index].quantity < 2){
            return null 
        } else {
        return (
        importedItem[index].quantity = importedItem[index].quantity - 1,
        importedItem[index].price = importedItem[index].baseprice * importedItem[index].quantity,
        setPriceUpdate(importedItem[index].baseprice * importedItem[index].quantity),
        forceUpdate()
        )
        }
    } 
    const add = (element) => {
        let index = importedItem.map(importedItem => importedItem.id).indexOf(element.id);

        return (
            importedItem[index].quantity = importedItem[index].quantity + 1,
            importedItem[index].price = importedItem[index].baseprice * importedItem[index].quantity,
            setPriceUpdate(importedItem[index].baseprice * importedItem[index].quantity),
            forceUpdate()
        )
    }   

    const price = (element) => {
        if (importedItem.length === 0){
            return (
                setTotal(0)
            )
        }
        else {  
            const arrayofprices = importedItem.map(importedItem => importedItem.price)
            const total = arrayofprices.reduce((x,y) =>  x + y)
            return (      
                setTotal(total)
            )
        }
    }
useEffect(() => {
    price()
}, [importedItem, priceUpdate]) // this calls the price() function when it detects a change to the item array. so, if an item has been added or remove
// it will call the price() function which adds together the price field in each item object. This updates the price. 
 
    
    return (  

    <>
    <Header />
        <div className='ShoppingCartBackground'>
            
            <fieldset className='ShoppingCartWrapper'>
                <legend>    Shopping Cart  </legend>

            <div className='itemCartWrapper'> 
                {importedItem.map((elements, index) => {
                return (
                <div key={index}>

                <div className='item-details'>
                    <img className = 'item-photo' src={elements.img}></img>
                        <div className='item-spacer'></div>
                        <div className='item-wrapper'>
                            <div>Name - {elements.item}</div>
                            <div>Price - £{elements.price}.00 </div>
                                <div className='item-quantity-wrapper'>
                                <div id = 'quantity'>Quantity - 
                                <button className = 'add-subtract-buttons' onClick={() => {subtract(elements)}} >-</button>
                                     {elements.quantity}
                                <button className = 'add-subtract-buttons' onClick={() => {add(elements)}} >+</button>

                                
                                </div>
                                </div>
                            <div>Size - {elements.size}</div>
                        </div>

                    <div className='item-spacer'></div>

                    <button id='remove-button' onClick={() => {resetArray(elements)}}>
                    <img id = 'remove-button-icon' src={binIcon}></img>
                    </button>
                </div>
                    
            
            </div>

            )
        })}  </div>


            </fieldset>
            <div className='checkout-wrapper'>
            <div className='subtotal'>Subtotal: £{sumPrice}</div>
            <button id = 'checkout-button'>Checkout</button>
            </div>
           </div>
           <Footer />
    </>
    )
        
}


export default ShoppingCart;