import styled from 'styled-components'
import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo largura='100px'/>
            <OpcoesHeader/>
        </HeaderContainer>
    )
}

export default Header