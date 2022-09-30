import {Link} from 'react-router-dom'
import logo from './assets/icons8-compass-east-100.png'
import storeBackground from './assets/pexels-pixabay-220755.jpg'
import item1 from './assets/item1.jpg'


function Store() {


 return (
     <div className='StoreWrapper'>
         <div className="HeaderWrapper">
            <div id='left-side-wrapper'>
                <div id="websiteTitle">Point East Clothing</div>
                </div>
        <div className='middleHeaderWrapper'>
            <Link to = {'/'}>
                <img id="logo" src={logo}></img>
            </Link>
                </div>
            <div className="linkWrapper">
                <Link to={'/'}>
                <button>Store // </button> 
                </Link>
                {/* need to setup router links for these */}
                <Link to = {'/'}>
                <button>Contact // </button>
                </Link>
            </div>
            </div>
<div className='itemWrappermain'>
        <div className='item1Wrapper'>
            <img id = 'item1' src={item1}></img>
            <div id = 'item1Details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con.</div>
        </div>
</div>

        
    </div>
 )
}


export default Store;