import React from "react";
import "./style.css";

interface TodoItemProps {
  title: string;
}

const TodoItem: React.FC<TodoItemProps> = ({title}) => {
  return <li>{title}</li>;
};

export default TodoItem;
