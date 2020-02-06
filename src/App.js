import React, { useEffect, useReducer } from "react";
import "./App.css";
import Slider from "./components/Slider";

const initialState = {
  hue: 250,
  sat: 100,
  light: 50
};

const colorReducer = (state, action) => {
  switch (action.type) {
    case "HUE":
      return { ...state, hue: action.payload };
    case "SAT":
      return { ...state, sat: action.payload };
    case "LIGHT":
      return { ...state, light: action.payload };
    default:
      return { state };
  }
};

function App() {
  const [state, dispatch] = useReducer(colorReducer, initialState);

  useEffect(() => {
    const randomColor = Math.ceil(Math.random() * 330);

    dispatch({ type: "HUE", payload: randomColor });
  }, []);

  const hsl = `hsl(${state.hue}, ${state.sat}%, ${state.light}%)`;

  const onSliderInputChange = (e, type) => {
    const value = e.target.value;
    dispatch({ type: type, payload: value });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="swatch" style={{ backgroundColor: hsl }} />
        <Slider
          onChange={e => onSliderInputChange(e, "HUE")}
          sliderMax="330"
          sliderValue={state.hue}
          sliderLabel={"Hue"}
        />
        <Slider
          onChange={e => onSliderInputChange(e, "SAT")}
          sliderLabel={"Saturation"}
          sliderMax="100"
          sliderValue={state.sat}
        />
        <Slider
          onChange={e => onSliderInputChange(e, "LIGHT")}
          sliderLabel={"Light"}
          sliderMax="100"
          sliderValue={state.light}
        />
      </header>
    </div>
  );
}

export default App;
