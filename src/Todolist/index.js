import React from 'react'
import AddTodo from '../Todolist/Components/AddTodo'
import ListTodo from './Components/ListTodo'
import {v4 as uuid} from 'uuid';
class App extends React.Component{
    constructor(){
        super()
        this.state = {
            name : "",
            todos : [
                
            ]    
        }
    }
    changeName = (e) => {
        this.setState({name : e.target.value})
    }
    deteleItem = (id) => {
        const newTodo = this.state.todos.filter(item =>
            item.id !== id
        )
        this.setState({...this.state , todos : newTodo})
    }
    addTodo = () => {
        if(this.state.name === ""){
            return
        }
        else {
            this.setState({todos : [...this.state.todos , {id: uuid(),name : this.state.name}] , name : ""}) 
        }
    }
    render(){
        return(
            <>
                <AddTodo val={this.state.name} change={this.changeName} click={this.addTodo}/>
                    <ListTodo>
                    
                        {this.state.todos.map((item) => (
                            <li key={item.id} onClick={() => this.deteleItem(item.id)}>{item.name} </li>
                        ))}
                    
                    </ListTodo>
            </>
            
        )
    }
}
export default App