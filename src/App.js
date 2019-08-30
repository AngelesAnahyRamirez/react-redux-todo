import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TodoForm from './todoForm';
import TodoList from './todoList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      todos: []
    }
  }

  updateValue = e => {
    this.setState({
      value: e.target.value
    });
  }

  saveTodo = () =>{
    if(this.state.value){
      this.setState({
        todos: [
          ...this.state.todos, 
          {
            value: this.state.value,
            completed: false
          }
        ]})
      };
      console.log(this.state)
    }

  deletarTodo = (index) =>{
    this.setState({
      todos: this.state.todos.filter((_, i) => index !== i)
    });
  }

  toggleCompleted = index => {
    const todos = [...this.state.todos];
    todos[index].completed = !todos[index].completed;
    this.setState({ todos });
  }

  render() {
    return (
      <React.Fragment>
        <Typography variant='h2' align='center' gutterBottom>To-Do List</Typography>
        <Grid container justify='center'>
          <Grid item>
           <TodoForm saveTodo={this.saveTodo} updateValue={this.updateValue} value={this.state.value} toggleCompleted={this.toggleCompleted}/>
          </Grid>
        </Grid>
        <Grid container justify='center'>
          <Grid item md={8}>
            <TodoList todos={this.state.todos} deletarTodo={this.deletarTodo} toggleCompleted={this.toggleCompleted}/>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}

// POR CONVENçãO SEMPRE SE COMEçA OS COMPONENTES COM MAIUSCULAS ex: App
// const App = () => <h1>Hello World!</h1>
export default App;