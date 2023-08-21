import styled from 'styled-components'
import CardCategoria from '../componentes/CardCategoria'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
    display: flex;
    justify-content: center;
`

const ContainerCategorias = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h1`
    color: #FFF;
`

function Categorias() {
    return (
        <AppContainer>
            <ContainerCategorias>
                <Title>Explore as categorias disponíveis!</Title>
                <CardCategoria/>
            </ContainerCategorias>
        </AppContainer>
    )
}

export default Categorias