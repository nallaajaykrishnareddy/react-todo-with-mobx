import { action, observable, computed, makeAutoObservable } from "mobx";
import { createContext } from "react";
import { v4 } from "uuid";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

class TodoStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable todos: Todo[] = [
    { id: v4(), title: "Item #1", completed: false },
    { id: v4(), title: "Item #2", completed: false },
    { id: v4(), title: "Item #3", completed: false },
    { id: v4(), title: "Item #4", completed: false },
    { id: v4(), title: "Item #5", completed: true },
    { id: v4(), title: "Item #6", completed: false },
  ];

  @observable selectedTodo = {};

  @action addTodo = (todo: Todo) => {
    this.todos.push({ ...todo, id: v4() });
  };

  @action todoSelected = (id: string) => {
    console.log(this.todos.find((todo) => todo.id === id));
    this.selectedTodo = this.todos.filter((todo) => todo.id !== id)[0]!;
  };

  @action removeTodo = (id: string) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    console.log(this.todos);
  };

  @action toggleTodo = (id: string) => {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }

      return todo;
    });
  };

  @computed get info() {
    return {
      totalTodos: this.todos.length,
      totalCompletedTodos: this.todos.filter((todo) => todo.completed).length,
      totalNotCompletedTodos: this.todos.filter((todo) => !todo.completed)
        .length,
    };
  }
}

export default createContext(new TodoStore());
