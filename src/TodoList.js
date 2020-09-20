import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add_todo, remove_todo, toggle_todo } from './actions';
import TodoForm from './TodoForm';

import Todo from './Todo';
import { Grid, Box, List, Paper } from '@material-ui/core';
import './TodoList.css';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handle_add = (activity, id) => dispatch(add_todo(activity, id));
  const handle_toggle = (todo) => dispatch(toggle_todo(todo));

  const handle_remove = (id) => dispatch(remove_todo(id));

  return (
    <>
      <Grid container direction='column' justify='center' alignItems='center'>
        <Box className='todo-list' m={3}>
          <header>
            <h1>Redux Todo List</h1>
          </header>
          <section className='form-section'>
            <TodoForm add_todo={handle_add} />
          </section>
          {todos.length > 0 && (
            <Paper elevation={4} m={3}>
              <section className='todo-section'>
                <List>
                  {todos.map((todo) => (
                    <Todo
                      key={todo.id}
                      todo={todo}
                      remove_todo={handle_remove}
                      toggle_todo={handle_toggle}
                    />
                  ))}
                </List>
              </section>
            </Paper>
          )}
        </Box>
      </Grid>
    </>
  );
};

export default TodoList;
