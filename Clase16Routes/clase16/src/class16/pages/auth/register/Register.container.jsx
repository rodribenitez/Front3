import React, { useState } from 'react'
import Register from './Register'
import { useNavigate } from "react-router-dom"
const RegisterContainer = () => {

    const [values, setValues] = useState({ email: "", password: "" });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.email.length > 0 && values.password.length > 0) {
      navigate("/login")
      console.log("submit", values);
    }
  }

  const childProps = {
    values,
    handleSubmit,
    handleChange,
  }


  return (
    <Register {...childProps} />
  )
}

export default RegisterContainer