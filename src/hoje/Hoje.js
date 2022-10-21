import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/image/Group 8.png"

export default function Hoje() {
    return (
          <Container>
              <Logo src={logo}/>
              Aqui vai ser a Página Hoje
          </Container>
    );
  }

  const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
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