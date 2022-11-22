import React from 'react';
import NavBar from '../../common/NavBar/NavBar'
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <NavBar/>
      <h1>Home</h1>
      <button onClick={() => navigate("/about")}>Ir a About</button>
    </div>
  )
}

export default Home