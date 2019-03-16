import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../css/Todo.css';

class Todo extends React.Component {
    constructor(){
        super();
        this.state={
            open :false
        }
        this.handleOnClick = this.handleOnClick.bind(this);
    }
    handleOnClick(){
        this.setState({
            open:true
        })
        this.props.openModal(this.state.open);
    }

render(){
  return (
    <div class="column">
        <Card className="card">
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                {this.props.task.date}
                </Typography>
                <Typography variant="h5" component="h2">
                {this.props.task.title}
                </Typography>
                <Typography component="p">
                {this.props.task.notes}
                <br />
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={this.props.handleOpen}>Edit</Button>
                <Button size="small" variant="contained" color="secondary" onClick={this.props.remove} value = {this.props.task.id} >Delete</Button>
                
            </CardActions>
        </Card>
    </div>
  );
}
}

// Todo.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default Todo;