import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/image/Group 8.png"
import axios from 'axios';
import FormularioNova from "./FormularioNova";
import PossuiCadastro from "./PossuiCadastro";



export default function Cadastro() {


  return (
        <Container>
            <Logo src={logo}/>
            <FormularioNova/>
            <PossuiCadastro/>
        </Container>
  );
}

const Container = styled.div`
font-family: 'Lexend Deca', sans-serif;
margin: 150px;
font-size: 35px;
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Logo = styled.img`
`