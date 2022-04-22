import React,{useState,useEffect}  from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {addTodo} from '../redux/redux-toolkit/todoSlide'

const Header = () => {
    const [value, setValue] = useState('')  
    const dispatch = useDispatch()
    const todoList = useSelector(state => state.todo)
    const handleEvent =function () {
        dispatch(addTodo(value))
    }

    // const handleDeleteTodo = (item) => {
    //     dispatch(deleteTodo(item))
    // }

    // useEffect(() => {
    //     console.log(value)
    //     console.log(todoList)
    // },[todoList])

   
  return (
      <>
         <h1>Header</h1>
         <input type="text" placeholder="addtodo" onChange = {(e) => {setValue(e.target.value)}}/>
         <button onClick={handleEvent}>Add</button>
         {
             todoList && todoList.map((item,index) => {
                 return (
                     <>
                        <div key={index}>{item}</div>
                        {/* <span onClick = {e => {handleDeleteTodo(item)}}>x</span> */}
                     </>
                 )
             })
         }
      </>
    
  )
}

export default Header