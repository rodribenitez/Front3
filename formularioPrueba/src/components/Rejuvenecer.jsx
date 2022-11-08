import React, { useState } from 'react'
import './estilo.css'
const Rejuvenecer = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const onChangeUserName = (e) => setUserName(e.target.value);
    const onChangePassword = (e) => setPassword(e.target.value);

    const onSubmitForm = (e) => {

        e.preventDefault();
        

        alert(`Bienvenido: ${userName}`);
        };

  return (
    <div className='centrar'>
        <h3>Iniciar Sesión</h3>

    <form className='formulario' onSubmit={onSubmitForm}> 
   
    <input type="text"
    placeholder="Nombre de usuario"
    value={userName}
    onChange={onChangeUserName}
    />
    <input
    type="password"
    placeholder="Password"
    value={password}
    onChange={onChangePassword}
    />

    <button type="submit">Enviar ahora </button></form></div> 
  )
}

export default Rejuvenecer