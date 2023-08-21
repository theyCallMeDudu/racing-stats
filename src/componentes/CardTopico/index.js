import styled from 'styled-components'
import { topicos } from './topicos'
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

function CardTopico({titulo, img}) {
    return (
        <Cards>
            { topicos.map( (topico) => (
                <Card key={topico.id}>
                    <Link to={geraLinkTopicoPeloNome(topico.nome)}>
                        <img src={topico.src} width='200px'/>
                        <Titulo
                            tamanhoFonte='16px'
                        >
                            {topico.nome}
                        </Titulo>
                    </Link>
                </Card>
            ) ) }
        </Cards>
    )
}

function geraLinkTopicoPeloNome(nomeTopico) {
    return `/topicos/${nomeTopico.replace(/\s+/g, '-').toLowerCase()}`;
}

export default CardTopico