import React from 'react';
import Header from './Header';
import TodoTaker from './TodoTaker';
import TodoList from './TodoList';
import SimpleTabs from './SimpleTabs';
import '../css/TodoApp.css';
import {addNotes,removeNotes} from '../routes/FetchApis'
// import EditModal from '../components/EditModal';

class TodoApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title : "My Todo app",
            tasks : [],
            id : "",
            name : "",
            password : "",
            open : false
        }
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.signupUser = this.signupUser.bind(this);
        this.logout = this.logout.bind(this);
        this.openModal = this.openModal.bind(this);
    }
    async handleAddTodo(title,notes,date){
        
        console.log("Title: ",title);
        console.log("Notes: ",notes);
        const newState = [{
            id :Math.random()*734837,
            title: title,
            notes: notes,
            date : date
        }];
        let response = await addNotes(this.state.id, newState);
        console.log("Response after putting the new note",response);
        this.setState((currState) => ({
            tasks : currState.tasks.concat(newState)           
        }));
    }
    async removeTodo(id){
        // this.state.tasks.splice(id);
        console.log("Id:",id);
        let array = this.state.tasks;
        array.forEach(myFunction);
        function myFunction(item,index){
            if(item.id == id)
                array.splice(index,1);
        }
        this.setState({
            tasks : array
        })
        let response = await removeNotes(this.state.id, this.state.tasks);
    }
    logout(){
        this.setState({
            tasks : [],
            id : "",
            name : "",
            password : ""
        })
    }
    signupUser(response){
        this.setState({
            id : response.id,
            name : response.name,
            password : response.password,
            tasks : response.notes
        });

    }
    openModal(openState){
        this.setState({
            open : openState
            })
        console.log("Open Modal",this.state.open);
    }
    render(){
        if(this.state.id===""){
            return (<div><Header title={this.state.title}/>
                <div class="tabs">
                <SimpleTabs signupUser = {this.signupUser}/>
                </div>
                </div>);
            // return(<EditModal />);
        }
        else{
            return (<div><Header title={this.state.title} username={this.state.name} logout = {this.logout}/>
                <TodoTaker handleAddTodo = {this.handleAddTodo}/>
                <TodoList tasks = {this.state.tasks} removeTodo={this.removeTodo} openModal={this.openModal}/>
                {/* {this.state.open && <EditModal open={this.state.open}/>} */}
                </div>);
        }
    }
}
export default TodoApp;
