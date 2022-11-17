import React, { useState } from "react";
import { Todo } from "./model";
import "./App.css";
import InputField from "./components/InputField";
import { TodoList } from "./components/TodoList";
import TodoListDragable from "./components/TodoListDragable";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handelAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([
        { id: Date.now(), description: todo, isDone: false },
        ...todos,
      ]);
      setTodo("");
    }
  };
  console.log(todos);

  return (
    <div className="App">
      <div className="heading">taskify</div>
      <InputField todo={todo} setTodo={setTodo} handelAdd={handelAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
      {/* <TodoListDragable todos={todos} setTodos={setTodos} /> */}
    </div>
  );
}

export default App;
