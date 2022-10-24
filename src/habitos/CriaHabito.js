import styled from "styled-components";
import Dia from "./Dia.js"
import { useState } from 'react';
import axios from 'axios';

export default function CriaHabito(props) {
const {setPressButton, setForceRerender, forceRerender} = props
const dias = [
{nome:  "domingo", dia: 0, inicial: "D"},
{nome:  "segunda-feira", dia: 1, inicial: "S"},
{nome:  "terça-feira", dia: 2, inicial: "T"},
{nome:  "quarta-feira", dia: 3, inicial: "Q"},
{nome:  "quinta-feira", dia: 4, inicial: "Q"},
{nome:  "sexta-feira", dia: 5, inicial: "S"},
{nome:  "sábado", dia: 6, inicial: "S"},
]

const config = {
  headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjY2MiwiaWF0IjoxNjY2NjExMDQzfQ.E788i9gQ1CiL7vs4IMA0ZwEuDhLRrCl0qJncJGrLSWw"
  }
}

const [selecionados, setSelecionados] = useState([9, 9, 9, 9, 9, 9, 9])
const [habitoNovo, setHabitoNovo] = useState({
  name: '',
  days: selecionados,
});

    return (
          <Container>
            <PopCriaHabito>
              <Input>
                <Campo type="text" name="name" placeholder="nome do hábito" value={habitoNovo.name} onChange={handleHabit} />
                <ion-icon name="trash-outline"></ion-icon>
                <Dias>
                  {dias.map((dias, index) =>
                  (
                  <Dia 
                  nome = {dias.nome}
                  dia = {dias.dia}
                  inicial = {dias.inicial}
                  key = {index}
                  index = {index}
                  selecionados = {selecionados}
                  setSelecionados = {setSelecionados}
                  />
                  ))}
                </Dias>
              </Input>
              <Botoes>
                <Cancelar onClick={cancelaHabito}>Cancelar</Cancelar>
                <Salvar onClick={salvarHabito}>Salvar</Salvar>
              </Botoes>
            </PopCriaHabito>
          </Container>
    );

    function handleHabit(e) {
      setHabitoNovo({
          ...habitoNovo,
          [e.target.name]: e.target.value,
      })
  }

    function salvarHabito() {
      console.log(habitoNovo);
      console.log(selecionados);
      const sentHabit = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', habitoNovo, config)
      .then((response) => {
        const data = response.data;
        props.reload(response.data, "create")
      });
      sentHabit.then(completeHabit);
      sentHabit.catch(checkError);
      }

    function completeHabit(response) {
      setPressButton(false);
    }

    function checkError(error) {
      console.log(error);
    }

    function cancelaHabito() {
      setPressButton(false);
    }

  }

  const Container = styled.div`
  font-family: 'Lexend Deca', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  `

  const PopCriaHabito = styled.div`
  background-color: white;
  width: 340px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
  margin-bottom: 30px;
  `

  const Input = styled.div`
  `

  const Campo = styled.input`
  border-sizing: border-box;
  font-family: 'Lexend Deca', sans-serif;
  font-size: 20px;
  border: 1px solid #D5D5D5;
  color: #666666;
  border-radius: 5px;
  width: 303px;
  height: 45px;
  margin-bottom: 6px;
  padding-left: 10px;
  ::placeholder {
    color: #DBDBDB;
  }
  :focus {
    border-color: #666666;
  }
  `

  const Dias = styled.div`
  display: flex;
  `

  const Botoes = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-right: 23px;
  `

  const Salvar = styled.button`
  font-size: 16px;
  height: 35px;
  width: 84px;
  font-family: 'Lexend Deca', sans-serif;
  border: none;
  background: #52B6FF;
  border-radius: 10%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  `

  const Cancelar = styled.button`
  font-size: 16px;
  height: 35px;
  width: 84px;
  font-family: 'Lexend Deca', sans-serif;
  border: none;
  color: #52B6FF;
  background: white;
  border-radius: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  `