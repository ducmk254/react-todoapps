import React from 'react';
import './AddTodo.css';
class AddTodo extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  render() {
    return (
      <div className="addTodo">
        <input
          type="text"
          placeholder="Add new todo..."
          value={this.state.title}
          onChange={this.onInputChange}
        ></input>
        <button onClick={() => {this.props.addNewTodo(this.state.title); this.setState({title:""})}}>
          Add
        </button>
      </div>
    );
  }
}

export default AddTodo;
