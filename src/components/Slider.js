import React from 'react';

const Slider = ({onChange, sliderValue, sliderMax, sliderLabel}) => {
  return (
    <div className="slider-div">
      <label>{sliderLabel}</label>
      <input
        type="range"
        min="0"
        max={sliderMax}
        value={sliderValue}
        onChange={e => onChange(e)}
      />
    </div>
  );
};
 
export default Slider;