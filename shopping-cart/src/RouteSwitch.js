import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Store from './store';
import ShoppingCart from './shoppingCart';
import { useState, createContext, useContext } from "react";
import { Context } from './context';

export const ContextMake = createContext(null);


function RouteSwitch()  {
    const [value, setValue] = useState('')



    return (
        <BrowserRouter>
        <ContextMake.Provider value = {[value, setValue]}>
            <Routes>
                <Route path='/' element = {<App />}></Route>

                <Route path='Basket' element = {<ShoppingCart />}></Route>

                <Route path = 'Store' element = {<Store />}></Route>
        

            </Routes>
            </ContextMake.Provider>
        </BrowserRouter>
    )
}

export default RouteSwitch;