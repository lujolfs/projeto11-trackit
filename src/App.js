import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Homepage from "./home/Homepage";
import Cadastro from "./cadastro/Cadastro";
import Habitos from "./habitos/Habitos";
import Hoje from "./hoje/Hoje";
import Historico from "./historico/Historico";

export default function App() {
  return (
    <BrowserRouter>
        <Container>
          <GlobalStyle/>
          <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/cadastro" element={<Cadastro/>} />
            <Route path="/habitos" element={<Habitos/>} />
            <Route path="/hoje" element={<Hoje/>} />
            <Route path="/historico" element={<Historico/>} />
          </Routes>
        </Container>
    </BrowserRouter>
  );
}


const Container = styled.div`
position: absolute;
width: 100%;
height:100%;
font-family: 'Lexend Deca', sans-serif;
font-size: 35px;
background-color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
overflow: scroll;
`