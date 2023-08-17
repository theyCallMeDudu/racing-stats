import styled from 'styled-components'
import CardCategoria from '../componentes/CardCategoria'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

function Categorias() {
    return (
        <AppContainer>
            <div>
                <h1>Explore as categorias disponíveis!</h1>
                <CardCategoria/>
            </div>
        </AppContainer>
    )
}

export default Categorias