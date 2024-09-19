// src/App.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MainSection from './MainSection';
import './App.css';

function App() {
  const [labels, setLabels] = useState([]);
  const [selectedLabel, setSelectedLabel] = useState(null);

  const addLabel = (newLabel) => {
    setLabels([...labels, newLabel]);
  };

  const selectLabel = (label) => {
    setSelectedLabel(label);
  };

  return (
    <div className="App">
      <header className="App-header">
      <Sidebar labels={labels} addLabel={addLabel} selectLabel={selectLabel} />
      <MainSection selectedLabel={selectedLabel} />
      </header>
      
    </div>
  );
}

export default App;
