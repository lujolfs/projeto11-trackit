import styled from "styled-components"
import {Link} from 'react-router-dom'

export default function PossuiCadastro() {
    return (
        <Link to={`/`}>
        <LinkCadastro>
            Já tem uma conta? Faça login!
        </LinkCadastro>
        </Link>
    )

}

const LinkCadastro = styled.div`
color: #52B6FF;
font-size: 14px;
font-weight: 400;
text-decoration-line: underline;
`