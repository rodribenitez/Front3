import React, {useState} from 'react'


const ListComponent = () => {

const arrPerritos = [
    {
        id: 1,
        name : "Firulais",
        age: 11,
        sex : "Macho",
        raza : "Pastor Aleman",
        heigth : "Grande"
    },

    {
        id : 2,
        name : "Maya",
        age: 13,
        sex : "Hembra",
        raza : "Pug",
        heigth : "Chico"
    },
    {   
        id: 3,
        name : "Pipo",
        age: 5,
        sex : "Macho",
        raza : "Schnauzer",
        heigth : "Mediano"
    },
    {
        id: 4,
        name : "Pacha",
        age: 2,
        sex : "Hembra",
        raza : "Meztizo",
        heigth : "Chico"
    }
]




  return (
    <div>
        <ul>
           { arrPerritos.map((item)=>(
                <li key={item.id} style={{listStyle:"none"}}>
                    <h2> Nombre : {item.name} </h2>
                <ul>
                    <li> Edad : {item.age} </li>
                    <li> Sexo : {item.sex} </li>
                    <li> Raza : {item.raza} </li>
                    <li> Tamaño : {item.heigth} </li>
                </ul>
                 </li>
           ))}
        </ul>
    </div>
  )
}

export default ListComponent