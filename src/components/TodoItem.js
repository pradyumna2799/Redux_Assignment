import React from 'react';

const TodoItem = ({todo,handlestartEditTodo,handletoggleComplete,handledeleteTodo}) => {
  return (
    <div style={{textDecoration: todo.completed ? 'line-through': 'none'}}>
        <p>{todo.text}</p>
        <button onClick={()=>handlestartEditTodo(todo.id)}>Edit</button>
        <button onClick={()=>handletoggleComplete(todo.id)}>Complete</button>
        <button onClick={()=>handledeleteTodo(todo.id)}>Delete</button>
      
    </div>
  )
}

export default TodoItem;
