import React from 'react'
import TodoItem from './TodoItem'
import "./style.css";

interface TodoItems {
    id:number;
    title:string;
}

interface TodoProps {
  items: TodoItems[];
}

const Todo: React.FC<TodoProps> = ({items}) => {
  return (
    <div className="todo_container">
      <ol>
        {items.map((item) => (
          <TodoItem key={item.id} title={item.title} />
        ))}
      </ol>
    </div>
  );
}

export default Todo