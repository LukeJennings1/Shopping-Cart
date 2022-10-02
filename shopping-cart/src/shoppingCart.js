import {Link} from 'react-router-dom'
import logo from './assets/icons8-compass-east-100.png'
import basketIcon from './assets/basket.png'
import Header from  './header'
import Cartlogic from './cartlogic'
import { useState, createContext, useContext } from "react";



function ShoppingCart(props) {


    return (  
        <div className='BasketWrapper'>
        <Header />
        <div>{props.item}</div>
           </div>
      
    )
        
}


export default ShoppingCart;