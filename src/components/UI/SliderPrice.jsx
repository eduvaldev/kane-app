import React, { useState } from 'react';
//estilos
import '../../Sass/sliderprice.scss';

const SliderPrice = () => {

  const [active, setActive] = useState('');
  const [Check1, setCheck1] = useState(true);
  const [Check2, setCheck2] = useState(false);

  const handleChange = (type)=>{
    if(type === 'check1'){
      setCheck1(true);
      setCheck2(false);
      setActive('');
    }else if(type === 'check2'){
      setCheck1(false);
      setCheck2(true);
      setActive('div__slider__price__active');
    }
  }

  return (  
    <>
    <div className={`slider-price div__slider__price ${active}`}>
      <div className="div__cont__slider">

      </div>
      <div className="div__cont__slider">
        
      </div>
      <div className="div__cont__slider">
        
      </div>
      <div className="div__cont__slider">
        
      </div>
      <div className="div__cont__slider">
        
      </div>
      <div className="div__cont__slider">
        
      </div>
    </div>
    <div className="div__check__btn">
        <input 
          type="radio" 
          name="" 
          value='first' 
          checked={Check1}
          onChange={()=> handleChange('check1')}
        />
        <input 
          type="radio" 
          name="" 
          value='secund' 
          checked={Check2}
          onChange={()=> handleChange('check2')}
        />
      </div>
    </>
  );
}
 
export default SliderPrice;