import { useState } from 'react'
import './App.css'
import ComponenteContador from './components/ComponenteContador'
import ComponenteArreglo from './components/ComponenteArreglo'

function App() {

  return (
    <div className="App">
        <ComponenteContador/>
        <ComponenteArreglo/>
    </div>
  )
}

export default App
