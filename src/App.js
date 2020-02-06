import React, {useState} from "react";
import "./App.css";
import Slider from "./components/Slider";

function App() {
  const [hue, setHue] = useState(250)
  const hsl = `hsl(${hue}, 100%, 50%)`
  console.log(hsl)

  const onSliderChange = (e) => {
    console.log(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="swatch" style={{ backgroundColor: hsl }} />
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
        <Slider
          onChange={e => console.log(e, "ALPHA")}
          sliderLabel={"Alpha"}
          sliderMax="1"
          sliderValue={1}
        />
      </header>
    </div>
  );
}

export default App;
