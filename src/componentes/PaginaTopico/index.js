import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { topicos } from '../CardTopico/topicos';
import axios from 'axios';
import API_BASE_URL from '../../apiConfig';
import PaginaPilotos from '../PaginaPilotos';

const ContainerPaginaTopico = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
    text-align: center;
`

const TituloPaginaTopico = styled.h1`
    color: #FFF;
`

function PaginaTopico({nome}) {
    const topicoEncontrado = topicos.find((topico) => topico.nome === nome);

    return (
        <ContainerPaginaTopico>
            <TituloPaginaTopico>
                {topicoEncontrado ? topicoEncontrado.nome : 'Tópico não encontrado :('}
            </TituloPaginaTopico>
            {topicoEncontrado.id === 1 ? <PaginaPilotos nome={nome}/> : 'Página não encontrada'}
        </ContainerPaginaTopico>
    )
}

export default PaginaTopico;