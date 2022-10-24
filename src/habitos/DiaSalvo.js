import styled from "styled-components";
import { useState }  from 'react';

export default function DiaSalvo(props) {
    const {posicao, inicial, days} = props

    return (
        <Dias 
        posicao={posicao}
        days={days}
        onClick={() => console.log(days)}>
            {inicial}
        </Dias>
    )
}

const Dias = styled.div`
height: 30px;
width: 30px;
color: ${props => (props.posicao == props.days) ? "#FFFFFF" : "#D5D5D5"};
background: ${props => (props.posicao == props.days) ? "#D5D5D5" : "#FFFFFF"};
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
border: 1px solid #D5D5D5;
border-radius: 5px;
margin: 2px;
`