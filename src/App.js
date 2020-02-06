import React, { useReducer } from "react";
import "./App.css";
import Slider from "./components/Slider";

const initialState = {
  hue: "250",
  sat: "100",
  light: "50",
  alpha: "1"
};

const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case "HUE":
      return {...state, hue: action.payload}
    case "SAT":
      return { ...state, sat: action.payload };
    default:
      return state;
  }
};

function App() {
  // const [hue, setHue] = useState("250");
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const onSliderInputChange = (e, type) => {
    const value = e.target.value
    dispatch({type: type, payload: value})
  };

  const hsla = `hsla(${state.hue}, ${state.sat}%, ${state.light}%, ${state.alpha})`;

  return (
    <div className="App">
      <header className="App-header">
        <div className="swatch" style={{ backgroundColor: hsla }} />
        <Slider
          onChange={e => onSliderInputChange(e, 'HUE')}
          sliderMax="360"
          sliderType={"hue"}
          sliderValue={state.hue}
          sliderLabel={"Hue"}
        />
        <Slider
          onChange={e => onSliderInputChange(e, 'SAT')}
          sliderMax="100"
          sliderType='saturation'
          sliderValue={state.sat}
          sliderLabel={"Saturation"}
        />
      </header>
    </div>
  );
}

export default App;
