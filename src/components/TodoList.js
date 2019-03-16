import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component{
    constructor(){
        super();
        this.removeTodo = this.removeTodo.bind(this);
    }
    removeTodo(e){ 
        console.log("Id",e.currentTarget.value);
        this.props.removeTodo(e.currentTarget.value);
    }
    
    render(){
        console.log(" Render After : ",this.props.tasks);
        return (
       <div><ul> {this.props.tasks.map(task => <Todo key = {task.id} task={task} remove={this.removeTodo} openModal ={this.props.openModal}/>)}</ul></div>
        
    );
    }
}

export default TodoList;