import styled from 'styled-components'
import { categorias } from './categorias'
import { Titulo } from '../Titulo'
import { Link } from 'react-router-dom'

const Cards = styled.div`
    display: flex;
    flex-direction: column;    
    align-items: center;
`

const Card = styled.div`
    background-color: #FFF;
    margin: 10px 0 10px 0;
    border: 1px solid #00D4DC;
    border-radius: 5px;
    text-align: center;
`

function CardCategoria({titulo, img}) {
    return (
        <Cards>
            { categorias.map( (categoria) => (
                <Card key={categoria.id}>
                    <Link to={geraLinkCategoriaPeloNome(categoria.nome)}>
                        <img src={categoria.src} width='200px'/>
                        <Titulo
                            tamanhoFonte='16px'
                        >
                            {categoria.nome}
                        </Titulo>
                    </Link>
                </Card>
            ) ) }
        </Cards>
    )
}

function geraLinkCategoriaPeloNome(nomeCategoria) {
    return `/categorias/${nomeCategoria.replace(/\s+/g, '-').toLowerCase()}`;
}

export default CardCategoria