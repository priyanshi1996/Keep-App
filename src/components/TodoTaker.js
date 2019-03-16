import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import '../css/TodoTaker.css';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    fab: {
      margin: theme.spacing.unit,
    }
  });
  

class TodoTaker extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            title:"",
            notes:"",
            date:""
        }
        
        this.handleOnChangeTitle = this.handleOnChangeTitle.bind(this);
        this.handleOnChangeNotes = this.handleOnChangeNotes.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.getCurrentDate = this.getCurrentDate.bind(this);
        this.emptyState = this.emptyState.bind(this);
    }
    
    handleOnChangeTitle(e){
        this.setState({
            title : e.target.value
        })
    }
    handleOnChangeNotes(e){
        this.setState({
            notes : e.target.value
        })
    }
    addTodo(e){
        this.getCurrentDate();
        e.preventDefault();
        console.log(this.props.handleAddTodo);
        console.log(this.state.value);
        this.props.handleAddTodo(this.state.title,this.state.notes,this.state.date);
        this.state.value = '';
    }
    getCurrentDate(){
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
    
        this.state.date = date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec;
        
    }
    openNoteBox(){
        document.getElementById('title').setAttribute("class", "displayTitle");
        document.getElementById('button').setAttribute("class", "displayButton");
    }
    hideNoteBox(){
        document.getElementById('title').setAttribute("class", "hideTitle");
        document.getElementById('button').setAttribute("class", "hideButton");
    }
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    setWrapperRef(node) {
        this.wrapperRef = node;
    }
    emptyState(){
        this.setState({
            title:"",
            notes:"",
            date:""
        });
    }
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.emptyState();
            this.hideNoteBox();
        }
      }
    render(){
        const { classes } = this.props;
        return (<div id = "box" ref={this.setWrapperRef}>
                <input type="text" placeholder="Title" id="title" class="hideTitle" onChange={this.handleOnChangeTitle} value={this.state.title}/>
                <br></br>
                <textarea  type="text" placeholder="Take a note..." class="note" onClick={this.openNoteBox} onChange={this.handleOnChangeNotes} value={this.state.notes}/>
                <br></br>
                <div class="hideButton" id="button">
                <Fab size="small" color="primary" aria-label="Add" className={classes.fab} onClick={this.addTodo} id="button1" >
                <AddIcon />
                </Fab>
                <Fab size="small"  disabled aria-label="Delete" className={classes.fab} id="button2">
                <DeleteIcon />
                </Fab>
                </div>
                </div>
                );
    }
}

TodoTaker.propTypes = {
    children: PropTypes.element.isRequired,
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(TodoTaker);

