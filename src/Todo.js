import React from 'react';
import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
} from '@material-ui/core';
const Todo = ({ todo, remove_todo, toggle_todo }) => {
  const { id, activity } = todo;

  const style = todo.complete
    ? { textDecoration: 'line-through' }
    : { textDecoration: 'none' };

  const handleToggle = () => {
    toggle_todo(todo);
  };

  const handleRemove = () => {
    remove_todo(id);
  };

  return (
    <>
      <ListItem dense button onClick={handleToggle}>
        <ListItemText style={style} primary={activity} />
        <ListItemSecondaryAction onClick={handleRemove}>
          <IconButton>
            <span className='material-icons' aria-label='remove todo'>
              close
            </span>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </>
  );
};

export default Todo;
