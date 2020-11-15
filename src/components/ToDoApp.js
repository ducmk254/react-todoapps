import React from 'react';
import Header from './Header';
import './ToDoApp.css';
import './Todos';
import Todos from './Todos';
import AddToDo from './AddTodo';

import axios from 'axios';

class ToDoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };

    this.changeCheckboxInput = this.changeCheckboxInput.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.addNewTodo = this.addNewTodo.bind(this);
  }
  changeCheckboxInput = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      }),
    });
  };
  deleteTodo(id, e) {
    // console.log('clicked delete with ' + id + ' id' + e);
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) =>
        this.setState({
          todos: this.state.todos.filter((todo) => todo.id !== id),
        })
      );
  }
  addNewTodo = (title) => {
    if (title !== '') {
      const newTodo = {title: title, completed: false};
      axios
        .post('https://jsonplaceholder.typicode.com/todos', newTodo)
        .then((res) => {
          this.setState({
            todos: [...this.state.todos, res.data],
          });
        });
    }
  };
  //Life cycle:
  componentDidMount() {
    const config = {
      params: {
        _limit: 10,
      },
    };
    axios
      .get('https://jsonplaceholder.typicode.com/todos', config)
      .then((res) => this.setState({todos: res.data}));
  }

  // render:
  render() {
    return (
      <div className="container">
        <Header />
        <AddToDo addNewTodo={this.addNewTodo}></AddToDo>
        <Todos
          todos={this.state.todos}
          changeCheckboxInput={this.changeCheckboxInput}
          deleteTodo={this.deleteTodo}
        ></Todos>
      </div>
    );
  }
}

export default ToDoApp;
