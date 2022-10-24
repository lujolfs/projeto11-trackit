import styled from "styled-components";
import DiaSalvo from "./DiaSalvo";

export default function HabitoSalvo(props) {
    const {days, name} = props;
    const dias = [
        {dia:  "domingo", inicial: "D", posicao: 0},
        {dia:  "segunda-feira", inicial: "S", posicao: 1},
        {dia:  "terça-feira", inicial: "T", posicao: 2},
        {dia:  "quarta-feira", inicial: "Q", posicao: 3},
        {dia:  "quinta-feira", inicial: "Q", posicao: 4},
        {dia:  "sexta-feira", inicial: "S", posicao: 5},
        {dia:  "sábado", inicial: "S", posicao: 6},
        ]

    return (
        <Container>
              <NomeHabito>{name}</NomeHabito>
              <Dias>
                {dias.map((dias, i) =>
                (
                <DiaSalvo 
                dia = {dias.dia}
                inicial = {dias.inicial}
                posicao = {dias.posicao}
                key = {i}
                index = {i}
                days = {days[i]}
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
background: white;
width: 340px;
height: 90px;
border-radius: 5px;
align-items: flex-start;
justify-content: space-around;
margin-bottom: 30px;
padding-left: 10px;
`

const NomeHabito = styled.div`
border-sizing: border-box;
font-family: 'Lexend Deca', sans-serif;
font-size: 20px;
color: #666666;
border-radius: 5px;
margin-bottom: 6px;
`

const Dias = styled.div`
display: flex;

`