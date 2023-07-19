import React, { useState } from "react";

interface ButtonProps {
    text: string | number | boolean;
    onClick?: () => void;
}

interface Book {
    name: string;
    price: number;
}
const Button: React.FC<ButtonProps> = (props) => {
    const { text, onClick } = props;
    const [value, setValue] = useState<Book>({
      name: "One",
      price: 10,
    });  
    const [name, setName] = useState<string | undefined>();

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(e)
    }

  return (
    <div>
      <h3>
        Name {value.name} (Rs. {value.price})
      </h3>
      <button onClick={() => setValue({ name: "Two", price: 20 })}>
        {text}
      </button>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleNameChange}
          type="text"
          placeholder="Enter your name"
          value={name}
        />
        <h3>{name}</h3>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Button;
