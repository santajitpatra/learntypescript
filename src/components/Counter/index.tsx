import React, { useState } from "react";
import "./style.css";
const Counter: React.FC = (props) => {
  const [counter, setCounter] = useState<number>(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    if (counter === 0) return;
     setCounter(counter - 1);
  };

  return (
    <div className="counter_container">
      <h2>{counter}</h2>
      <button
        onClick={handleIncrement}
        style={{ backgroundColor: "lightseagreen" }}
      >
        INC
      </button>
      <button
        onClick={handleDecrement}
        style={{ backgroundColor: "tomato" }}
      >
        DEC
      </button>
    </div>
  );
};

export default Counter;
