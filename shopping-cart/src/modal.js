import { useState } from 'react';
import jacketimage from './assets/jacket.png'
import topsimage from './assets/tops.png'
import shirtsimage from './assets/shirts.png'
import bottomsimage from './assets/bottoms.png'
import knitwearimage from './assets/knitwear.png'
import topboimage from './assets/tops-box.png'
import denimimage from './assets/denim.png'
import shirtimage from './assets/shirt2.jpg'
import jacketimage2 from './assets/jacket2.png'
import { Link } from 'react-router-dom';
import Jacket from './jackets'

function Modal(props) { 
    const exit = () => {
        props.closeModal(false)
    }
    return (
        <div className='Modal' onMouseLeave={() => {exit()}}>
            <div className='modal-top-row'>

                <div className='modal-jackets-box'>
                    <Link to={'/Jackets'}>
                    <img className = 'clothesImages' src={jacketimage}></img>
                    <div className='modal-top-row-items'>JACKETS</div>
                    </Link>
                </div>
                <div className='modal-Tops-box'>
                    <Link to={'/Tops'}>
                    <img className = 'clothesImages' src={topsimage}></img>
                    <div className='modal-top-row-items'>TOPS</div>
                    </Link>
                </div>     
                <div className='modal-Shirts-box'>
                    <Link to={'/Shirts'}>
                    <img className = 'clothesImages' src={shirtsimage}></img>
                    <div className='modal-top-row-items'>SHIRTS</div>
                    </Link>
                </div>    
                <div className='modal-Bottoms-box'>
                    <Link to={'/Bottoms'}>
                    <img className = 'clothesImages' src={bottomsimage}></img>
                    <div className='modal-top-row-items'>BOTTOMS</div>
                    </Link>
                </div>   
                <div className='modal-Knitwear-box'>
                    <Link to={'/Knitwear'}>
                    <img className = 'clothesImages' src={knitwearimage}></img>
                    <div className='modal-top-row-items'>KNITWEAR</div>
                    </Link>
                </div>              
            </div>

        <div className='modal-bottom-row'>
            <Link to={'/store'}>
                <div className='modal-bottom-row-items'>
                    <img className = 'feature-boxes' src={topboimage}></img>
                </div>
            </Link>
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