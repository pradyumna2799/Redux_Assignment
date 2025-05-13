export const setInput = (text) => {
    return {
        type: 'SET_INPUT',
        payload: text,
    }
}

export const addTodo = (todo) => {
    return{
        type: 'ADD_TODO',
        payload: {
            id:Date.now(),
            text:todo,
            completed:false
        }
    }
}
export const toggleComplete = (id) => {
    return {
        type: 'TOGGLE_COMPLETE',
        payload: id,
       
    }
}
export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        payload: id,
    }
}

export const startEditTodo = (id) => {
    return {
        type: 'START_EDIT_TODO',
        payload: id,
    }
}

export const saveEditTodo = (text) => {
    return {
        type: 'SAVE_EDIT_TODO',
        payload: text
    }
}