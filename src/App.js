import React from "react";
import "./App.css";
import Slider from "./components/Slider";

function App() {

  // const hsla = `hsla(${hue}, ${sat}%, ${light}%, ${alpha})`;
  const hsla = 'hsla(250, 100%, 50%, 1)'
  console.log(hsla)

  return (
    <div className="App">
      <header className="App-header">
        <div className="swatch" style={{ backgroundColor: hsla }} />
        <Slider
          onChange={e => console.log(e, "HUE")}
          sliderMax="360"
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
