import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TodoForm from './todoForm';
import TodoList from './todoList';


  function App() {
    return (
      <Fragment>
        
        <Typography variant='h2' align='center' gutterBottom>To-Do List</Typography>;
        <Grid container justify='center'>
          <Grid item>
           <TodoForm />
          </Grid>
        </Grid>
        <Grid container justify='center'>
          <Grid item md={8}>
            <TodoList />
          </Grid>
        </Grid>
      </Fragment>
    )
}

// POR CONVENçãO SEMPRE SE COMEçA OS COMPONENTES COM MAIUSCULAS ex: App
// const App = () => <h1>Hello World!</h1>
export default App;