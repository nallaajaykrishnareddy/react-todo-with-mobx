import React, { useContext, useState } from "react";
import TodoStore from "../stores/TodoStore";
import { observer } from "mobx-react-lite";
import { v4 } from "uuid";
import { TodoList } from "./TodoList";

export const AddTodo = observer(() => {
  const { info, addTodo } = useContext(TodoStore);
  const [title, setTitle] = useState("");
  const handleAddTodo = () => {
    if (title) {
      addTodo({ title, id: v4(), completed: false });
      setTitle("");
    }
  };

  return (
    <>
      <div className="alert alert-primary">
        <div className="d-inline col-4">
          Total Todos: &nbsp;
          <span className="badge badge-info">{info.totalTodos}</span>
        </div>
        <div className="d-inline col-4">
          Total Todos completed: &nbsp;
          <span className="badge badge-info">{info.totalCompletedTodos}</span>
        </div>
        <div className="d-inline col-4">
          Total Todos Not Completed: &nbsp;
          <span className="badge badge-info">
            {info.totalNotCompletedTodos}
          </span>
        </div>
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={title}
          placeholder="Todo title...."
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-primary" onClick={handleAddTodo}>
          Add Todo
        </button>
      </div>
      <TodoList />
    </>
  );
});
