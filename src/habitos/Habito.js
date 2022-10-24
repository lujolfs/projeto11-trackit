import styled from "styled-components";
import CriaHabito from "./CriaHabito";

export default function Habito(props) {
    const {setPressButton} = props
    return (
          <Container>
                <CriaHabito setPressButton={setPressButton} reload={props.reload}/>
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