import React, { useState } from 'react'

const ComponenteContador = () => {
    const [count, setCount] = useState(1)

    const handleIncrement = () => {
        if (count > 0 && count < 10) {
            setCount(prevState => prevState + 1)
            console.log("button clicked");
        }
    }
    const handleDecrement = () => {
        if (count > 1 && count < 10) {
            setCount(prevState => prevState - 1)
            console.log("button clicked");
        }
    }
    const handleMultiply = () => {
        if (setCount (prevState => prevState * 2) <= 50) {
            return prevState * 2;
        }

    }
    const handleDivide = () => {
        if (count > 0 && count < 50) {
            setCount(prevState => prevState / 2)
            console.log("button clicked");
        }
    }
    
  return (
    <div>
        <h1> {count} </h1>
        <button onClick={handleIncrement} >Sumar</button>
        <button onClick={handleDecrement} >Restar</button>
        <button onClick={handleMultiply}>Multiplicar</button>
        <button onClick={handleDivide}>Dividir</button>
    </div>
  )
}

export default ComponenteContador