import React, { useState } from "react";

interface ButtonProps {
    text: string | number | boolean;
    onClick?: () => void;
}
const Button: React.FC<ButtonProps> = (props) => {
    const { text, onClick } = props;
    const [ value, setValue] = useState<number>(1)
  return (
    <div>
        <h3>{value}</h3>
      <button onClick={() => setValue(value + 1)}>{text}</button>
    </div>
  );
};

export default Button;
