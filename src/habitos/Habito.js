import styled from "styled-components";
import CriaHabito from "./CriaHabito";
import logo from "../assets/image/Group 8.png"

export default function Habito() {
    return (
          <Container>
                <CriaHabito/>
                <Span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Span>
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
  
  const Span = styled.span`
  font-size: 18px;
  color: #666666;
  width: 340px;
  `