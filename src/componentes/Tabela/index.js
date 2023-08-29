import React from "react";
import styled from 'styled-components'

const BaseTabela = styled.table`
    background-color: #FFF;
`

function Tabela({dados, colunas}) {
    return (
        <BaseTabela>
            <thead>
                <tr>
                    {colunas.map((coluna, index) => (
                        <th key={index}>{coluna}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {dados.map((item, index) => (
                    <tr key={index}>
                        {colunas.map((coluna, index) => (
                            <td key={index}>{item[coluna]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </BaseTabela>
    )
}

export default Tabela