import React from 'react';
import './ToDoItem.css';
class ToDoItem extends React.Component {
  
  render() {
    const {completed, id, title} = this.props.todo; // Destructiring:
    return (
      <li className="todo-item">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => this.props.handleChange(id)}
        />
        <span className={completed ? 'completed' : null}>{title}</span>
        <button
          className="button-style"
          onClick={()=>this.props.deleteItem(id)} 
        >
          X
        </button>
      </li>
    );
  }
}

export default ToDoItem;
