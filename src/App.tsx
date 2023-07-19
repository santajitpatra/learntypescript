import React from 'react';
import Button from './components/Button';
import { CounterProvider } from './provider/Counter';
import Todo from './components/Todo';

const App:React.FC = () => {
  return (
    <div className="App">
      <CounterProvider>
        <Button onClick={() => alert("K.O")} text={"Click Me"} />
        <Todo />
        <Todo />
        <Todo />
      </CounterProvider>
    </div>
  );
}

export default App;
