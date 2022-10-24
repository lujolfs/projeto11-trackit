import styled from "styled-components";
import logo from "./assets/image/Group 8.png"

export default function Footer() {
    return (
          <Container>
            <Opcoes>Hábitos</Opcoes>
            <Opcoes>Botao</Opcoes>
            <Opcoes>Histórico</Opcoes>
          </Container>
    );
  }

  const Container = styled.div`
  background: white;
  width: 100%;
  height: 8%;
  font-size: 39px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  position: fixed;
  bottom: 0;
  `
  
  const Opcoes = styled.div`
  font-size: 18px;
  color: #52B6FF;
  `