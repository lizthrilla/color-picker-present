import React from "react";

const Slider = ({ onChange, sliderLabel, sliderMax, sliderValue, step }) => {
  return (
    <div className="slider-div">
      <label>{sliderLabel}</label>
      <input
        max={sliderMax}
        min="0"
        onChange={onChange}
        step={sliderLabel === 'Alpha' ? '0.01' : '1'}
        type="range"
        value={sliderValue}
      />
    </div>
  );
};

export default Slider;
