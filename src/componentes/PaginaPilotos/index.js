import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import API_BASE_URL from '../../apiConfig';
import loadingGif from '../../imagens/loading.gif';
import Input from '../Input';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const ContainerPaginaPilotos = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
    text-align: center;
`

const CorpoPagina = styled.div`
    display: flex;
    justify-content: center;
`

const Tabela = styled.table`
    background-color: #FFF;
    max-height: 50px !important;
    overflow: auto;
`

const CabecalhoTabela = styled.thead`
    background-color: #FFF;
`

const CorpoTabela = styled.tbody`
    backfound-color: #FFF;
`

function PaginaPilotos({nome}) {
    const [dados, setDados] = useState([]);
    const [anoDigitado, setAnoDigitado] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (anoDigitado && anoDigitado.length >= 4) {
            async function fetchDados() {
                try {
                    setLoading(true);
                    const response = await axios.get(`${API_BASE_URL}/f1/${nome.toLowerCase()}/${anoDigitado}`)
                    setDados(response.data)
                    console.log('url: ', response)
                    
                } catch (error) {
                    console.log('Erro ao buscar dados da API: ', error)
                } finally {
                    setLoading(false);
                }
            }
    
            fetchDados()    
        }
    }, [nome, anoDigitado])

    const handleAnoDigitadoChange = (event) => {
        setAnoDigitado(event.target.value);
    }

    const handleAnoDigitadoBlur = () => {
        if (anoDigitado && anoDigitado.length >= 4) {
            setAnoDigitado(anoDigitado.substring(0, 4));
        }
    }

    return (
        <ContainerPaginaPilotos>
            <div>
                <Input
                    tipo='number'
                    valor={anoDigitado}
                    funcao={handleAnoDigitadoChange}
                    onBlur={handleAnoDigitadoBlur}
                />
            </div>
            { anoDigitado && anoDigitado.length >= 4 && loading ? (
                <img src={loadingGif} alt='Carregando...' width={'50px'}/>
            ) : (
                <CorpoPagina>
                    <Tabela>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Nacionalidade</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dados.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.givenName} {item.familyName}</td>
                                    <td>{item.nationality}</td>
                                    <td>
                                        <Link to={`/piloto/${item.driverId}`} driverId={item.driverId}>
                                            <FontAwesomeIcon icon={faEye}/>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Tabela>
                </CorpoPagina>
            ) }
        </ContainerPaginaPilotos>
    )
}

export default PaginaPilotos