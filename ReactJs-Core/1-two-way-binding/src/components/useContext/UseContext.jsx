import React ,{useContext} from 'react'
import {data} from '../../index'

function UseContext() {
  const datetestne = useContext(data)
  console.log(datetestne)
  return (
    <div>UseContext</div>
  )
}

export default UseContext