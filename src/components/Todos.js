import React from 'react';
import ToDoItem from './ToDoItem';
import './Todos.css';
import './ToDoItem.css';
class Todos extends React.Component {
  render() {
    const {todos} = this.props;
    let classname = 'todo-item';
    return (
      <div>
        <ul className="todos">
          {todos.map((todo) => (
            <li
              className={todo.completed ? classname + ' completed' : classname}
              key={todo.id}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={()=>this.props.changeCheckboxInput(todo.id)}
              ></input>
              <span>{todo.title}</span>
              <button onClick={(e)=>this.props.deleteTodo(todo.id,e)} className="button-style">X</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todos;
