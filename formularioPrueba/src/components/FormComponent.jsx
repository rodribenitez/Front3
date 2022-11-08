import React , {useState} from 'react'
import Container from './Container/Container'

const FormComponent = () => {

    const [inputValues, setInputValues] = useState({ name : "",lastname : "", email : "", password : "" })

        const handleSubmit = (e) =>{
            e.preventDefault(); 
            console.log(e);
            
        }

        const handleClearUp = () =>{
                setInputValues({name : "", lastname : "", email : "", password : ""})
        }

        const childProps = {
                inputValues,
                setInputValues,
                handleSubmit,
                handleClearUp
        }
  return  <Container {...childProps} ></Container>

  
}

export default FormComponent