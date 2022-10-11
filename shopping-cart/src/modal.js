import { useState } from 'react';
import jacketimage from './assets/jacket.png'
import topsimage from './assets/tops.png'
import shirtsimage from './assets/shirts.png'
import bottomsimage from './assets/bottoms.png'
import knitwearimage from './assets/knitwear.png'
import topboimage from './assets/tops-box.png'
import denimimage from './assets/denim.png'
import shirtimage from './assets/shirt2.png'
import jacketimage2 from './assets/jacket2.png'


function Modal(props) { 
    const exit = () => {
        props.closeModal(false)
        console.log('exit')
    }
    return (
        <div className='Modal' onMouseLeave={() => {exit()}}>
            <div className='modal-top-row'>

                <div className='modal-jackets-box'>
                    <img className = 'clothesImages' src={jacketimage}></img>
                    <div className='modal-top-row-items'>JACKETS</div>
                </div>
                <div className='modal-Tops-box'>
                    <img className = 'clothesImages' src={topsimage}></img>
                    <div className='modal-top-row-items'>TOPS</div>
                </div>     
                <div className='modal-Shirts-box'>
                    <img className = 'clothesImages' src={shirtsimage}></img>
                    <div className='modal-top-row-items'>SHIRTS</div>
                </div>    
                <div className='modal-Bottoms-box'>
                    <img className = 'clothesImages' src={bottomsimage}></img>
                    <div className='modal-top-row-items'>BOTTOMS</div>
                </div>   
                <div className='modal-Knitwear-box'>
                    <img className = 'clothesImages' src={knitwearimage}></img>
                    <div className='modal-top-row-items'>KNITWEAR</div>
                </div>              
            </div>

        <div className='modal-bottom-row'>
                <div className='modal-bottom-row-items'>
                    <img className = 'feature-boxes' src={topboimage}></img>
                </div>
                <div className='modal-bottom-row-items'>
                    <img className = 'feature-boxes' src={denimimage}></img>
                </div>
                <div className='modal-bottom-row-items'>
                    <img className = 'feature-boxes' src={shirtimage}></img>
                </div>
                <div className='modal-bottom-row-items'>
                    <img className = 'feature-boxes' src={jacketimage2}></img>
                </div>
        </div>
        </div>
    )

}

export default Modal;