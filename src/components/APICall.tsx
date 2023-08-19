import React, { useEffect, useState } from "react";

interface TodoItem {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

const APICall: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((e) => setTodos(e as TodoItem[]));
  }, []);
  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </div>
  );
};

export default APICall;
