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
    const [itemQuantity, setItemQuantity] = useState(1)
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);


    // const [item1, setImportedValue] = useState(importedItem)
    console.log(importedItem)




    const resetArray = (element) => {
    
        setValue(importedItem.filter(item => item.id != element.id))
        console.log(importedItem.filter(item => item.id != element.id))
        SetItemNum(importedItem.length - 1)
        // console.log(...importedItem)
    }
    const subtract = (element) => {

        var index = importedItem.map(importedItem => importedItem.id).indexOf(element.id);
        return (
        importedItem[index].quantity = importedItem[index].quantity - 1,
        forceUpdate()
        )
    } 
    const add = (element) => {
        var index = importedItem.map(importedItem => importedItem.id).indexOf(element.id);
        // console.log(importedItem[index].quantity = importedItem[index].quantity + 1)
        
        return (
            importedItem[index].quantity = importedItem[index].quantity + 1,
            forceUpdate()

        )
    }   
   
    return (  

    <>
    <Header />

        <div className='ShoppingCartBackground'>
            
            <fieldset className='ShoppingCartWrapper'>
                {/* <legend>    Shopping Basket    </legend> */}

            <div className='itemCartWrapper'> 
                {importedItem.map((elements, index) => {
                return (
                <div key={index}>

                <div className='item-details'>
                    <img className = 'item-photo' src={elements.img}></img>
                        <div className='item-spacer'></div>
                        <div className='item-wrapper'>
                            <div>Name - {elements.item}</div>
                            <div>Price - {elements.price}</div>
                                <div className='item-quantity-wrapper'>
                                <div>Quantity - 
                                <button onClick={() => {subtract(elements)}} >-</button>
                                     {elements.quantity}
                                <button onClick={() => {add(elements)}} >+</button>

                                
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
            
           </div>
           <Footer />
    </>
    )
        
}


export default ShoppingCart;