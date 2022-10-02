import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Store from './store'
import ShoppingCart from './shoppingCart';
import { useState, createContext, useContext } from "react";
import { Context } from './context'

const ContextMake = createContext(null);


function RouteSwitch()  {
    return (
        <BrowserRouter>
        <ContextMake.Provider value = {"test string"}>
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