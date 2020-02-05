import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='swatch'/>
        <div className='slider-div'>
          <label>Hue</label>
          <input type="range" min={0} max={360} />
        </div>
      </header>
    </div>
  );
}

export default App;
