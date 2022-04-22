const initialState = []

const todoReducer = (state = initialState, action) => {
    switch (action.type){
        case 'addTodo':
            return [...state, action.payload]
        case 'deleteTodo':
            return state.filter(item => item !== action.payload)
        default:
            return state
    }    
}

export default todoReducer