import React, { useContext } from "react";
import TodoStore from "../stores/TodoStore";

export const TodoList = () => {
  const { todos, toggleTodo, removeTodo } = useContext(TodoStore);

  const handleToggle = (id: string) => toggleTodo(id);

  const handleRemove = (id: string) => removeTodo(id);

  return (
    <table className="table  table-hover">
      <thead>
        <tr>
          <th>Title</th>
          <th>Completed</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(({ id, title, completed }) => {
          return (
            <tr key={id}>
              <td>{title}</td>
              <td>{completed ? "Yes" : "No"}</td>
              <td>
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => handleToggle(id)}
                >
                  Toggle
                </button>

                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleRemove(id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
