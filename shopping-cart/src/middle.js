import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import Header from './header'
import firstSliderBanner from './assets/banner3.jpg'
import secondSliderBanner from './assets/cotton.jpg'
import thirdSliderBanner from './assets/home range.jpg'
import { createContext } from 'react';

const AutoplaySlider = withAutoplay(AwesomeSlider);


function Middle() {

  


  const test = () => {
    console.log('hello')
  }
    return (
<div className='sliderWrapper'>

  <AutoplaySlider  play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={5000} 
    bullets = {false} 
    animation="cubeAnimation">
    <div className='firstBannerWrapper' data-src={firstSliderBanner}>
      <button>View the full range</button>
    </div>
    <div className='secondBannerWrapper' data-src={secondSliderBanner}>
      <button onClick={test}>Read All About It!</button>
    </div>
    <div data-src={thirdSliderBanner} />
  </AutoplaySlider>
  </div>
    )
}

export default Middle;