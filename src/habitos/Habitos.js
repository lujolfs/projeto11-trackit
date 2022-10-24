import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Header from "../Header";
import Habito from "./Habito";
import Footer from "../Footer";
import axios from 'axios';
import HabitoSalvo from "./HabitoSalvo";

export default function Habitos() {
  const [naoTemHabito, setNaoTemHabito] = useState(true);
  const [pressButton, setPressButton] = useState(false);
  const [habitoSalvo, setHabitoSalvo] = useState([]);
  let savedHabit
  const config = {
    headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjY2MiwiaWF0IjoxNjY2NjExMDQzfQ.E788i9gQ1CiL7vs4IMA0ZwEuDhLRrCl0qJncJGrLSWw"
    }
  }
  const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`, config)

  useEffect(() => {
    promise.then( res => {
      console.log(res.data);
      setHabitoSalvo(res.data);
      if (res.data) {
        setNaoTemHabito(false);
      }
      
    }

    )
}, []);

    return (
          <Container>
            <Header/>
            <MeusHabitos>
                <SubContainer>
                    <h1>Meus hábitos</h1>
                    <AddHabitos onClick={() => setPressButton(true)}>+</AddHabitos>
                </SubContainer>
            </MeusHabitos>
            <SubContainer2>
              {pressButton ? <Habito setPressButton={setPressButton}/> : ""}
            </SubContainer2>
            <SubContainer3>
              {naoTemHabito ? <Span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Span> :
              habitoSalvo.map((habits) => 
              (
                <HabitoSalvo
                days = {habits.days}
                id = {habits.id}
                key = {habits.id}
                name = {habits.name}
                />
              ))}
              
            </SubContainer3>
            <Footer/>
          </Container>
    );

  }

  const Container = styled.div`
  height: 100%;
  width: 100%;
  font-family: 'Lexend Deca', sans-serif;
  font-size: 35px;
  background-color: #F2F2F2;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  `
  const Span = styled.span`
  font-size: 18px;
  color: #666666;
  padding-left: 10px;
  width: 340px;
  `

  const MeusHabitos = styled.div`
  margin-top: 20%;
  margin-bottom: 5%;
  width: 100%;
  color: #126BA5;
  font-size: 23px;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  `

  const SubContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 5px;
  margin-left: 5px;
  `
  const SubContainer2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `

  const SubContainer3 = styled.div`
  width: 100%;
  margin-bottom: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
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