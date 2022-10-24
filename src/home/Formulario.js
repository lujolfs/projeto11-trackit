import styled from "styled-components"
import {Link} from 'react-router-dom'

export default function Formulario() {
    return (
        <Formu>
                <Campo type="text" name="email" placeholder="email"/>
                <Campo type="text" name="senha" placeholder="senha"/>
                <Link to={`/habitos`}><Entrar>Entrar</Entrar></Link>
        </Formu>
    )

}

const Formu = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`

const Campo = styled.input`
border-sizing: border-box;
font-family: 'Lexend Deca', sans-serif;
font-size: 20px;
border: 1px solid #D5D5D5;
border-radius: 5px;
width: 303px;
height: 45px;
margin-bottom: 6px;
padding-left: 10px;
::placeholder {
    color: #DBDBDB;
    padding-left: 10px;
}

`

const Entrar = styled.button`
font-family: 'Lexend Deca', sans-serif;
font-size: 20px;
background-color: #52B6FF;
border: none;
border: 1px solid #52B6FF;
border-radius: 5px;
width: 303px;
height: 45px;
color: #FFFFFF;
margin-bottom: 25px;
`