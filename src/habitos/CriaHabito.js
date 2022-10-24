import styled from "styled-components";
import Dia from "./Dia.js"

export default function CriaHabito() {
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
            <PopCriaHabito>
              <Input>
                <Campo type="text" name="nome-do-habito" placeholder="nome do hábito"/>
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
              </Input>
              <Botoes>
                <Cancelar>Cancelar</Cancelar>
                <Salvar>Salvar</Salvar>
              </Botoes>
            </PopCriaHabito>
          </Container>
    );
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
    padding-left: 10px;
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