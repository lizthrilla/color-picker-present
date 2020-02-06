import React, {useState} from "react";
import "./App.css";
import Slider from "./components/Slider";

function App() {
  const [hue, setHue] = useState(250)
  const hsla = `hsla(${hue}, 100%, 50%, 1)`
  console.log(hsla)

  const onSliderChange = (e) => {
    setHue(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="swatch" style={{ backgroundColor: hsla }} />
        <Slider
          onChange={e => console.log(e, "HUE")}
          sliderMax="330"
          sliderValue={250}
          sliderLabel={"Hue"}
        />
        <Slider
          onChange={e => console.log(e, "SAT")}
          sliderLabel={"Saturation"}
          sliderMax="100"
          sliderValue={100}
        />
        <Slider
          onChange={e => console.log(e, "LIGHT")}
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
