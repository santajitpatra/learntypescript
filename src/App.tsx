import React from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Button onClick={() => alert("K.O")} text={"Click Me"} />
    </div>
  );
}

export default App;
