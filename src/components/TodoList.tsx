import React from "react";
import { Todo } from "../model";
import { SingleTodo } from "./SingleTodo";
import "./styles.css";
/*https://www.youtube.com/watch?v=FJDVKeh7RJI */
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
export const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.map((item, idx) => (
        <SingleTodo
          todo={item}
          key={item.id}
          setTodos={setTodos}
          todos={todos}
        />
      ))}
    </div>
  );
};
