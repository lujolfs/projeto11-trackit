import styled, { withTheme } from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import logo from "./assets/image/Group 8.png"

export default function Footer() {
  const percentage = 66;
    return (
          <Container>
            <Link to={`/habitos`} style={{textDecoration: 'none'}}><Opcoes>Hábitos</Opcoes></Link>
            <Link to={`/hoje`} style={{textDecoration: 'none'}}><ProgBar><CircularProgressbar value={percentage} styles={tileira} background={true} backgroundPadding={6} text={'Hoje'} /></ProgBar></Link>
            <Link to={`/historico`} style={{textDecoration: 'none'}}><Opcoes>Histórico</Opcoes></Link>
          </Container>
    );
  }

  const tileira = {
    path: {
      stroke: 'white',
    },
    trail: {
      stroke: '#52B6FF',
    },
    background: {
      fill: '#52B6FF',
    },
    text: {
      fill: 'white',
    }
  }

  const Container = styled.div`
  background: white;
  width: 100%;
  height: 8%;
  font-size: 39px;
  font-weight: 400;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: visible;
  `
  
  const Opcoes = styled.div`
  font-size: 18px;
  color: #52B6FF;
  `

  const ProgBar = styled.div`
  width: 82px;
  height: 82px;
  padding-bottom: 30px;
  z-index: 10;
  `