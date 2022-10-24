import styled from "styled-components";
import { useState }  from 'react';

export default function Dia(props) {
    const {nome, dia, inicial, selecionados, setSelecionados} = props
    const [diaSelect, setDiaSelect] = useState(true);
    const conjSelec = selecionados;

    function pintaDia() {
        setDiaSelect(!diaSelect);
        if (diaSelect) {
            conjSelec.push(dia);
            console.log(conjSelec);
            setSelecionados(conjSelec);
        } else {
            conjSelec.splice(conjSelec.indexOf(dia), 1);
            setSelecionados(conjSelec);
        }
    }

    return (
        <Dias 
        diaSelect={diaSelect}
        onClick={pintaDia}>
            {inicial}
        </Dias>
    )
}

const Dias = styled.div`
height: 30px;
width: 30px;
color: ${props => props.diaSelect ? "#D5D5D5" : "#FFFFFF"};
background: ${props => props.diaSelect ? "#FFFFFF" : "#D5D5D5"};
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
border: 1px solid #D5D5D5;
border-radius: 5px;
`