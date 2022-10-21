import styled from "styled-components";
import avatar from "./assets/image/avatar.jpg"

export default function Header() {
    return (
          <Container>
              <Titulo>TrackIt</Titulo>
              <Avatar src={avatar}/>
          </Container>
    );
  }

  const Container = styled.div`
  background: #126BA5;
  width: 100%;
  height: 8%;
  font-family: 'Playball';
  font-size: 39px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  position: fixed;
  top: 0;
  `

  const Titulo = styled.h1`
  color: white;
  padding: 10px;
  `

  const Avatar = styled.img`
  width: 51px;
  height: 51px;
  border-radius: 50%;
  padding: 10px;
  `