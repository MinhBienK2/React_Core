import React, { useReducer } from "react";

const UseReducer = () => {
    let initialState = {
        value: "",
        todo: [],
    };
    const payloadValue = (payload) => {
        return {
            type: "SET_VALUE",
            payload,
        };
    };

    const payloadTodo = (payload) => {
        return {
            type: "ADD_TODO",
            payload,
        };
    };

    const payloadRemoveTodo = (payload) => {
        return {
            type : "REMOVE_TODO",
            payload
        }
    }

    const reducer = (state, action) => {
        console.log(state );
        // console.log(action );
        switch (action.type) {
            case "SET_VALUE": {
                return {
                    ...state,
                    value: action.payload,
                };
            }
            case "ADD_TODO": {
                return {
                    ...state,
                    todo : [...state.todo, action.payload],
                }
            }
            case "REMOVE_TODO": {
                return {
                    ...state,
                    todo : state.todo.filter(item => item !== action.payload)
                }
            }
            default:
                throw new Error("unhandled action type");
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    const {value, todo} = state;

    const handleValue = (e) => {
        dispatch(payloadValue(e.target.value));
    };

    const handleTodo = () => {
        dispatch(payloadTodo(value))
    }

    const handleRemoveTodo = (e) => {
        dispatch(payloadRemoveTodo(e))
    }

    return (
        <>
            <h1>hello</h1>
            <input type="text" onChange={(e) => handleValue(e)} value={state.value} />
            <button onClick={handleTodo}>add</button>
            {
                // console.log(state.todo)
               todo.map((item,index) => {
                    return <>
                        <div key={index} >{item}</div>
                        <span key={item} onClick={ e =>handleRemoveTodo(item)}>X</span>
                    </>
                })
            }
        </>
    );
};

export default UseReducer;
