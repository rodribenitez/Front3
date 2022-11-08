import React from 'react'
import {ParentComponent, Form, Input, ButtonContainer, Button} from "./style.js"

const Container = ({inputValues, setInputValues, handleSubmit, handleClearUp}) => {
  return (
    <div>
        <ParentComponent>
        <Form onClick={handleSubmit}>
            <span>Futura imagen...</span>
            <Input value={inputValues.name} onChange={(e) => setInputValues(e.target.value)}  fontColor ="red"/>
            <Input value={inputValues.lastname} onChange={(e) => setInputValues(e.target.value)} fontColor ="blue"/>
            <Input value={inputValues.email} onChange={(e) => setInputValues(e.target.value)} fontColor ="green"/>
            <Input value={inputValues.password} onChange={(e) => setInputValues(e.target.value)} fontColor ="black"/>
        </Form>
        <ButtonContainer>
            <Button onClick={handleClearUp}  type='button'>Cancel</Button>
            <Button type='submit' main = {true}> Submit</Button>
        </ButtonContainer>
        </ParentComponent>
    </div>
  )
}

export default Container