import React from "react";
import { Todo } from "../model";

import "./StyleDragable.css";
import SingleTodoDragable from "./SingleTodoDragable";
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoListDragable: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="container">
      <div className="todos2">
        <span className="todos__heading">Active Tasks</span>
        {todos?.map((todo, index) => (
          <SingleTodoDragable />
          // index={index}
          // todos={todos}
          // todo={todo}
          // key={todo.id}
          // setTodos={setTodos}
        ))}
      </div>
      <div className="todos2 remove">
        {" "}
        <span className="todos__heading">completed Tasks</span>
      </div>
    </div>
  );
};

export default TodoListDragable;
