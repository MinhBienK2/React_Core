import React from 'react';
import './test.css'
import {useState} from 'react'
const Haui = (props) => {
    const [state, setState] = useState(1)
    const [color,setColor] = useState(null)
    const handleIncrease = () => {
        setState(state + 1)
        setColor('#dd7600')
    }

    return (
        <div className="container">
            <h1 className="theh1" style={{color : `${color}`}} onMouseEnter={handleIncrease}>HIT 2022 {props.text} {state}</h1>
            {/* <h1 className="theh1" >HIT 2022 {props.text}</h1> */}
        </div>
    )
}

export default Haui;