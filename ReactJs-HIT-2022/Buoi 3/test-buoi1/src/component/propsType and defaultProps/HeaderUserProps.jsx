// rafcp : khởi tọa  có cả propTypes

import React from 'react'
import PropTypes from 'prop-types'
import {useState} from 'react'

const HeaderUserProps = props => {
    const [isHide, setIsHide] = React.useState(false)

    HeaderUserProps.defaultProps ={
        
    }

  return (
    <>
        {
            isHide && <div>{props.name}</div>
        }
        <button onClick={() => {setIsHide(!isHide)}}>click</button>
    </>
  )
}

HeaderUserProps.propTypes = {
    name : PropTypes.string
}

export default HeaderUserProps