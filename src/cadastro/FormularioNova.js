import styled from "styled-components";
import { useState } from "react";
import axios from 'axios';

export default function FormularioNova() {
    const [form, setForm] = useState({
        email: '',
        name: '',
        image: '',
        password: ''
    });
    const [disabled, setDisabled] = useState(false)

    function fazerCadastro (event) {
        const envio = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', form);
        event.preventDefault();
        setDisabled(true);
        envio.then(checkPost);
        envio.catch(checkError);
        };

    return (
        <Formu onSubmit={fazerCadastro}>
                <Campo type="text" name="email" placeholder="email" value={form.email} onChange={handleForm} disabled={disabled}/>
                <Campo type="password" name="password" placeholder="senha" value={form.password} onChange={handleForm} disabled={disabled}/>
                <Campo type="text" name="name" placeholder="nome" value={form.name} onChange={handleForm} disabled={disabled}/>
                <Campo type="text" name="image" placeholder="foto" value={form.image} onChange={handleForm} disabled={disabled}/>
                <Entrar>Cadastrar</Entrar>
        </Formu>
    )

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }
    
    function checkPost(response) {
        setDisabled(false);
    }

    function checkError(error) {
        setDisabled(false);
        setForm({
            email: '',
            name: '',
            image: '',
            password: ''
        })
    }

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
}

`

const Entrar = styled.button`
font-family: 'Lexend Deca', sans-serif;
font-size: 20px;
background-color: #52B6FF;
border: none;
border: 1px solid #52B6FF;
border-radius: 5px;
width: 313px;
height: 45px;
color: #FFFFFF;
margin-bottom: 25px;
`