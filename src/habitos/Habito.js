import styled from "styled-components";
import CriaHabito from "./CriaHabito";
import logo from "../assets/image/Group 8.png"

export default function Habito(props) {
    const {setPressButton} = props
    return (
          <Container>
                <CriaHabito setPressButton={setPressButton}/>
          </Container>
    );
  }

  const Container = styled.div`
  font-family: 'Lexend Deca', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `
  
  const Span = styled.span`
  font-size: 18px;
  color: #666666;
  width: 340px;
  `