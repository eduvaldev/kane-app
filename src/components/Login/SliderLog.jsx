import React from 'react';
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

//estilos
import '../../Sass/slider.scss';
import Slider1 from '../../Assets/img/slider1.jpg';
import Slider2 from '../../Assets/img/slider2.jpg';
import Slider3 from '../../Assets/img/slider3.jpg';
import Slider4 from '../../Assets/img/slider4.jpg';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const SliderLog = () => {
  return (  
    <div className='slider__container'>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={3000}
      >
        <div className='sliderImg'>
          <img className='sliderImg__img' src={Slider1} alt=""/>
          <div className="sliderImg__text">
            <h2 className='sliderImg__title'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p className='sliderImg__parrafo'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Provident beatae eveniet, libero possimus illum pariatur molestiae 
            minus. Repudiandae magnam a unde cumque illum natus aspernatur 
            est tempore cum! Optio, quod.</p>
          </div>
        </div>
        <div className='sliderImg'>
          <img className='sliderImg__img' src={Slider2} alt=""/>
          <div className="sliderImg__text">
            <h2 className='sliderImg__title'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p className='sliderImg__parrafo'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Provident beatae eveniet, libero possimus illum pariatur molestiae 
            minus. Repudiandae magnam a unde cumque illum natus aspernatur 
            est tempore cum! Optio, quod.</p>
          </div>
        </div>
        <div className='sliderImg'>
          <img className='sliderImg__img' src={Slider3} alt=""/>
          <div className="sliderImg__text">
            <h2 className='sliderImg__title'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p className='sliderImg__parrafo'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Provident beatae eveniet, libero possimus illum pariatur molestiae 
            minus. Repudiandae magnam a unde cumque illum natus aspernatur 
            est tempore cum! Optio, quod.</p>
          </div>
        </div>
        <div className='sliderImg'>
          <img className='sliderImg__img' src={Slider4} alt=""/>
          <div className="sliderImg__text">
            <h2 className='sliderImg__title'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p className='sliderImg__parrafo'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Provident beatae eveniet, libero possimus illum pariatur molestiae 
            minus. Repudiandae magnam a unde cumque illum natus aspernatur 
            est tempore cum! Optio, quod.</p>
          </div>
        </div>
      </AutoplaySlider>
    </div>
  );
}
 
export default SliderLog;