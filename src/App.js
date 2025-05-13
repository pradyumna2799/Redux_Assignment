import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo,toggleComplete,deleteTodo,startEditTodo,saveEditTodo} from './actions/taskActions';

function App() {
  const todos = useSelector((state)=>state.todoReducer.todos);
  const input = useSelector((state) => state.todoReducer.input);
  const isEditing = useSelector((state)=>state.todoReducer.isEditing);

  const dispatch = useDispatch();
  
    const handleSetInput = (text) => {
    dispatch({ type: 'SET_INPUT', payload: text });
  };

 const handleaddTodo = (todo)=>{
  dispatch(addTodo(todo))
} 

  const handletoggleComplete = (id)=>{
    dispatch(toggleComplete(id))
    
  }

  const handledeleteTodo = (id) =>{
    dispatch(deleteTodo(id));
    
  }

 const handlestartEditTodo = (id) => {
    dispatch(startEditTodo(id))
};

  const handlesaveEditTodo = () => {
  dispatch(saveEditTodo(input));
};


  return (
   <div className="App">
      <h1>My Todo List</h1>

        <TodoForm input={input}  setInput={handleSetInput}  handleaddTodo={handleaddTodo} isEditing={isEditing} handlesaveEditTodo={handlesaveEditTodo}/>

        <TodoList todos={todos} handlestartEditTodo={handlestartEditTodo} handletoggleComplete={handletoggleComplete} handledeleteTodo={handledeleteTodo}  />

      
    </div>
  );
}

export default App;