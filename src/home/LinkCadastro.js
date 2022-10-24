import styled from "styled-components"
import {Link} from 'react-router-dom'

export default function LinkCadastro() {
    return (
        <Link to={`/cadastro`}>
        <UrlCadastro>
            Não tem uma conta? Cadastre-se!
        </UrlCadastro>
        </Link>
    )

}

const UrlCadastro = styled.div`
color: #52B6FF;
font-size: 14px;
font-weight: 400;
text-decoration-line: underline;
`