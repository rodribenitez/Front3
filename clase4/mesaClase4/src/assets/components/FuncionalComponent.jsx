import React from 'react'
import MockComponent from './MockComponent'

const FuncionalComponent = (props) => {
  return (
    <div>{props.message.texto}
    
    <MockComponent message = "Estamos en compnente funcional de parte de Mock" />
    
    </div>

  )
}

export default FuncionalComponent