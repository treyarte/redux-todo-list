import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import './TodoList.css';

const TodoForm = ({ add_todo }) => {
  const INITIAL_STATE = {
    todo: '',
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    add_todo(formData.todo);
    setFormData(INITIAL_STATE);
  };
  return (
    <form action='' onSubmit={handleSubmit}>
      <div>
        {/* <label htmlFor='todo'>Todo</label> */}
        <TextField
          id='id'
          label='Todo'
          variant='standard'
          name='todo'
          value={formData.todo}
          onChange={handleChange}
        />
        {/* <input
          type='text'
          name='todo'
          id='todo'
          value={formData.todo}
          onChange={handleChange}
          placeholder='Enter an activity'
        /> */}
      </div>
    </form>
  );
};

export default TodoForm;
