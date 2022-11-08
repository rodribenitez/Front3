import styled, { css } from "styled-components";

export const ParentComponent = styled.div `
    width:  350px;
    height: auto;
    margin: 0 auto;
    border: 1px solid gray;
    border-radius:  5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
`


export const Form = styled.form`
    width: 100%;
    height: auto;
`

export const Input = styled.input `
    padding: 10px;
    width: 94%;
    margin-top: 10px;
    border-radius: 5px;
    border: 1px dotted gray;
    color: #000;
    gap: 20px;
    &:focus{
        outline: none;
    }

    color: ${ (props) => props.fontColor };
`

export const ButtonContainer = styled.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 25px;
`;

export const Button = styled.button`
  width: 45%;
  font-family: "Poppins", sans-serif;
  background-color: ${({ main }) => (main ? "red" : "blue")};
  box-shadow: ${({ main }) => (main ? "red" : "blue")};
  color: #eee;
  border: none;
  border-radius: 5px;
  font-size: 0.9em;
  letter-spacing: 1px;
  padding: 10px;
  cursor: pointer;
  ${({ main }) =>
    main &&
    css`
      &:hover {
        transform: scale(1.02);
      }
    `}
`;
