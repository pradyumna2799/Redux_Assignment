const initialState = {
  todos: [],
  input: '',
  isEditing: false,
  editIndex: 0
};

export const todoReducer = (state=initialState,action)  => {
    switch(action.type){
         case 'SET_INPUT':  
      return {
        ...state,
        input: action.payload, 
      };

        case 'ADD_TODO':
            const {id,text,completed} = action.payload;
            const duplicate = state.todos.some(todo => todo.text.toLowerCase() === text.toLowerCase());
            if (duplicate) {
                return state; 
            }
        return {
            ...state,
            todos: [
                ...state.todos,
                {
                    id:id,
                    text:text,
                    completed:completed
                }
            ],
            input: '',
        }

        case 'DELETE_TODO':
            return {
                ...state,todos: [...state.todos.filter(todo => todo.id !== action.payload)]
         }

         case 'TOGGLE_COMPLETE':
            return {
                ...state,todos: [...state.todos.map(todo =>
                todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
         )]
    

         }

         case 'START_EDIT_TODO':
            return {
                ...state,isEditing: true,
        editIndex: action.payload,
        input: state.todos.find(todo => todo.id === action.payload)?.text || ''
            }


             case 'SAVE_EDIT_TODO':
            return {
                ...state,isEditing: false,
                input: '',
                todos: [...state.todos.map(todo =>
                todo.id === state.editIndex ? { ...todo, text: action.payload } : todo
        ),

           ] }



       

    default: return state;
    }
}