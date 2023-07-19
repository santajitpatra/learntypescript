import React, { useState } from "react";
import { useCounter } from "../provider/Counter";

interface ButtonProps {
    text: string | number | boolean;
    onClick?: () => void;
}


const Button: React.FC<ButtonProps> = (props) => {
    const context = useCounter()

  return (
    <div>
      <h2 onClick={(e)=> context?.setCount(context?.value + 1)}>{context?.value}</h2>
    </div>
  );
};

export default Button;
