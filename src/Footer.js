import styled from "styled-components";
import logo from "./assets/image/Group 8.png"

export default function Footer() {
    return (
          <Container>
            Esse será o footer.
          </Container>
    );
  }

  const Container = styled.div`
  font-family: 'Lexend Deca', sans-serif;
  font-size: 35px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `
  
  const Logo = styled.img`
  `