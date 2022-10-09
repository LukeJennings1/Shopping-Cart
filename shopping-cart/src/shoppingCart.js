import {Link} from 'react-router-dom'
import logo from './assets/icons8-compass-east-100.png'
import Header from  './header'
import Cartlogic from './cartlogic'
import { useState, createContext, useContext, useEffect } from "react";
import { MakeContext } from './RouteSwitch'
import item1 from './assets/item1.jpg'
import binIcon from './assets/bin.png'




function ShoppingCart() {

    const [importedItem, setValue] = useContext(MakeContext)
    // const [item1, setImportedValue] = useState(importedItem)

// useEffect(() => {setImportedValue(importedValue)}, [item1])

    return (  
    <>
    <Header />

        <div className='ShoppingCartBackground'>
            
            <fieldset className='ShoppingCartWrapper'>
                <legend>    Shopping Basket    </legend>

            <div className='itemCartWrapper'> 
                {importedItem.map((elements, index) => {
                return (
                <div key={index}>
                    <div>Name - {elements.item}</div>
                    <div>Price - {elements.price}</div>
                    <div>Quantity - {elements.quantity}</div>
                    
                    <div>{elements.button(index)}</div>
                    {/* <button onClick={() => {resetArray(index)}}>Remove</button> */}
            </div>

            )
        })}  </div>


            </fieldset>
            
           </div>
    </>
    )
        
}


export default ShoppingCart;