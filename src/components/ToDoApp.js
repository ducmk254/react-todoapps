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
    this.changeCheckboxInput = this.changeCheckboxInput.bind(this); // Khai bao nhu the nay de khi khai bao changeCheckboxInput nhu method thong thuong ma khong can changeCheckboxInput = ()=>{}
    this.deleteTodo = this.deleteTodo.bind(this); // Khai bao nhu the nay de khi khai bao deleteTodo nhu method thong thuong ma khong can deleteTodo = ()=>{}
    this.addNewTodo = this.addNewTodo.bind(this); // Khai bao nhu the nay de khi khai bao addNewTodo nhu method thong thuong ma khong can addNewTodo = ()=>{}
  }
  changeCheckboxInput = async (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      }),
    });
    let curTodo = await axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => res.data);
    await axios
      .put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        completed: !curTodo.completed,
      })
      .then((res) => {
        console.log('change sucessfull');
        return console.log(res.data);
      });
    // console.log("change sucessfull");
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
    // do khai bao bind this o constructor roi nen co the code ham addNewTodo khong can arrow function: addNewTodo(title){}
    if (title !== '') {
      axios
        .post('https://jsonplaceholder.typicode.com/todos', {
          title: title,
          completed: false,
        })
        .then((res) => {
          console.log(res.data);
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
