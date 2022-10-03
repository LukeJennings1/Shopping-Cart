import {Link} from 'react-router-dom'
import logo from './assets/icons8-compass-east-100.png'
import basketIcon from './assets/basket.png'
import Header from  './header'
import Cartlogic from './cartlogic'
import { useState, createContext, useContext } from "react";
import { ContextMake } from './RouteSwitch'


function ShoppingCart(props) {
    // const updatedValue = useContext(ContextMake);

    const [updatedValue, setImportedValue] = useState(useContext(ContextMake))

    return (  
        <div className='BasketWrapper'>
        <Header />
        
        <div className='item'>{updatedValue}</div>

           </div>
      
    )
        
}


export default ShoppingCart;