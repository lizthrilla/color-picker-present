import React from "react";
import "./App.css";
import Slider from "./components/Slider";

function App() {
  const hsla = `hsla(250, 100%, 50%, 1)`
  console.log(hsla)

  const onSliderChange = (e) => {
    console.log(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="swatch" style={{ backgroundColor: hsla }} />
        <Slider
          onChange={e => onSliderChange(e)}
          sliderMax="330"
          sliderValue={250}
          sliderLabel={"Hue"}
        />
        <Slider
          onChange={e => onSliderChange(e)}
          sliderLabel={"Saturation"}
          sliderMax="100"
          sliderValue={100}
        />
        <Slider
          onChange={e => onSliderChange(e)}
          sliderLabel={"Light"}
          sliderMax="100"
          sliderValue={50}
        />
      </header>
    </div>
  );
}

export default App;
