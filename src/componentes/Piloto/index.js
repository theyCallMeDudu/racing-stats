import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import API_BASE_URL from '../../apiConfig';
import loadingGif from '../../imagens/loading.gif';
import { useParams } from 'react-router-dom';

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

function Piloto({driverId}) {
    // const { driverId } = useParams();
    const [dados, setDados] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
            async function fetchDados() {
                try {
                    setLoading(true);
                    const response = await axios.get(`${API_BASE_URL}/f1/piloto/${driverId}`)
                    // const parser = new DOMParser();
                    // const xmlDocument = parser.parseFromString(response.data, 'application/xml')
                    // const driverId = xmlDocument.querySelector('DriverTable').getAttribute('driverId')
                    // setDados(response.data)  
                    // setDados(response.data.MRData.DriverTable.Drivers[0]);                  
                    console.log('URL: ', `${API_BASE_URL}/f1/piloto/${driverId}`)
                } catch (error) {
                    console.log('Erro ao buscar dados da API: ', error)
                } finally {
                    setLoading(false);
                }
            }
            fetchDados()    
    }, [driverId])

    return (
        <ContainerPaginaPilotos>
            <CorpoPagina>
                {loading ? (
                    <img src={loadingGif} alt='Carregando...' width={'50px'}/>
                ) : (
                    <div>
                        <div>{dados.givenName}</div>
                        <div>{dados && dados.$.driverId}</div>
                    </div>
                    )
                }
            </CorpoPagina>
        </ContainerPaginaPilotos>
    )
}

export default Piloto