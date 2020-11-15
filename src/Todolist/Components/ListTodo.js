import React from 'react'
class ListTodo extends React.PureComponent{
    render(){

        return(
            <>
                <ul>{this.props.children}</ul>        
            </>
        )
    }
}
export default ListTodo 