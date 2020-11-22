import React from "react";
import "./App.css";
import { AddTodo } from "./todo/AddTodo";

function App() {
  return (
    <div className="container">
      <h1>Todos</h1>
      <AddTodo />
    </div>
  );
}

export default App;
