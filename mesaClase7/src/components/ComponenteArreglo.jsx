import React, { useState } from 'react'


const ComponenteArreglo = () => {
    const array = [
        {
            id : 1,
            nombre : "Pan",
            precio : 50
        },
        {
            id : 2,
            nombre : "Manteca",
            precio : 80
        },
        {   
            id: 3,
            nombre : "Leche",
            precio : 40
        },
        {
            id: 4,
            nombre : "Asado",
            precio : 300
        },
        {
            id:5,
            nombre : "Arroz",
            precio : 150
        }
    
    ];

    
const [arry , setArray] = useState(array);

const borrar = (id) =>{
    const arrayNuevo = array.filter( i => i.id !=  id )
    setArray(arrayNuevo);
}


  return (
    <div>
        <ul>
        {array.map( (producto) =>(
           <li> <h1> {producto.nombre} </h1>
                <p>{producto.precio} </p>
                <button onClick={() => borrar(producto.id)}>Eliminar</button>
           </li> 
        ))}
        </ul>
    </div>
  )
}

export default ComponenteArreglo