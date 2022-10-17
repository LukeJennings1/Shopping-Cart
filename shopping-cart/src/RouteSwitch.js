import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Store from './store';
import ShoppingCart from './shoppingCart';
import { useState, createContext, useContext } from "react";
import { Context } from './context';
import Jacket from './jackets';
import Tops from './Tops';
import Shirts from './Shirts';
import Bottoms from './Bottoms'
import Knitwear from './Knitwear'
import Notyetmade from './notyetmade'

export const MakeContext = createContext(null); // null is the default value. 
export const BasketNum = createContext(0);

function RouteSwitch()  {
    const [value, setValue] = useState([])
    const [itemNum, SetItemNum] = useState([])


    return (
        <BrowserRouter>
        <BasketNum.Provider value = {[itemNum, SetItemNum]}>
        <MakeContext.Provider value = {[value, setValue]}>
            <Routes>
                <Route path='/' element = {<App />}></Route>

                <Route path='Basket' element = {<ShoppingCart />}></Route>

                <Route path = 'Store' element = {<Store />}></Route>
        
                <Route path= 'Jackets' element = {<Jacket />}></Route>

                <Route path= 'Tops' element = {<Tops />}></Route>

                <Route path= 'Shirts' element = {<Shirts />}></Route>

                <Route path= 'Bottoms' element = {<Bottoms />}></Route>

                <Route path= 'Knitwear' element = {<Knitwear />}></Route>

                <Route path= 'Notyetmade' element = {<Notyetmade />}></Route>


            </Routes>
            </MakeContext.Provider>
            </BasketNum.Provider>
        </BrowserRouter>
    )
}

export default RouteSwitch;