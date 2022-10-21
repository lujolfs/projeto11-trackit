import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../Header";
import Habito from "./Habito";
import Footer from "../Footer";

export default function Habitos() {
    return (
          <Container>
            <Header/>
            <MeusHabitos>
                <SubContainer>
                    <h1>Meus hábitos</h1>
                    <AddHabitos>+</AddHabitos>
                </SubContainer>
            </MeusHabitos>
            <Habito/>
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
  background-color: #E5E5E5;
  display: flex;
  flex-direction: column;
  align-items: center;
  `
  const MeusHabitos = styled.div`
  margin-top: 20%;
  width: 100%;
  color: #126BA5;
  font-size: 23px;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  `

  const SubContainer = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  `
const AddHabitos = styled.button`
  height: 35px;
  font-size: 27px;
  width: 40px;
  border: none;
  background: #52B6FF;
  border-radius: 10%;
  color: white;
  `