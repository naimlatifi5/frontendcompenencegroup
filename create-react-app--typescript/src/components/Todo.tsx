import React from "react";
import { ToDoItem } from "./TodoItem";
type TodoItemsCheck = {
  title: string;
  timestamp?: Date;
  checked: boolean;
};

interface TodoProps {
  title: string;
  todos: TodoItemsCheck[];
}

export const Todo = (props: TodoProps) => {
  return (
    <div>
      <h1>{props.title}</h1>

      {props.todos.map((Item) => (
        <ToDoItem />
      ))}
    </div>
  );
};
