import React from 'react'
import { LoginContainer, StyledImg, FormContainer, Header, StyledForm, StyledInput, StyledButton } from "./LoginStyles"
import meal from "../../assets/meal.svg"

const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("submit");
    window.location.href="/home";
  }



  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />
        <Header>{"<Clarusway/>"}</Header>
        <StyledForm onsubmit={handleSubmit}>
          <StyledInput type="text" placeholder="username" required></StyledInput>
          <StyledInput type="text" placeholder="password" required></StyledInput>,
          <StyledButton type='submit'>Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  )
}

export default Login