import React, { useEffect, useReducer } from 'react';
import './App.css';
import Slider from './components/Slider';

const initialColor = {
  hue: 250,
  sat: 100,
  light: 50
};

const colorReducer = (state, action) => {
  switch (action.type) {
    case 'HUE':
      return { ...state, hue: action.payload };
    case 'SAT':
      return { ...state, sat: action.payload };
    case 'LIGHT':
      return { ...state, light: action.payload };
    default:
      return { state };
  }
};

function App() {
  const [state, dispatch] = useReducer(colorReducer, initialColor);
  const hsl = `hsl(${state.hue}, ${state.sat}%, ${state.light}%)`;

  useEffect(() => {
    const randomHue = Math.round(Math.random() * 330);
    dispatch({ type: 'HUE', payload: randomHue });
  }, []);

  const onSliderChange = (e, type) => {
    console.log(e.target.value);
    const value = e.target.value;
    dispatch({ type, payload: value });
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="swatch" style={{ backgroundColor: hsl }} />
        <Slider
          onChange={e => onSliderChange(e, 'HUE')}
          sliderMax="330"
          sliderValue={state.hue}
          sliderLabel={'Hue'}
        />
        <Slider
          onChange={e => onSliderChange(e, 'SAT')}
          sliderLabel={'Saturation'}
          sliderMax="100"
          sliderValue={state.sat}
        />
        <Slider
          onChange={e => onSliderChange(e, 'LIGHT')}
          sliderLabel={'Light'}
          sliderMax="100"
          sliderValue={state.light}
        />
      </header>
    </div>
  );
}

export default App;
