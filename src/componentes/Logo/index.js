import logo from '../../imagens/logo-rs.png'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    font-size: 28px;
`

const LogoImage = styled.img`
    margin-right: 10px;
    width: ${props => props.largura || '120px'};
`

function Logo(props) {
    return (
        <LogoContainer>
            <LogoImage
                src={ logo }
                largura={props.largura}
                alt='Logotipo da aplicação. Carro de corrida.'/>
            <p><strong>Racing</strong>Stats</p>
        </LogoContainer>
    )
}

export default Logo