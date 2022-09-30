import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Store from './store'

function RouteSwitch()  {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<App />}></Route>

                <Route path = 'Store' element = {<Store />}></Route>
                             

            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;