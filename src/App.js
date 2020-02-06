import React from "react";
import "./App.css";
import Slider from "./components/Slider";

function App() {

  // const hsla = `hsla(${state.hue}, ${state.sat}%, ${state.light}%, ${state.alpha})`;
  const hsla = 'hsla(250, 100%, 50%, 1)'
  console.log(hsla)

  return (
    <div className="App">
      <header className="App-header">
        <div className="swatch" style={{ backgroundColor: hsla }} />
        <Slider
          onChange={e => console.log(e, 'HUE')}
          sliderMax="360"
          sliderValue={250}
          sliderLabel={"Hue"}
        />
      </header>
    </div>
  );
}

export default App;
