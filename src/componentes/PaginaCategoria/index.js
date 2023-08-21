import styled from 'styled-components'
import { categorias } from '../CardCategoria/categorias'
import CardTopico from '../CardTopico';

const ContainerPagina = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
    text-align: center;
`

const TituloPagina = styled.h1`
    color: #FFF;
`

const ContainerTopicos = styled.div`
    display: flex;
    justify-content: center;
`

function PaginaCategoria({ nome }) {
    const categoria = categorias.find((categoria) => categoria.nome === nome);

    if (!categoria) {
        return <ContainerPagina><TituloPagina>Categoria não encontrada!</TituloPagina></ContainerPagina>
    }

    return (
        <ContainerPagina>
            <TituloPagina>{categoria.nome}</TituloPagina>
            <ContainerTopicos>
                <CardTopico/>
            </ContainerTopicos>
        </ContainerPagina>
    )
}

export default PaginaCategoria