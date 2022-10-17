import Header from './header'
import Footer from './footer'
import {Link} from 'react-router-dom'

function Error () { 
    return (
        <>
        <div className='item-page-wrapper'>
        <Header/>

            <div className='not-yet-made'>Checkout Cart Not Part Of this Demo </div>
        </div>
        <Footer/>
        </>
    )
}

export default Error;