import React from "react";
import Button from "./components/Button";
import { CounterProvider } from "./provider/Counter";
import Todo from "./components/Todo";

const myTodoItems = [
  { id: 1, title: "I want to do something" },
  { id: 2, title: "I want to do nothing" },
  { id: 3, title: "I don't want to do something" },
];

const App: React.FC = (props) => {
  return (
    <div className="App">
      <CounterProvider>
        <Button onClick={() => alert("K.O")} text={"Click Me"} />
        <Todo items={myTodoItems} />
      </CounterProvider>
    </div>
  );
};

export default App;
