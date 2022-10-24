import styled from "styled-components";
import Dia from "./Dia";

export default function HabitoSalvo() {
    const dias = [
        {dia:  "domingo", inicial: "D"},
        {dia:  "segunda-feira", inicial: "S"},
        {dia:  "terça-feira", inicial: "T"},
        {dia:  "quarta-feira", inicial: "Q"},
        {dia:  "quinta-feira", inicial: "Q"},
        {dia:  "sexta-feira", inicial: "S"},
        {dia:  "sábado", inicial: "S"},
        ]

    return (
        <Container>
              <NomeHabito>Teste</NomeHabito>
              <Dias>
                {dias.map((dias, index) =>
                (
                <Dia 
                dia = {dias.dia}
                inicial = {dias.inicial}
                key = {index}
                index = {index}
                />
                ))}
              </Dias>
        </Container>
  );

}

const Container = styled.div`
font-family: 'Lexend Deca', sans-serif;
display: flex;
flex-direction: column;
justify-content: center;
background: white;
width: 340px;
height: 90px;
border-radius: 5px;
justify-content: space-evenly;
`

const NomeHabito = styled.div`
border-sizing: border-box;
font-family: 'Lexend Deca', sans-serif;
font-size: 20px;
color: #666666;
border-radius: 5px;
margin-bottom: 6px;
padding-left: 10px;
`

const Dias = styled.div`
display: flex;

`