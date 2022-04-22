import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'

function Footer() {
    const [value, setValue] = useState('')
    useEffect(async () => {
        
    <>
        {
            value && value.map((item,index) => {
                return (
                    <>
                        <div key={index}>{item.title}</div>
                    </>
                )
            })
        }
    </>
    })
}

export default Footer