import React, { Component } from "react";
import TodoList from "../todoList/todoList";
import "./todoApp.css";

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: [],
      text: ""
    };

    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text
    };
    this.setState(state => ({
      inputText: state.inputText.concat(newItem),
      text: ""
    }));
  }

  handleDelete(Delete) {
    const { inputText } = this.state;
    const finalText = inputText.filter(input => input !== Delete);
    this.setState({ inputText: finalText });
  }

  render() {
    return (
      <div>
        <h1 className="heading">React Todo App</h1>

        <form className="form" onSubmit={this.handleSubmit}>
          <input
            className="input"
            id="text"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button className="todoAppButton">Add Todo</button>
        </form>
        <TodoList
          inputText={this.state.inputText}
          deleteHandler={this.handleDelete}
        />
      </div>
    );
  }
}

export default TodoApp;
