import React, { useEffect, useState } from "react";
import axios from "axios";


interface TodoItem {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

const APICall: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    axios.get<TodoItem[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setTodos(res.data));
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
