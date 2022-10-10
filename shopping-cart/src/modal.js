import { useState } from 'react';


function Modal(props) { 
    const exit = () => {
        props.closeModal(false)
        console.log('exit')
    }
    return (
        <div className='Modal' onMouseLeave={() => {exit()}}></div>
    )

}

export default Modal;