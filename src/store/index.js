import { createStore, combineReducers } from 'redux';
import { todoReducer } from '../reducers/taskReducer';

const rootReducer = combineReducers({
  todoReducer 
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
