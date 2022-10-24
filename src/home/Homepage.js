import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Formulario from "./Formulario";
import Cadastro from "./LinkCadastro";
import logo from "../assets/image/Group 8.png"
import axios from 'axios';

export default function Homepage() {
  return (
        <Container>
            <Logo src={logo}/>
            <Formulario />
            <Cadastro/>
        </Container>
  );
}

const Container = styled.div`
width: 100%;
margin: 150px;
font-family: 'Lexend Deca', sans-serif;
font-size: 35px;
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Logo = styled.img`
`