import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import Header from './header'
import iamge from './assets/horse.jpg'

function Middle() {
    return (
<div className='sliderWrapper'>
  <AwesomeSlider animation="cubeAnimation">
    <div data-src={iamge} />
    <div data-src={iamge} />
    <div data-src={iamge} />
  </AwesomeSlider>
  </div>
    )
}

export default Middle;