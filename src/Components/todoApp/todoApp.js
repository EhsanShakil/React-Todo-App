import React, { Component } from "react";
import TodoList from "../todoList/todoList";
import "./todoApp.css";

class TodoApp extends Component {

  state = {
    todos: [],
    todo: ""
  };


  handleChange = (e) => {
    this.setState({ todo: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.todo) {
      this.setState((prevState) => ({
        todos: prevState.todos.concat(this.state.todo),
        todo: ""
      }))
    }
  }

  handleDelete = (todoItem) => {
    const { todos } = this.state;
    const finaltodo = todos.filter(input => input !== todoItem);
    this.setState({ todos: finaltodo });
  }

  render() {
    return (
      <div>
        <h1 className="heading">React Todo App</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            className="input"
            id="todo"
            onChange={this.handleChange}
            value={this.state.todo}
          />
          <button className="todoAppButton">Add Todo</button>
        </form>
        <TodoList
          todos={this.state.todos}
          deleteHandler={this.handleDelete}
        />
      </div>
    );
  }
}

export default TodoApp;
