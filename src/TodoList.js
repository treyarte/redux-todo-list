import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoForm from './TodoForm';
import { v4 as uuid } from 'uuid';
import Todo from './Todo';
import { Grid, Box, List, Paper } from '@material-ui/core';
import './TodoList.css';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const id = uuid();
  const add_todo = (activity) => {
    dispatch({ type: 'ADD_TODO', todo: { id: id, activity, complete: false } });
  };

  const toggle_todo = (todo) => {
    dispatch({ type: 'TOGGLE_TODO', todo });
  };

  const remove_todo = (id) => {
    dispatch({ type: 'REMOVE_TODO', id });
  };

  return (
    <>
      <Grid container direction='column' justify='center' alignItems='center'>
        <Box className='todo-list' m={3}>
          <header>
            <h1>Redux Todo List</h1>
          </header>
          <section className='form-section'>
            <TodoForm add_todo={add_todo} />
          </section>
          {todos.length > 0 && (
            <Paper elevation={4} m={3}>
              <section className='todo-section'>
                <List>
                  {todos.map((todo) => (
                    <Todo
                      key={uuid()}
                      todo={todo}
                      remove_todo={remove_todo}
                      toggle_todo={toggle_todo}
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
