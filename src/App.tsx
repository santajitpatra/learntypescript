import React from 'react';
import './App.css';
import Button from './components/Button';
import { CounterProvider } from './provider/Counter';

function App() {
  return (
    <div className="App">
      <CounterProvider>
        <Button onClick={() => alert("K.O")} text={"Click Me"} />
      </CounterProvider>
    </div>
  );
}

export default App;
