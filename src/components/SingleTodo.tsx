import React, { useState, useRef, useEffect } from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
interface Props {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todos: Todo[];
}
export const SingleTodo: React.FC<Props> = ({ todo, setTodos, todos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.description);
  const handelDone = (id: number) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };
  const handelDelete = (id: number) => {
    setTodos(todos.filter((item) => item.id !== id));
  };
  const handelEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...todo, description: editTodo } : item
      )
    );
    setEdit(false);
  };
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => inputRef.current?.focus(), [edit]);

  return (
    <form className="todos__single" onSubmit={(e) => handelEdit(e, todo.id)}>
      {!edit ? (
        todo.isDone === true ? (
          <s className="todos__single__text">
            {todo.description}
          </s> /* strike* */
        ) : (
          <span className="todos__single__text">{todo.description}</span>
        )
      ) : (
        <input
          ref={inputRef}
          className="todos__single__text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      )}

      <div>
        <span className="icon">
          <AiFillEdit
            onClick={() => {
              if (!edit && !todo.isDone) setEdit(!edit);
            }}
          />
        </span>
        <span className="icon">
          <AiFillDelete onClick={() => handelDelete(todo.id)} />
        </span>
        <span className="icon" onClick={() => handelDone(todo.id)}>
          <MdOutlineDone />
        </span>
      </div>
    </form>
  );
};
