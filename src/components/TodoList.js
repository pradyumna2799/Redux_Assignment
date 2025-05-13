import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, handlestartEditTodo, handletoggleComplete, handledeleteTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handlestartEditTodo={handlestartEditTodo}  
          handletoggleComplete={handletoggleComplete}
          handledeleteTodo={handledeleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
