import React from 'react';

const TodoForm = ({ input, setInput, handleaddTodo, isEditing, handlesaveEditTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    isEditing ? handlesaveEditTodo() : handleaddTodo(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit">{isEditing ? 'Save' : 'Add Todo'}</button>
    </form>
  );
};

export default TodoForm;
