import React from 'react'
class AddTodo extends React.Component{
    render(){
        return(
            <>
                <input type="text" onChange={this.props.change} value={this.props.val}/>
                <button type="button" onClick={this.props.click}>add</button>
            </>
        )
    } 
}
export default AddTodo