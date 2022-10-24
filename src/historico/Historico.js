import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import 'dayjs/locale/pt-br';

export default function Historico() {
    const dayjs = require('dayjs')

    return (
          <Container>
            <Header/>
            {dayjs().format('dddd, DD/MMMM')}
            <Footer/>
          </Container>
    );
    
  }

  const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  font-family: 'Lexend Deca', sans-serif;
  font-size: 35px;
  background-color: #F2F2F2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `
  
  const Logo = styled.img`
  `