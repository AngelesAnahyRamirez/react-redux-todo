import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';

const TodoList = ({todos, deletarTodo, toggleCompleted}) => {
  return (
    <List>
      {todos.map((todo, index) => {
        return (
          <ListItem button key={index} onClick={() => toggleCompleted(index)}>
            <Checkbox checked={todo.completed}/>
            <ListItemText primary={todo.value} />
            <ListItemSecondaryAction>
              <IconButton onClick= {() => deletarTodo(index)}>
                <DeleteIcon/>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  )
}

export default TodoList;