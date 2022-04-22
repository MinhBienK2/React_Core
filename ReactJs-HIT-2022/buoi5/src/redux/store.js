import {createStore,combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import todoReducer from './reducers'

const rootReducer = combineReducers({
    todoList : todoReducer
})

const store = createStore(rootReducer,composeWithDevTools())

export default store

