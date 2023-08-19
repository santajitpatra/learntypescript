import React, { useState } from "react";
import Button from "./components/Button";
import { CounterProvider } from "./provider/Counter";
import Todo from "./components/Todo";
import Counter from "./components/Counter";
import TicTacToe from "./components/TicTacToe";
import APICall from "./components/APICall";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { decrement, increment } from "./redux/slices/counter";
import CounterComponent from "./components/CounterComponent";

const myTodoItems = [
  { id: 1, title: "I want to do something" },
  { id: 2, title: "I want to do nothing" },
  { id: 3, title: "I don't want to do something" },
];

const App: React.FC = (props) => {
  const [state, setState] = useState<boolean>(true);
  const count = useAppSelector((state) => state.counter);
  const dispstch = useAppDispatch();


  return (
    <div className="App">
      <CounterProvider>
        <Button onClick={() => alert("K.O")} text={"Click Me"} />
        <Todo items={myTodoItems} />
        <button onClick={(e) => setState(!state)}>Toggle Counter</button>
        {state ? <Counter /> : ""}
        <TicTacToe />
        <APICall />
        <h2>Count is {count} </h2>
        <button onClick={() => dispstch(increment())}>Increment</button>
        <button onClick={() => dispstch(decrement())}>Decrement</button>
        <CounterComponent/>
      </CounterProvider>
    </div>
  );
};

export default App;
