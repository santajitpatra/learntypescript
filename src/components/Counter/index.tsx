import React, { useState } from 'react'
import "./style.css"
const Counter: React.FC = (props) => {
const [counter, setCounter] = useState(0);

const handleIncrement =() => {
setCounter(counter +1)
}
const handleDecrement = () => {
if (counter === 0) {
    setCounter(counter - 1);
}
};

  return (
    <div className="counter_container">
      <h2>{counter}</h2>
      <button onClick={handleIncrement}>INC</button>
      <button onClick={handleDecrement}>DEC</button>
    </div>
  );
}

export default Counter