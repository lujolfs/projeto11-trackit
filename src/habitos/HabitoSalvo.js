import styled from "styled-components";
import { useState, useEffect, prevState } from "react";
import DiaSalvo from "./DiaSalvo";
import trash from "../assets/image/trash-outline.svg"
import axios from "axios";

export default function HabitoSalvo(props) {
  const { days, name, id, deletado, setDeletado, setNaoTemHabito } = props;

  const dias = [
    { dia: "domingo", inicial: "D", posicao: 0 },
    { dia: "segunda-feira", inicial: "S", posicao: 1 },
    { dia: "terça-feira", inicial: "T", posicao: 2 },
    { dia: "quarta-feira", inicial: "Q", posicao: 3 },
    { dia: "quinta-feira", inicial: "Q", posicao: 4 },
    { dia: "sexta-feira", inicial: "S", posicao: 5 },
    { dia: "sábado", inicial: "S", posicao: 6 },
  ]
  const config = {
    headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjY2MiwiaWF0IjoxNjY2NjExMDQzfQ.E788i9gQ1CiL7vs4IMA0ZwEuDhLRrCl0qJncJGrLSWw"
    }
  }
  


  return (
    <Container>
      <Icon onClick={() => deleteHabit()}>
        <IonIcon src={trash}
        />
      </Icon>
      <NomeHabito>{name}</NomeHabito>
      <Dias>
        {dias.map((dias, i) =>
        (
          <DiaSalvo
            dia={dias.dia}
            inicial={dias.inicial}
            posicao={dias.posicao}
            key={i}
            index={i}
            days={days[i]}
          />
        ))}
      </Dias>
    </Container>
  );

  function deleteHabit() {
    if (window.confirm("Você tem certeza que quer apagar esse hábito?")) {
      const solDelete = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config);
      solDelete.then(del => {
        setNaoTemHabito(false)
      });
      solDelete.catch(erro => {
        console.log(erro.response.data)
      });
    } else {
      console.log("Cancelado.")
    }
  }

}

const Container = styled.div`
font-family: 'Lexend Deca', sans-serif;
display: flex;
flex-direction: column;
background: white;
width: 340px;
min-height: 100px;
border-radius: 5px;
align-items: flex-start;
justify-content: space-around;
margin-bottom: 30px;
padding-left: 10px;
`
const Icon = styled.div`
display: flex;
width: 98%;
justify-content: flex-end;
margin-right: 10px;
`

const IonIcon = styled.img`
width: 10px;
margin-top: 10px;
`

const NomeHabito = styled.div`
border-sizing: border-box;
width: 80%;
font-family: 'Lexend Deca', sans-serif;
font-size: 18px;
color: #666666;
border-radius: 5px;
margin-bottom: 6px;
`

const Dias = styled.div`
display: flex;
margin-bottom: 10px;
`