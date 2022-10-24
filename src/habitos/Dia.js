import styled from "styled-components";

export default function Dia(props) {
    const {dia, inicial} = props

    return (
        <Dias>
            {inicial}
        </Dias>
    )
}

const Dias = styled.div`
height: 30px;
width: 30px;
color: #D5D5D5;
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
border: 1px solid #D5D5D5;
border-radius: 5px;
`