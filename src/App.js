import React from 'react';
import './App.css';
import AutoComplete from "./AutoComplete"
import countries from "./countries"

function App() {
  return (
    <div className="App">
      <AutoComplete items={countries} />
    </div>
  );
}

export default App;
