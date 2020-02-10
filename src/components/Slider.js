import React from "react";

const Slider = ({ onChange, sliderLabel, sliderMax, sliderValue }) => {
  return (
    <div className="slider-div">
      <label>{sliderLabel}</label>
      <input
        max={sliderMax}
        min="0"
        onChange={onChange}
        type="range"
        value={sliderValue}
      />
    </div>
  );
};

export default Slider;
