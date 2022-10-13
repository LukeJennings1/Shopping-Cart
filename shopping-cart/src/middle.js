import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { Link } from 'react-router-dom';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import Header from './header'
import firstSliderBanner from './assets/banner3.jpg'
import secondSliderBanner from './assets/cotton.jpg'
import thirdSliderBanner from './assets/home range.jpg'
import { createContext } from 'react';

const AutoplaySlider = withAutoplay(AwesomeSlider);


function Middle() {
  
    return (
    <div className='sliderWrapper'>
    <AutoplaySlider  
    // play={true}
    cancelOnInteraction={true} // should stop playing on user interaction
    // interval={5000} 
    bullets = {false} 
    animation="cubeAnimation">
        <div className='firstBannerWrapper' data-src={firstSliderBanner}>
    <Link to={'/store'}>
    <button className= 'sustainability-info-button' >View the full range</button>
    </Link>
        </div>
        <div className='secondBannerWrapper' data-src={secondSliderBanner}>
      <Link to={'./sustainability'}>
      <button className= 'sustainability-info-button'>Read All About It!</button>
      </Link>
        </div>
    <div data-src={thirdSliderBanner} />
    </AutoplaySlider>
      </div>
    )
}

export default Middle;