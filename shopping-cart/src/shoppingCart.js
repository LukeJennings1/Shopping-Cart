import {Link} from 'react-router-dom'
import logo from './assets/icons8-compass-east-100.png'
import basketIcon from './assets/basket.png'
import Header from  './header'
import Cartlogic from './cartlogic'
import { useState, createContext, useContext, useEffect } from "react";
import { MakeContext } from './RouteSwitch'
import item1 from './assets/item1.jpg'



function ShoppingCart() {

    const [importedItem, ...rest] = useContext(MakeContext)
    const [item1, setImportedValue] = useState(importedItem)
    const [importedValue, setImportedValue2] = useContext(MakeContext)



console.log(importedItem)

const resetArray = () => {
    setImportedValue(item1.splice(1))
    setImportedValue2([])
}
// useEffect(() => {setImportedValue(importedValue)}, [item1])

    return (  
    <>
    <Header />

        <div className='ShoppingCartBackground'>
            
            <fieldset className='ShoppingCartWrapper'>
                <legend>    Shopping Basket    </legend>

            <div className='itemCartWrapper'> 
                {item1.map((elements) => {
                return (
                <div key={elements.id}>
                    <div>{elements.item}</div>
                    <div>{elements.price}</div>
                    <div>{elements.quantity}</div>
                    <button onClick={resetArray}>Remove</button>
            </div>

            )
        })}  </div>


            </fieldset>
            
           </div>
    </>
    )
        
}


export default ShoppingCart;