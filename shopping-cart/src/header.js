import logo from './assets/icons8-compass-east-100.png'
import storePage from './store'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="HeaderWrapper">
            <div id='left-side-wrapper'>
                <div id="websiteTitle">Point East Clothing</div>
                </div>
        <div className='middleHeaderWrapper'>
                <img id="logo" src={logo}></img>
                </div>
            <div className="linkWrapper">
                <Link to={'./store'}>
                <button>Store // </button> 
                </Link>
                {/* need to setup router links for these */}
                <Link to = {'/'}>
                <button>Contact // </button>
                </Link>
              
            </div>
        </div>
    )
}

export default Header;