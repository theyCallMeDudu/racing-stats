import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { topicos } from '../CardTopico/topicos';
import axios from 'axios';
import API_BASE_URL from '../../apiConfig';

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
    const [dados, setDados] = useState([]);

    useEffect(() => {
        async function fetchDados() {
            try {
                const response = await axios.get(`${API_BASE_URL}/f1/${nome.toLowerCase()}`)
                setDados(response.data)
                console.log('url: ', response)
                
            } catch (error) {
                console.log('Erro ao buscar dados da API: ', error)
            }
        }

        fetchDados()
    }, [nome])

    return (
        <ContainerPaginaTopico>
            <TituloPaginaTopico>
                {topicoEncontrado ? topicoEncontrado.nome : 'Tópico não encontrado :('}
            </TituloPaginaTopico>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Nacionalidade</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((item, index) => (
                        <tr key={index}>
                            <td>{item.givenName} {item.familyName}</td>
                            <td>{item.nationality}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </ContainerPaginaTopico>
    )
}

export default PaginaTopico;