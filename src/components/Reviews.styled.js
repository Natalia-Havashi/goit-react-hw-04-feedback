import styled from 'styled-components';

export const Container = styled.div `
background-color: #F9F7F4;
  border: 1px solid #bbc7c9;
  border-radius: 5px;
  height: 200px;
  width: 320px;
   
`
export const ContainerBtn = styled.div `
display: flex;
gap: 10px;
justify-content: center;
`

export const Button = styled.button `
width: 80px;
height: 30px;
text-align: center;
border-radius: 5px;
border: 1px solid black;
font-family: Roboto;
font-weight: 500;
font-size: 17px;
`
export const Feedback = styled.h2 `
text-align: center;
font-family: Roboto;
font-weight: 500;
font-size: 30px;
` 

export const Response = styled.li `
font-family: Roboto;
font-size: 18px;
font-weight: 500;
list-style: none;

`

export const Messege = styled.p `
font-family: Roboto;
font-size: 28px;
font-weight: 500;
text-align: center;
`